import {
  Item,
  ItemCategory,
  BtnAdd,
  Image,
  Info,
  Title,
  InfoList,
  InfoItem,
  InfoAction,
  BtnReadMore,
  BtnRemove,
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
  console.log(avatar)
  const [isEditModal, setIsEditModal] = useState(false);
  const [isModalReadMore, setIsModalReadMore] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const isFavorite = favoritesList?.includes(_id);
  const userId = user._id;
  const isOwner = owner === userId;

  const textAge = numberToWord(birthday);

  const handleFavoriteClick = () => {
    if (isOwner) {
      setIsEditModal(true);
    } else {
      if (!favoritesList.includes(_id)) dispatch(addFavorites(_id));
      else if (isFavorite) dispatch(removeFavorites(_id));
    }
  };

  const handleNoticeRemove = () => dispatch(removeNotice(_id));

  return (
    <>
      <Item>
        <ItemCategory>{categoryName}</ItemCategory>
        <BtnAdd
          id={_id}
          favorite={isFavorite ? "favorite" : "noFavorite"}
          edit={isOwner ? "edit" : "like"}
          onClick={handleFavoriteClick}
        >
          {isOwner ? (
            <Edit edit={"edit"} width={30} height={30} />
          ) : (
            <Like width={24} height={22} />
          )}
        </BtnAdd>
        <Image
          loading="lazy"
          src={avatar ? avatar : defImage}
          alt={categoryName}
          width="280"
          height="288"
        />
        <Info>
          <Title>{title ? title : "Сute dog looking for a home"}</Title>
          <InfoList>
            <tbody>
              <tr>
                <InfoItem name={"name"}>Breed:</InfoItem>
                <InfoItem>{breed ? breed : "No info"}</InfoItem>
              </tr>
              <tr>
                <InfoItem name={"name"}>Place:</InfoItem>
                <InfoItem>{location ? location : "No info"}</InfoItem>
              </tr>
              <tr>
                <InfoItem name={"name"}>Age:</InfoItem>
                <InfoItem>{textAge ? textAge : "No info"}</InfoItem>
              </tr>
              {categoryName === "sell" ? (
                <tr>
                  <InfoItem name={"name"}>Price:</InfoItem>
                  <InfoItem>{price ?`${price} $` : "No info"}</InfoItem>
                </tr>
              ) : null}
            </tbody>
          </InfoList>
          <InfoAction>
            <BtnReadMore
              // to={`/notices/${categoryName}/${_id}`}
              id={_id}
              onClick={() => setIsModalReadMore(true)}
            >
              Learn more
            </BtnReadMore>
            {isOwner ? (
              <BtnRemove id={_id} onClick={handleNoticeRemove}>
                Delete
                <Remove width={16} height={17} />
              </BtnRemove>
            ) : null}
          </InfoAction>
        </Info>
      </Item>

      {isEditModal && (
        <Modal onClose={() => setIsEditModal(!isEditModal)}>
          <AddNoticeForm
            petInfo={cardData}
            onClose={() => setIsEditModal(!isEditModal)}
          />
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
