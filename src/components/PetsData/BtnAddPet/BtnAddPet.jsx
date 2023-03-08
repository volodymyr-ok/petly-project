import { ReactComponent as AddPlusButton } from "../../../assets/svg/Addpet.svg";
import { AddPetBtn } from "./BtnAddPet.styled";

export const BtnAddPet = ({ onPostHandler }) => {
  return (
    <>
      <AddPetBtn type="button" onClick={onPostHandler}>
        <AddPlusButton />
      </AddPetBtn>
    </>
  );
};
