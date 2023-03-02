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

export const ModalFindPet = ({petInfo, addFavorite, favoritesList}) => {

const { avatar, birthday, breed, categoryName, name, sex, location, owner, price, title, _id, coments} = petInfo;

const isFavorite = favoritesList?.includes(_id);

const clickHandler = (e) =>{
  console.log(e)
}
  return (
    <ModalCard>
      {/* {petInfo.map(el=>{
        const { avatar, birthday, breed, categoryName, location, owner, price, title, _id,} = el;
        return
      })} */}
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
        <BtnContct type="button"  />
        {/* <BtnAddTo type="button" onClick ={(e) => addFavorite(e, _id, isFavorite)}/> */}
        <BtnAddTo type="button" onClick ={clickHandler}/>
      </BlokButton>
    </ModalCard>
  );
};
