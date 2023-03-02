import {ReactComponent as Close} from "../../../assets/svg/plusUpload.svg"
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
  BtnClose
} from "./ModalFindPet.styled";

export const ModalFindPet = ({petInfo, addFavorite, favoritesList, onClose}) => {

const { avatar, birthday, breed, categoryName, name, sex, location, owner, price, title, _id, coments} = petInfo;

const isFavorite = favoritesList?.includes(_id);
console.log(isFavorite)

  return (
    <ModalCard >
      <BtnClose onClick={onClose}><Close width={20} height={20}/></BtnClose>
      <ImgAndInfoBox>
        <ImgBox>
          <img src={avatar} alt="pet" />
          <TextOnImg>Sell</TextOnImg>
        </ImgBox>

        <BlokInfo>
          <Title>
             {birthday? title : "Сute pet looking for a home"}
            {/* Сute dog looking <br /> for a home */}
          </Title>
          <ListInfo>
            <ItemInfo>
              <NameInfo>Name:</NameInfo>
              <ValueInfo>{name? name: "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Birthday:</NameInfo>
              <ValueInfo>{birthday? birthday: "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Breed:</NameInfo>
              <ValueInfo>{breed? breed: "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Place:</NameInfo>
              <ValueInfo>{location? location: "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>The sex:</NameInfo>
              <ValueInfo>{sex? sex: "No Info"}</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Email:</NameInfo>
              <ValueInfo>user@mail1111111.com</ValueInfo>
            </ItemInfo>
            <ItemInfo>
              <NameInfo>Phone:</NameInfo>
              <ValueInfo>+380971234567</ValueInfo>
            </ItemInfo>
            { categoryName === "sell"?
              <ItemInfo>
              <NameInfo>Price:</NameInfo>
              <ValueInfo>{price? price: "No Info"}</ValueInfo>
            </ItemInfo> : null
            }
          </ListInfo>
        </BlokInfo>
      </ImgAndInfoBox>
      <BlokComments>
        <ComentsText>
          <span>Comments: </span>{coments? coments: "No Info"}
        </ComentsText>
      </BlokComments>
      <BlokButton>
        <BtnContct  />
        <BtnAddTo type="button" like ={(e) => addFavorite(e, _id, isFavorite)}>{isFavorite?"Remove from" : "Add to"}</BtnAddTo>
      </BlokButton>
    </ModalCard>
  );
};
