import { useState } from "react";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";
import { DeletePetBtn } from "../../DeletePetBtn/DeletePetBtn";
import { WrapperPicDiv, Box, Description, InfoPet, BoxPetsList, BoxScrollbar } from "./PetsList.styled";
import { WarningMessage } from "../../WarningMessage/WarningMessage";
import defImage from "../../../img/defaultImg.jpeg";
import { ResultNotFound } from "../../ResultNotFound/ResultNotFound";

export const PetsList = ({ pets }) => {
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
        {pets.length === 0 && <ResultNotFound text="There is no pet here" />}
        {pets?.map((el) => {
          const {
            avatarURL,
            birthday,
            breed,
            comments,
            // createdAt,
            name,
            // owner,
            // updatedAt,
            _id,
          } = el;
          return (
            <Box key={_id}>
              <WrapperPicDiv src={avatarURL ? avatarURL : defImage} />
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
                  type="approve"
                  // id={_id}
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
