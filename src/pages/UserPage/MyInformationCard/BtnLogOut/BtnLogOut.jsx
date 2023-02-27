import { useDispatch } from "react-redux";
import Logout from "../../../../assets/svg/logout.svg";
import { logoutUser } from "../../../../redux/auth/auth-operations";
import { Btn } from "./BtnLogOut.styled";

export const BtnLogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Btn type="button" onClick={handleLogout}>
      <img src={Logout} alt="camera" />
      <span>Log Out</span>
    </Btn>
  );
};
