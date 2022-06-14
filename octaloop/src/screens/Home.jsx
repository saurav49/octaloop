import { Sidebar, Profile, ProfileDetails } from "../components/index";
import { useEffect } from "react";
import axios from "axios";
import { GET_USER } from "../urls";
import { useAuth } from "../hooks/useAuth";
import { useRefreshToken } from "../hooks/useRefreshToken";
const Home = () => {
  const { setUserInfo } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(GET_USER, { withCredentials: true });
        setUserInfo(response?.data?.data);
      } catch (err) {
        console.log({ err });
      }
    })();
  }, []);
  return (
    <div className="relative flex bg-[#DBDBDB] overflow-hidden">
      <Sidebar />
      <button
        className="bg-red-500 py-10 px-20 font-bold text-2xl text-white"
        onClick={() => refresh()}
      >
        refresh token
      </button>
      <Profile />
      <ProfileDetails />
    </div>
  );
};

export { Home };
