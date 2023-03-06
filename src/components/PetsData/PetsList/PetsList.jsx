import PropTypes from "prop-types";
import { DeletePetBtn } from "../../DeletePetBtn/DeletePetBtn";
import {
  WrapperPicDiv,
  Box,
  Description,
  InfoPet,
  BoxPetsList,
  BoxScrollbar,
  EditPetBtn,
} from "./PetsList.styled";
import defImage from "../../../img/defaultImg.jpeg";
import { ResultNotFound } from "../../ResultNotFound/ResultNotFound";
import { ReactComponent as Edit } from "../../../assets/svg/penciNotices.svg";

export const PetsList = ({ pets, onPostHandler, removeHandler }) => {
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
                <DeletePetBtn name={_id} onClick={removeHandler} />
                <EditPetBtn name={_id} onClick={onPostHandler}>
                  <Edit width={30} height={30} />
                </EditPetBtn>
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
      </BoxScrollbar>
    </BoxPetsList>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
