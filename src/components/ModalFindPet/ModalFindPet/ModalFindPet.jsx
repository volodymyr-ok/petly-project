import Dog from "../../../assets/dog.png";
import { BtnAddTo } from "./BtnAddTo/BtnAddTo";
import { BtnContct } from "./BtnContact/BtnContact";
import {
  ModalCard,
  TextOnImg,
  ImgBox,
  BlokInfo,
  Title,
  ListInfo,
  ItemInfo,
  NameInfo,
  ValueInfo,
  BlokComments,
  ComentsText,
  BlokButton,
  ImgAndInfoBox,
} from "./ModalFindPet.styled";

export const ModalFindPet = () => {
  return (
    <ModalCard>
      <ImgAndInfoBox>
        <ImgBox>
          <img src={Dog} alt="pet" />
          <TextOnImg>Sell</TextOnImg>
        </ImgBox>

        <BlokInfo>
          <Title>
            Сute dog looking <br /> for a home
          </Title>
          <ListInfo>
            <ItemInfo>
              <NameInfo>Name:</NameInfo>
              <ValueInfo>Rich</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Birthday:</NameInfo>
              <ValueInfo>21.09.2020</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Breed:</NameInfo>
              <ValueInfo>Pomeranian</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Place:</NameInfo>
              <ValueInfo>Lviv</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>The sex:</NameInfo>
              <ValueInfo>male</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Email:</NameInfo>
              <ValueInfo>user@mail1111111.com</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Phone:</NameInfo>
              <ValueInfo>+380971234567</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Price:</NameInfo>
              <ValueInfo>150$</ValueInfo>
            </ItemInfo>
          </ListInfo>
        </BlokInfo>
      </ImgAndInfoBox>
      <BlokComments>
        <ComentsText>
          <span>Comments: </span>Lorem ipsum dolor sit amet, consectetur Lorem
          ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur Lorem
        </ComentsText>
      </BlokComments>
      <BlokButton>
        <BtnContct />
        <BtnAddTo />
      </BlokButton>
    </ModalCard>
  );
};
