import "./App.css";
import { Navbar, Signup } from "./components/index";
import { Routes, Route } from "react-router-dom";
import { Home } from "./screens/index";

function App() {
  return (
    <div className="bg-[#1a1a1a] w-screen min-h-screen">
      <Routes>
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <div className="flex items-end justify-end">
                <div>
                  <Signup />
                </div>
              </div>
            </>
          }
        />
        <Route path="/profile" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
