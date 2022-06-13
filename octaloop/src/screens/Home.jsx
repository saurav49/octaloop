import { Sidebar, Profile } from "../components/index";

const Home = () => {
  return (
    <div className="flex bg-[#DBDBDB]">
      <Sidebar />
      <Profile />
    </div>
  );
};

export { Home };
