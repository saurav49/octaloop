import { useState } from "react";
import {
  AiOutlineGoogle,
  FaLock,
  MdOutlineAlternateEmail,
} from "../Icons/Icons";
import { useAuth } from "../hooks/useAuth";
import { validateEmail, validatePassword } from "../utils";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    emailErr: "",
    passErr: "",
  });
  const { handleSignup } = useAuth();

  const hash = async (string) => {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };

  const handleUserCredentails = async (email, password) => {
    // if (!validateEmail(email)) {
    //   setError((prevState) => ({
    //     ...prevState,
    //     emailErr: "An email address must contain a single @",
    //   }));
    //   return;
    // }
    // if (!validatePassword(password)) {
    //   setError((prevState) => ({ ...prevState, passErr: "invalid password" }));
    //   return;
    // }
    setError({ emailErr: "", passErr: "" });
    const hashPass = await hash(password);
    handleSignup(email, hashPass);
  };

  return (
    <div className="w-[80%] mx-auto mt-5 sm:mt-10 sm:mr-32 sm:w-[450px] bg-[#ffffff] p-10 flex flex-col items-start rounded-lg">
      <p className="text-sm text-[#97999b] uppercase mb-2.5">
        type something here
      </p>
      <h2 className="text-5xl font-semibold text-[#000000] mb-2.5">
        Sign up to Binamite
      </h2>
      <p className="text-lg text-[#97999b] mb-10">
        Already a member?
        <span className="text-indigo-500 font-bold text-lg">Sign In</span>
      </p>
      <div className="w-full flex flex-col items-start space-y-2 mt-5 mb-4">
        <label htmlFor="email" className="text-sm text-[#000000] font-semibold">
          Email ID
        </label>
        <div className="relative sm:w-full flex items-center">
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`rounded-lg bg-[#f5f5f5] p-4 w-full ${
              error.emailErr.length > 0 && `border-2 border-red-[#D36480]`
            }`}
          />
          <MdOutlineAlternateEmail className="absolute right-5 text-[#97999b]" />
        </div>
        {error.emailErr.length > 0 && (
          <p className="text-xs text-[#d36480] mt-2 mb-20">
            An email address must contain a single @
          </p>
        )}
      </div>
      <div className="w-full flex flex-col items-start space-y-2">
        <label
          htmlFor="password"
          className="text-sm text-[#000000] font-semibold"
        >
          Password
        </label>
        <div className="relative sm:w-full flex items-center">
          <input
            type="password"
            name="password"
            placeholder="8+ characters, 1 Capital letter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`rounded-lg bg-[#f5f5f5] p-4 w-full ${
              error.passErr.length > 0 && "border-2 border-[#D36480]"
            }`}
          />
          <FaLock className="absolute right-5 text-[#97999b]" />
        </div>
        <p
          className={`text-xs text-[#97999b] mt-2 ${
            error.passErr.length > 0 && "text-[#D36480]"
          }`}
        >
          1 lower character, 1 upper character, 1 number and 1 special
          character, also keep it minimum 8 characters long
        </p>
      </div>
      <div className="flex items-center space-x-2 my-5">
        <input type="checkbox" name="newsletter" />
        <span className="text-[#97999b] text-xs">Subscribe to newsletter</span>
      </div>
      <div className="flex flex-col items-center space-y-6 w-full mt-4">
        <button className="w-full bg-[#1a1a1a] rounded-2xl text-white py-4 px-2.5 font-semibold">
          Create a account
        </button>
        <button
          className="w-full flex items-center justify-center space-x-3 rounded-2xl text-[#1a1a1a]
        border-2 border-[#e5e5e5] py-4 px-2.5 font-semibold"
          onClick={() => handleUserCredentails(email, password)}
        >
          <AiOutlineGoogle className="text-lg" />
          <span>Sign Up with Goggle</span>
        </button>
      </div>
    </div>
  );
};

export { Signup };
