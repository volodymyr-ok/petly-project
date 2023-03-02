import { Btn, IconHeart } from "./BtnAddTo.styled";

export const BtnAddTo = ({like, children}) => {
  // console.log(like, children)
  return (
    <>
      <Btn onClick={like}>
        <span>{children}</span>
        <IconHeart />
      </Btn>
    </>
  );
};
