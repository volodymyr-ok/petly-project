import { Btn, IconHeart } from "./BtnAddTo.styled";
import {ReactComponent as Edit} from "../../../../assets/svg/penciNotices.svg"

export const BtnAddTo = ({like, children}) => {
  // console.log(like, children)
  return (
    <>
      <Btn onClick={like}>
        <span>{children}</span>
        {children === "Edit"?<Edit width={25} height={25} />:<IconHeart />}
      </Btn>
    </>
  );
};
