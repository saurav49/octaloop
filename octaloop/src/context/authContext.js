import { createContext } from "react";
import axios from "axios";
import { SIGN_IN, LOG_OUT } from "../urls";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const hash = async (string) => {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };

  const handleSignup = async (email, password) => {
    try {
      const hashedPass = hash(password);
      const response = await axios.post(SIGN_IN, {
        email,
        hashedPass,
      });
    } catch (err) {
      console.log({ err });
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(LOG_OUT, {
        cookies,
      });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <AuthContext.Provider value={{ handleSignup, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
