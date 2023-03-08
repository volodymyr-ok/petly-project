import {
  Card,
  CardLabel,
  ToggleBtn,
  Image,
  Info,
  Title,
  InfoWrapper,
  InfoItem,
  InfoAction,
  BtnReadMore,
  BtnRemove,
  DetailsWrapper,
} from "../NoiticesPageContent.styled";
import { ReactComponent as Edit } from "../../../assets/svg/penciNotices.svg";
import { ReactComponent as Remove } from "../../../assets/svg/remove.svg";
import { ReactComponent as Like } from "../../../assets/svg/like.svg";
import defImage from "../../../img/defaultImg.jpeg";
import { numberToWord } from "../../../hooks/numberToString";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorites,
  removeFavorites,
} from "../../../redux/auth/auth-operations";
import { ModalContent } from "../../ModalFindPet/ModalFindPet/ModalFindPet.styled";
import {
  Text,
  Wrap,
  StyledLink,
} from "../../WarningMessage/WarningMessage.styled";
import { useState } from "react";
import { Modal } from "../../Modal/Modal";
import { AddNoticeForm } from "../../ModalAddNotice/AddNoticeForm/AddNoticeForm";
import { ModalFindPet } from "../../ModalFindPet/ModalFindPet/ModalFindPet";
import { selectIsAuth } from "../../../redux/auth/auth-selectors";
import { removeNotice } from "../../../redux/notice/notice-operations";

export const NoticeCard = ({
  cardData,
  user,
  favoritesList,
  onRemoveFavorites,
}) => {
  const {
    avatar,
    birthday,
    breed,
    categoryName,
    location,
    owner,
    price,
    title,
    _id,
  } = cardData;

  const [isLoginedModal, setIsLoginedModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isModalReadMore, setIsModalReadMore] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const isFavorite = favoritesList?.includes(_id);
  const userId = user._id;
  const isOwner = owner === userId;

  const textAge = numberToWord(birthday);

  const handleFavoriteClick = () => {
    if (user.id !== "") {
      if (isOwner) {
        setIsEditModal(true);
      } else {
        if (!favoritesList.includes(_id)) dispatch(addFavorites(_id));
        else if (isFavorite) {
          dispatch(removeFavorites(_id));
          onRemoveFavorites(_id);
        }
      }
    } else {
      setIsLoginedModal(true);
    }
  };

  const handleNoticeRemove = () => dispatch(removeNotice(_id));

  return (
    <>
      <Card>
        <CardLabel>{categoryName}</CardLabel>
        <ToggleBtn
          id={_id}
          type="button"
          favorite={isFavorite ? "favorite" : "noFavorite"}
          edit={isOwner ? "edit" : "like"}
          onClick={handleFavoriteClick}
        >
          {isOwner ? (
            <Edit edit={"edit"} width={30} height={30} />
          ) : (
            <Like width={24} height={22} />
          )}
        </ToggleBtn>
        <Image
          loading="lazy"
          src={avatar ? avatar : defImage}
          alt={categoryName}
          width="280"
          height="288"
        />
        <Info>
          <InfoWrapper>
            <Title>{title ? title : "No info"}</Title>
            <DetailsWrapper>
              <InfoItem name={"name"}>Breed:</InfoItem>
              <InfoItem>{breed ? breed : "No info"}</InfoItem>
              <InfoItem name={"name"}>Place:</InfoItem>
              <InfoItem>{location ? location : "No info"}</InfoItem>
              <InfoItem name={"name"}>Age:</InfoItem>
              <InfoItem>{textAge ? textAge : "No info"}</InfoItem>
              {categoryName === "sell" ? (
                <>
                  <InfoItem name={"name"}>Price:</InfoItem>
                  <InfoItem>{price ? `${price} $` : "No info"}</InfoItem>
                </>
              ) : null}
            </DetailsWrapper>
          </InfoWrapper>
          <InfoAction>
            <BtnReadMore
              type="button"
              id={_id}
              onClick={() => setIsModalReadMore(true)}
            >
              Learn more
            </BtnReadMore>
            {isOwner ? (
              <BtnRemove type="button" id={_id} onClick={handleNoticeRemove}>
                Delete
                <Remove width={16} height={17} />
              </BtnRemove>
            ) : null}
          </InfoAction>
        </Info>
      </Card>

      {isEditModal && (
        <Modal onClose={() => setIsEditModal(!isEditModal)}>
          <AddNoticeForm
            petInfo={cardData}
            onClose={() => setIsEditModal(!isEditModal)}
          />
        </Modal>
      )}
      {isLoginedModal && (
        <Modal onClose={() => setIsLoginedModal(false)}>
          <ModalContent>
            <Text>You need be authenticated first</Text>
            <Wrap>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </Wrap>
          </ModalContent>
        </Modal>
      )}

      {isModalReadMore && (
        <Modal
          onClose={() => {
            setIsModalReadMore(!isModalReadMore);
          }}
        >
          <ModalFindPet
            isLogined={isAuth}
            user={user}
            onClose={() => setIsModalReadMore(!isModalReadMore)}
            petInfo={cardData}
            favoritesList={favoritesList}
            addFavorite={handleFavoriteClick}
          />
        </Modal>
      )}
    </>
  );
};
