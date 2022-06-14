import { Sidebar, Profile, ProfileDetails } from "../components/index";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { getUserInfo } = useAuth();

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex bg-[#DBDBDB] overflow-hidden">
      <Sidebar />
      <Profile />
      <ProfileDetails />
    </div>
  );
};

export { Home };
