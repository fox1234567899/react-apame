import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthorizationforContext } from "../../context/AuthorizationforContext";
import Spinner from "./Spinner";
const ProtectedRoute = ({ children }) => {
  const {isAuthenticated } = useContext(AuthorizationforContext);
  const location = useLocation();

  if (isAuthenticated === null) return <Spinner />; 

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;