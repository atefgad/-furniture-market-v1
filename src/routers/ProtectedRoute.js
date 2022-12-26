import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user !== null ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
