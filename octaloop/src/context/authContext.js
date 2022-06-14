import { createContext, useState } from "react";
import axios from "axios";
import { SIGN_IN, LOG_OUT, UPDATE_PROFILE } from "../urls";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const handleSignup = async (email, password) => {
    try {
      const response = await axios.post(
        SIGN_IN,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response.headers["accessToken"], response, document.cookie);
      //   Cookies.set("access-token", response.headers["accessToken"]);
      setRole(response?.data?.role);
    } catch (err) {
      console.log({ err });
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(LOG_OUT, {
        // cookies,
      });
      console.log({ response });
    } catch (err) {
      console.log({ err });
    }
  };

  const updateUserData = async (address, email, username, pincode) => {
    console.log({ address, email, username, pincode });
    try {
      const response = await axios.post(
        UPDATE_PROFILE,
        {
          email,
          name: username,
          address,
          zipCode: pincode,
        },
        { withCredentials: true }
      );
      console.log({ response });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleSignup,
        handleLogout,
        role,
        setRole,
        userInfo,
        setUserInfo,
        updateUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
