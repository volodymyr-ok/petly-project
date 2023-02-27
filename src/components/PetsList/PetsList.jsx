import { useState } from "react";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";

import { DeletePetBtn } from "../../components/DeletePetBtn/DeletePetBtn";
import { WrapperPicDiv, Box, Description, InfoPet } from "./PetsList.styled";
import { WarningMessage } from "..//WarningMessage/WarningMessage";

export const PetsList = () => {
  // const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const deletePetItem = (id) => {
  //   dispatch(deletePet(id));
  // };

  return (
    <>
      {/* {pets.map(({ _id, avatarURL, name, date, breed, comments }) => ( */}
      <Box>
        <WrapperPicDiv />
        <Description>
          <DeletePetBtn onClick={closeModal} />
          <InfoPet>Name: </InfoPet>
          <InfoPet>Date of birth:</InfoPet>
          <InfoPet>Breed: </InfoPet>
          <InfoPet>Comments: </InfoPet>
        </Description>
        {isModalOpen && (
          <WarningMessage
            type="approve"
            // id={_id}
            // approveFunk={deletePetItem}
            onClose={closeModal}
            text="Do you want to delete the pet?"
          />
        )}
      </Box>
      {/* ))} */}
    </>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
