import { CardMyInformation, ImgBox, CardBox } from "./MyInformationCard.styled";
import { TitleProfile } from "../TitleProfile/TitleProfile";
import IconPlus from "../img/avatar.png";
import { BtnEditPhoto } from "./BtnEditPhoto/BtnEditPhoto";
import { FormProfile } from "./FormProfile/FormProfile";
import { BtnLogOut } from "./BtnLogOut/BtnLogOut";

const MyInformationCard = () => {
  return (
    <CardBox>
      <TitleProfile>My information:</TitleProfile>
      <CardMyInformation>
        <ImgBox>
          <img src={IconPlus} alt="icon plus" />
        </ImgBox>
        <BtnEditPhoto />
        <FormProfile />
        <BtnLogOut />
      </CardMyInformation>
    </CardBox>
  );
};

export default MyInformationCard;
