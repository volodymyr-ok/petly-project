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
} from "./NoticeItems.styled";

import defImage from "../../img/defaultImg.jpeg";
import { numberToWord } from "../../hooks/numberToString";
import { ReactComponent as Like } from "../../assets/svg/like.svg";
import { ReactComponent as Remove } from "../../assets/svg/remove.svg";
import { ReactComponent as Edit } from "../../assets/svg/pencil.svg";

export const NoticeItem = ({
  addFavorite,
  onRemove,
  onReadMore,
  notices,
  user,
  favoritesList,
}) => {
  const userId = user.id;

  return (
    <>
      {notices.map((el) => {
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
        } = el;

        const textAge = numberToWord(birthday);
        const isFavorite = favoritesList?.includes(_id);
        return (
          <Item key={_id}>
            <ItemCategory>{categoryName}</ItemCategory>
            <BtnAdd
              id={_id}
              favorite={isFavorite ? "favorite" : "noFavorite"}
              onClick={(e) => addFavorite(e, _id, isFavorite)}
            >
              {owner === userId ? (
                <Edit width={16} height={16} />
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
                      <InfoItem>{price ? price : "No info"}</InfoItem>
                    </tr>
                  ) : null}
                </tbody>
              </InfoList>
              <InfoAction>
                <BtnReadMore id={_id} onClick={onReadMore}>
                  Learn more
                </BtnReadMore>
                {owner === userId ? (
                  <BtnRemove id={_id} onClick={onRemove}>
                    Delete
                    <Remove width={16} height={17} />
                  </BtnRemove>
                ) : null}
              </InfoAction>
            </Info>
          </Item>
        );
      })}
    </>
  );
};
