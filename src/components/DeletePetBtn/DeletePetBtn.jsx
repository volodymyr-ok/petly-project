import { DeleteBtn, DelIcon } from "./DeletePetBtn.styled";

export const DeletePetBtn = ({ onClick, name }) => {
  const clickHandler = (e) => {
    onClick(e);
  };
  return (
    <DeleteBtn name={name} type="button" onClick={clickHandler}>
      <DelIcon />
    </DeleteBtn>
  );
};
