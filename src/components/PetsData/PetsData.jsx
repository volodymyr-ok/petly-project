import PropTypes from "prop-types";

import { PetsList } from "./PetsList/PetsList";

import { BoxMessage, Message, ContainerPetsDate, SpanAddPet } from "./PetsData.styled";
import { BtnAddPet } from "./BtnAddPet/BtnAddPet";

export const PetsData = ({ pets }) => {
  return (
    <ContainerPetsDate>
      <BoxMessage>
        <Message>My pets:</Message>
        <SpanAddPet> Add pet </SpanAddPet>
        <BtnAddPet />
      </BoxMessage>

      <PetsList pets={pets} />
    </ContainerPetsDate>
  );
};

PetsList.propTypes = {
  pets: PropTypes.array.isRequired,
};
