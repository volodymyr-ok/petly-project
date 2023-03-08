import { Btn } from "./BtnContact.styled";

export const BtnContct = ({click}) => {
  return (
    <>
      <Btn onClick={click}>
        <span>Contact</span>
      </Btn>
    </>
  );
};
