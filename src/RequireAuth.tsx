import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const authenticated = sessionStorage.getItem("token");
  return authenticated ? children : <Navigate to="/login" replace />;
}
