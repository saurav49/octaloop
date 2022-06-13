import { Sidebar, Profile } from "../components/index";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Profile />
    </div>
  );
};

export { Home };
