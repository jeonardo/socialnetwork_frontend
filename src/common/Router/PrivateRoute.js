import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ elem }) => {
  const IsAuth = useSelector((state) => state.authReducer)
  return IsAuth.isLoggedIn ? elem : <Navigate to="/login" />;
}
export default PrivateRoute;