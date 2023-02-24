import Logout from "../../../../assets/svg/logout.svg";
import { Btn } from "./BtnLogOut.styled";

export const BtnLogOut = () => {
  return (
    <Btn>
      <img src={Logout} alt="camera" />
      <span>Log Out</span>
    </Btn>
  );
};
