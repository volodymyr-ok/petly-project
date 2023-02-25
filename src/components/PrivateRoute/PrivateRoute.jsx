import { selectIsAuth } from "../../redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? children : <Navigate to="/login" />;
}
