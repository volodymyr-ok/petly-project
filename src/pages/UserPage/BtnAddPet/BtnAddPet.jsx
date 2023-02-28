import AddPet from "../../../assets/svg/add-pet.svg";
import { AddPetBtn } from "./BtnAddPet.styled";

export const BtnAddPet = () => {
  return (
    <AddPetBtn>
      <span>Add pet</span>
      <img src={AddPet} alt="plus" />
    </AddPetBtn>
  );
};
