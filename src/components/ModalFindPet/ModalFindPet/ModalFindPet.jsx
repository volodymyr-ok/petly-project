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
  ItemLink,
  ModalContent,
  HidenText,
  HidenTextBox,
  StyledLinkContact,
} from "./ModalFindPet.styled";
//import { WarningMessage } from "../../WarningMessage/WarningMessage";
import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import {
  Wrap,
  StyledLink,
  Text,
} from "../../WarningMessage/WarningMessage.styled";

export const ModalFindPet = ({
  petInfo,
  addFavorite,
  favoritesList,
  user,
  isLogined,
}) => {
  const {
    avatar,
    birthday,
    breed,
    categoryName,
    name,
    sex,
    location,
    owner,
    price,
    title,
    _id,
    comments,
    phone,
    email,
  } = petInfo;

  const isOwner = user._id === owner;
  const isFavorite = favoritesList?.includes(_id);

  const [isLoginedModal, setIsLoginedModal] = useState(false);
  const [isContactModal, setIsModalContact] = useState(false);

  const modalHandler = () => {
    setIsLoginedModal(!isLoginedModal);
  };
  const modalContactHandler = () => {
    setIsModalContact(!isContactModal);
  };

  return (
    <ModalCard>
      <ImgAndInfoBox>
        <ImgBox>
          <img src={avatar} alt="pet" />
          <TextOnImg>Sell</TextOnImg>
        </ImgBox>
        <BlokInfo>
          <Title>
            {birthday ? title : "Сute pet looking for a home"}
            {/* Сute dog looking <br /> for a home */}
          </Title>
          <ListInfo>
            <ItemInfo>
              <NameInfo>Name:</NameInfo>
              <ValueInfo>{name ? name : "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Birthday:</NameInfo>
              <ValueInfo>{birthday ? birthday : "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Breed:</NameInfo>
              <ValueInfo>{breed ? breed : "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Place:</NameInfo>
              <ValueInfo>{location ? location : "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>The sex:</NameInfo>
              <ValueInfo>{sex ? sex : "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Email:</NameInfo>
              {isLogined ? (
                <ValueInfo>
                  <ItemLink href={`mailto:${email}`}>
                    {email ? email : "user@mail1111111.com"}
                  </ItemLink>
                </ValueInfo>
              ) : (
                <HidenTextBox>
                  <HidenText>To see email pls login!</HidenText>
                  <ValueInfo>**********@mail.com</ValueInfo>
                </HidenTextBox>
              )}
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Phone:</NameInfo>

              {isLogined ? (
                <ValueInfo>
                  <ItemLink href={`tel:${phone}`}>
                    {phone ? phone : "+380971234567"}
                  </ItemLink>
                </ValueInfo>
              ) : (
                <HidenTextBox>
                  <HidenText>To see phone pls login!</HidenText>
                  <ValueInfo>+ ** (***) ***-**-**</ValueInfo>
                </HidenTextBox>
              )}
            </ItemInfo>
            {categoryName === "sell" ? (
              <ItemInfo>
                <NameInfo>Price:</NameInfo>
                <ValueInfo>{price ? `${price}$` : "No Info"}</ValueInfo>
              </ItemInfo>
            ) : null}
          </ListInfo>
        </BlokInfo>
      </ImgAndInfoBox>
      <BlokComments>
        <ComentsText>
          <span>Comments: </span>
          {comments ? comments : "No Info"}
        </ComentsText>
      </BlokComments>
      <BlokButton>
        {!isLogined && <BtnContct click={modalHandler} />}
        {!isOwner && isLogined && <BtnContct click={modalContactHandler} />}

        {isLogined ? (
          <BtnAddTo
            type="button"
            like={(e) => addFavorite(e, _id, owner, isFavorite)}
          >
            {!isOwner ? (isFavorite ? "Remove from" : "Add to") : "Edit"}
          </BtnAddTo>
        ) : (
          <BtnAddTo like={modalHandler}>Add to</BtnAddTo>
        )}
        {isLoginedModal && (
          <Modal onClose={modalHandler}>
            <ModalContent>
              <Text>You need be authenticated first</Text>
              <Wrap>
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/register">Register</StyledLink>
              </Wrap>
            </ModalContent>
          </Modal>
        )}
        {isContactModal && (
          <Modal onClose={modalContactHandler}>
            <ModalContent>
              <Text>Contact with</Text>
              <Wrap>
                <StyledLinkContact
                  onClick={modalContactHandler}
                  href={`tel:${phone}`}
                >
                  Call
                </StyledLinkContact>
                <StyledLinkContact
                  onClick={modalContactHandler}
                  target="_blank"
                  href={`mailto:${email} `}
                >
                  Write email
                </StyledLinkContact>
              </Wrap>
            </ModalContent>
          </Modal>
        )}
      </BlokButton>
    </ModalCard>
  );
};
