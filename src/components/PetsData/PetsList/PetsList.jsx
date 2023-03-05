import { useState } from "react";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
import { DeletePetBtn } from "../../DeletePetBtn/DeletePetBtn";
import { WrapperPicDiv, Box, Description, InfoPet, BoxPetsList, BoxScrollbar, EditPetBtn } from "./PetsList.styled";
import { WarningMessage } from "../../WarningMessage/WarningMessage";
import defImage from "../../../img/defaultImg.jpeg";
import { ResultNotFound } from "../../ResultNotFound/ResultNotFound";
import { ReactComponent as Edit } from "../../../assets/svg/penciNotices.svg";
import { AddsPetForm } from "../../AddsPetForm/AddsPetForm";
import { Modal } from "../../Modal/Modal";
export const PetsList = ({ pets, onRemove, onEdit }) => {
  // const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [postId, setPostId] = useState(null);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const editHandler = (e)=>{
    setIsModalEdit(!isModalEdit)
    setPostId(e.currentTarget.name)
  }
  const removeHandler = (e)=>{
    setIsModalOpen(!isModalOpen)
    setPostId(e.currentTarget.name)
  }
  // const deletePetItem = (id) => {
  //   dispatch(deletePet(id));
  // };


  return (
    <BoxPetsList>
      <BoxScrollbar>
        {pets.length === 0 && <ResultNotFound text="There is no pet here" />}
        {pets?.map((el) => {
          const { avatarURL, birthday, breed, comments, name, _id } = el;
          return (
            <Box key={_id}>
              <WrapperPicDiv>
                <img src={avatarURL ? avatarURL : defImage} alt={name} />
              </WrapperPicDiv>
              <Description>
                <DeletePetBtn  name={_id} onClick={removeHandler} />
                <EditPetBtn name={_id} onClick={editHandler}><Edit width={30} height={30}/></EditPetBtn>
                <InfoPet>
                  <b> Name:</b> {name ? name : "No Info"}
                </InfoPet>
                <InfoPet>
                  <b> Date of birth:</b> {birthday ? birthday : "No Info"}
                </InfoPet>
                <InfoPet>
                  <b>Breed:</b> {breed ? breed : "No Info"}
                </InfoPet>
                <InfoPet>
                  <b> Comments:</b> {comments ? comments : "No Info"}
                </InfoPet>
              </Description>
            
             
            </Box>
          );
        })}
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
            {isModalEdit && 
                 <Modal onClose={()=>setIsModalEdit(!isModalEdit)}>
                  <AddsPetForm
                  onClose={()=>setIsModalEdit(!isModalEdit)}
                  onEdit={(postId)=>onEdit(postId)}
                  post = {pets.find(el=>el._id === postId)}
                  />
                  </Modal>
              }
      </BoxScrollbar>
    </BoxPetsList>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
