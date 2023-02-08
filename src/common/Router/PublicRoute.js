import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ elem }) => {
  const IsAuth = useSelector((state) => state.authReducer)
  return !IsAuth.isLoggedIn ? elem : <Navigate to="/" />;
}
export default PublicRoute;