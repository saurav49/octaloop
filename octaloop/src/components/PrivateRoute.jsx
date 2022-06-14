import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ path }) => {
  const { role } = useAuth();

  if (role.length > 0 || localStorage.getItem("octaloop__role")) {
    return <Outlet />;
  }

  return <Navigate state={{ from: path }} replace to="/signin" />;
};

export { PrivateRoute };
