import PropTypes from "prop-types";

import { PetsList } from "./PetsList/PetsList";

import { BoxMessage, Message, ContainerPetsDate, SpanAddPet } from "./PetsData.styled";
import { BtnAddPet } from "./BtnAddPet/BtnAddPet";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { AddsPetForm } from "../AddsPetForm/AddsPetForm";
import { WarningMessage } from "../WarningMessage/WarningMessage";
import { PawsLoader } from "../Loader/PawsLoader/PawsLoader";
//mport { PawsLoader } from "../../components/Loader/PawsLoader/PawsLoader";

export const PetsData = ({ pets, onRemove, onEdit, isLoadingPets }) => {
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [postId, setPostId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);


  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const removeHandler = (e)=>{
    setIsModalOpen(!isModalOpen)
    setPostId(e.currentTarget.name)
  }

  const editHandler = (e)=>{
    setIsModalEdit(!isModalEdit)
    setPostId(e.currentTarget.name)
  }
  return (
    <ContainerPetsDate>
      <BoxMessage>
        <Message>My pets:</Message>
        <SpanAddPet> Add pet </SpanAddPet>
        <BtnAddPet onPostHandler={editHandler} />
      </BoxMessage>

     {!isLoadingPets ? <PetsList 
      removeHandler={removeHandler} 
      pets={pets} 
      onPostHandler={editHandler} 
      onRemove={(id)=>onRemove(id)} /> : <PawsLoader/>}
      {isModalEdit && 
                 <Modal onClose={()=>setIsModalEdit(!isModalEdit)}>
                  <AddsPetForm
                    onClose={()=>setIsModalEdit(!isModalEdit)}
                    onEdit={(arrayOfData)=>onEdit(arrayOfData)}
                    post = {pets.find(el=>el._id === postId)}
                  />
                  </Modal>
              }
      {isModalOpen && (
                <WarningMessage
                  onRemove={(postId) => onRemove(postId)}
                  type="approve"
                  id={postId}
                  // approveFunk={deletePetItem}
                  onClose={closeModal}
                  text="Do you want to delete the pet?"
                />
              )}
    </ContainerPetsDate>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
