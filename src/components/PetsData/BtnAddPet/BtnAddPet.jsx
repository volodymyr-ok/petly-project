import { ReactComponent as AddPlusButton } from "../../../assets/svg/Addpet.svg";
import { AddPetBtn } from "./BtnAddPet.styled";
import { useState } from "react";

import { Modal } from "../../Modal/Modal";

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
        <AddPlusButton />
      </AddPetBtn>
      {/* {modalOpen && (
        <Modal onClose={closeModal}>
          <AddsPetForm onClose={closeModal}></AddsPetForm>
        </Modal>
      )} */}
       {modalOpen && (
        <Modal type="addPet" onClose={closeModal}>
          <AddsPetForm onClose={closeModal}></AddsPetForm>
        </Modal>
      )}
    </>
  );
};
