import AddPet from "../../../assets/svg/add-pet.svg";
import { AddPetBtn } from "./BtnAddPet.styled";
import { useState } from "react";
import { Modal } from "./../../../components/AddsPetForm/Modal";

import { AddsPetForm } from "../../../components/AddsPetForm/AddsPetForm";

export const BtnAddPet = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <AddPetBtn type="button" onClick={openModal}>
        <span>Add pet</span>
        <img src={AddPet} alt="plus" />
      </AddPetBtn>
      {modalOpen && (
        <Modal onClose={closeModal}>
          <AddsPetForm onClose={closeModal}></AddsPetForm>
        </Modal>
      )}
    </>
  );
};
