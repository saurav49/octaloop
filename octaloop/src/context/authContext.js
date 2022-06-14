import { createContext, useState } from "react";
import axios from "axios";
import { SIGN_IN, LOG_OUT, UPDATE_PROFILE, GET_USER } from "../urls";
import { useEffect } from "react";
import { useRefreshToken } from "../hooks/useRefreshToken";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const refresh = useRefreshToken();

  useEffect(() => {
    let time = 30 * 1000;
    let interval = setInterval(() => {
      refresh();
    }, time);

    return () => clearInterval(interval);
  }, [refresh]);

  const [role, setRole] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [showEditSidebar, setShowEditSidebar] = useState(false);
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

  const updateUserData = async (
    address,
    email,
    username,
    zipcode,
    state,
    city,
    country
  ) => {
    try {
      const response = await axios.post(
        UPDATE_PROFILE,
        {
          email,
          name: username,
          address,
          zipCode: zipcode,
          state,
          city,
          country,
        },
        { withCredentials: true }
      );
      setUserInfo(response.data.result);
    } catch (err) {
      console.log({ err });
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await axios.get(GET_USER, {
        withCredentials: true,
      });
      setUserInfo(response?.data?.data);
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
        showEditSidebar,
        setShowEditSidebar,
        getUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
