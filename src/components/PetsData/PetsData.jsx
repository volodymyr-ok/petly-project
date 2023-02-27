import PropTypes from "prop-types";

import { PetsList } from "../PetsList/PetsList";

import { BoxMessage, Message } from "../PetsData/PetsData.styled";

export const PetsData = ({ pets }) => {
  return (
    <>
      <BoxMessage>
        <Message>Please, add your pet</Message>
      </BoxMessage>

      <PetsList pets={pets} />
    </>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
