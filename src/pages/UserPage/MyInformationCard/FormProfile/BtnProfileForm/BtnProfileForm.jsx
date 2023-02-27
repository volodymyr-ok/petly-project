import Pencil from "../../../../../assets/svg/pencil.svg";
import { BtnPencil } from "./BtnProfileForm.styled";

export const BtnProfileForm = ({ onClick, disableInput, name }) => {
  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    return onClick(!disableInput);
  };

  return (
    <BtnPencil onClick={handleInput} name={name}>
      <img src={Pencil} alt="pencl" />
    </BtnPencil>
  );
};
