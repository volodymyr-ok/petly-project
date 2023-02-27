import { CardMyInformation, ImgBox, CardBox } from "./MyInformationCard.styled";
import { TitleProfile } from "../TitleProfile/TitleProfile";
// import IconPlus from "../img/avatar.png";
import { BtnEditPhoto } from "./BtnEditPhoto/BtnEditPhoto";
import { FormProfile } from "./FormProfile/FormProfile";
import { BtnLogOut } from "./BtnLogOut/BtnLogOut";

const MyInformationCard = ({ user }) => {
  console.log(" MyInformatio", user);
  return (
    <CardBox>
      <TitleProfile>My information:</TitleProfile>
      <CardMyInformation>
        <ImgBox>
          <img src={user?.avatarURL} alt="icon plus" />
        </ImgBox>
        <BtnEditPhoto />
        <FormProfile user={user} />
        <BtnLogOut />
      </CardMyInformation>
    </CardBox>
  );
};

export default MyInformationCard;
