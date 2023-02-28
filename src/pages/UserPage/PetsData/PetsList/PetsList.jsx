import { useState } from "react";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";

import { DeletePetBtn } from "../../../../components/DeletePetBtn/DeletePetBtn";
import {
  WrapperPicDiv,
  Box,
  Description,
  InfoPet,
  BoxPetsList,
  BoxScrollbar,
} from "./PetsList.styled";
import { WarningMessage } from "../../../../components/WarningMessage/WarningMessage";

export const PetsList = () => {
  // const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [arayPets] = useState([
    {
      name: "eragon ",
      dateOfBirth: "5456546546",
      breed: "hgfjhgfjhgf",
      comments:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione magni laborum id aspernatur quam quia sapiente, accusantium placeat assumenda tempore, nesciunt illo est, officiis amet! Dicta ea qui consequuntur.",
    },
    {
      name: "goga",
      dateOfBirth: "54",
      breed: "hartyyui",
      comments:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione magni laborum id aspernatur quam quia sapiente, accusantium placeat assumenda tempore, nesciunt illo est, officiis amet! Dicta ea qui consequuntur.",
    },
    {
      name: "oga",
      dateOfBirth: "54",
      breed: "hartyyui",
      comments:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione magni laborum id aspernatur quam quia sapiente, accusantium placeat assumenda tempore, nesciunt illo est, officiis amet! Dicta ea qui consequuntur.",
    },
    {
      name: "gog",
      dateOfBirth: "4",
      breed: "har",
      comments:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione magni laborum id aspernatur quam quia sapiente, accusantium placeat assumenda tempore, nesciunt illo est, officiis amet! Dicta ea qui consequuntur.",
    },
  ]);

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const deletePetItem = (id) => {
  //   dispatch(deletePet(id));
  // };

  return (
    <BoxPetsList>
      <BoxScrollbar>
        {/* {pets.map(({ _id, avatarURL, name, date, breed, comments }) => ( */}
        {arayPets.map((el) => {
          return (
            <Box key={el.name}>
              <WrapperPicDiv />
              <Description>
                <DeletePetBtn onClick={closeModal} />
                <InfoPet>
                  <b> Name:</b> {el.name}
                </InfoPet>
                <InfoPet>
                  <b> Date of birth:</b> {el.dateOfBirth}
                </InfoPet>
                <InfoPet>
                  <b>Breed:</b> {el.breed}
                </InfoPet>
                <InfoPet>
                  <b> Comments:</b> {el.comments}
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

        {/* ))} */}
      </BoxScrollbar>
    </BoxPetsList>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
