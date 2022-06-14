import "./App.css";
import { Navbar, Signup, PrivateRoute } from "./components/index";
import { Routes, Route } from "react-router-dom";
import { Home } from "./screens/index";
import { useRefreshToken } from "./hooks/useRefreshToken";
import { useEffect } from "react";

function App() {
  const refresh = useRefreshToken();

  useEffect(() => {
    let time = 30 * 1000;
    let interval = setInterval(() => {
      refresh();
    }, time);

    return () => clearInterval(interval);
  }, [refresh]);

  return (
    <div className="bg-[#1a1a1a] w-screen min-h-screen">
      <Routes>
        <Route
          path="/signin"
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
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
