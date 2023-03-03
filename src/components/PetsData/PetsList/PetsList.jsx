import { useState } from "react";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";

import { DeletePetBtn } from "../../DeletePetBtn/DeletePetBtn";
import {
  WrapperPicDiv,
  Box,
  Description,
  InfoPet,
  BoxPetsList,
  BoxScrollbar,
} from "./PetsList.styled";
import { WarningMessage } from "../../WarningMessage/WarningMessage";
import defImage from "../../../img/defaultImg.jpeg";

export const PetsList = ({ pets, onRemove }) => {
  // const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const deletePetItem = (id) => {
  //   dispatch(deletePet(id));
  // };

  return (
    <BoxPetsList>
      <BoxScrollbar>
        {pets?.map((el) => {
          const {
            avatarURL,
            birthday,
            breed,
            comments,
            name,
            _id,
          } = el;
          return (
            <Box key={_id}>
              <WrapperPicDiv><img src={avatarURL ? avatarURL : defImage} alt={name} /></WrapperPicDiv>
              <Description>
                <DeletePetBtn onClick={closeModal} />
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
              {isModalOpen && (
                <WarningMessage
                  onRemove={(id)=>onRemove(id)}
                  type="approve"
                  id={_id}
                  // approveFunk={deletePetItem}
                  onClose={closeModal}
                  text="Do you want to delete the pet?"
                />
              )}
            </Box>
          );
        })}
      </BoxScrollbar>
    </BoxPetsList>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
