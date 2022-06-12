import "./App.css";
import { Navbar, Signup } from "./components/index";

function App() {
  return (
    <div className="bg-[#1a1a1a] w-screen min-h-screen">
      <Navbar />
      <div className="flex items-end justify-end">
        <div>
          <Signup />
        </div>
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      </div>
    </div>
  );
}

export default App;
