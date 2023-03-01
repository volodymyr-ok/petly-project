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

import { SvgMarkup } from "../SvgHandler/SvgHandler";
import defImage from "../../img/defaultImg.jpeg";
import { numberToWord } from "../../hooks/numberToString";
// import { ReactComponent as Pet } from "../../assets/svg/add-pet.svg";

const svgLike = SvgMarkup(24, 22, "btnLike");
const svgRemove = SvgMarkup(16, 17, "btnRemove");
const svgEdit = SvgMarkup(16, 16, "edit");

export const NoticeItem = ({
  addFavorite,
  onRemove,
  onReadMore,
  notices,
  user,
  favotiresList,
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
        const isFavorite = favotiresList.includes(_id);

        return (
          <Item key={_id}>
            <ItemCategory>{categoryName}</ItemCategory>
            <BtnAdd
              id={_id}
              favorite={isFavorite ? "favorite" : "noFavorite"}
              className={
                owner === userId ? "edit" : isFavorite ? "favorite" : "null"
              }
              onClick={(e) => addFavorite(e, _id, isFavorite)}
            >
              {owner === userId ? svgEdit : svgLike}
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
                    <InfoItem className="name">Breed:</InfoItem>
                    <InfoItem>{breed ? breed : "No info"}</InfoItem>
                  </tr>
                  <tr>
                    <InfoItem className="name">Place:</InfoItem>
                    <InfoItem>{location ? location : "No info"}</InfoItem>
                  </tr>
                  <tr>
                    <InfoItem className="name">Age:</InfoItem>
                    <InfoItem>{textAge ? textAge : "No info"}</InfoItem>
                  </tr>
                  {categoryName === "sell" ? (
                    <tr>
                      <InfoItem className="name">Price:</InfoItem>
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
                    Delete{svgRemove}
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
