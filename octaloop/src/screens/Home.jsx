import { Sidebar, Profile, ProfileDetails } from "../components/index";

const Home = () => {
  return (
    <div className="relative flex bg-[#DBDBDB] overflow-hidden">
      <Sidebar />
      <Profile />
      <ProfileDetails />
    </div>
  );
};

export { Home };
