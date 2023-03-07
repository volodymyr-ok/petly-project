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
  ModalContent
} from "./ModalFindPet.styled";
//import { WarningMessage } from "../../WarningMessage/WarningMessage";
import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { Wrap, StyledLink, Text } from "../../WarningMessage/WarningMessage.styled";

export const ModalFindPet = ({ petInfo, addFavorite, favoritesList, user, isLogined }) => {
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
    email
  } = petInfo;

  const isOwner = user._id === owner;
  const isFavorite = favoritesList?.includes(_id);

const [isLoginedModal, setIsLoginedModal] = useState(false)
  // console.log("coments", petInfo, petInfo?.comments);
  console.log(isLoginedModal)
  const modalHandler = () =>{
    setIsLoginedModal(!isLoginedModal)
  }

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
              <ValueInfo>
                {email ?  email : "user@mail1111111.com"}
              </ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Phone:</NameInfo>
              <ValueInfo>{phone ?  phone : "+380971234567"}</ValueInfo>
            </ItemInfo>
            {categoryName === "sell" ? (
              <ItemInfo>
                <NameInfo>Price:</NameInfo>
                <ValueInfo>{price ? price : "No Info"}</ValueInfo>
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
        {!isOwner && <BtnContct />}
       {isLogined ? <BtnAddTo
          type="button"
          like={(e) => addFavorite(e, _id, owner, isFavorite)}
        >
          {!isOwner ? (isFavorite ? "Remove from" : "Add to") : "Edit"}
        </BtnAddTo> :
         <BtnAddTo  like={modalHandler}>Add to</BtnAddTo>}
        { isLoginedModal && (
       <Modal onClose={modalHandler}>
          <ModalContent>
              <Text>You need be authenticated first</Text>
            <Wrap>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </Wrap>
          </ModalContent>
         {/* <WarningMessage
          // onRemove={(postId) => onRemove(postId)}
          type="auth"
          // approveFunk={deletePetItem}
          onClose={modalHandler}
          text="You need be authenticated first"
        /> */}
       </Modal>
      )}
      </BlokButton>
    </ModalCard>
  );
};
