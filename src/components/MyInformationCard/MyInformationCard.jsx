import { CardMyInformation, ImgBox, CardBox } from "./MyInformationCard.styled";
import { TitleProfile } from "../TitleProfile/TitleProfile";
// import IconPlus from "../img/avatar.png";
// import { BtnEditPhoto } from "./BtnEditPhoto/BtnEditPhoto";
import { BtnLogOut } from "./BtnLogOut/BtnLogOut";
import { FormProfile } from "./FormProfile/FormProfile";
import { BtnEditPhoto } from "./BtnEditPhoto/BtnEditPhoto";
import { useEffect, useState } from "react";
import { UploadFile } from "../UploadFile/UploadFile";
import { useSelector } from "react-redux";
import { selectAvatar } from "../../redux/user/user-selections";

const MyInformationCard = ({ user }) => {
  const [isUploadFile, setIsUploadFile] = useState(false);
  const [avatarURL, setAvatarURL] = useState(user?.avatarURL);
  const [file, setFile] = useState(null);
  const avatar = useSelector(selectAvatar);

  console.log("Temporary log (can be deleted) ===>",  file)
  
  useEffect(() => {
    if (avatar) {
      setAvatarURL(avatar);
      setIsUploadFile(false);
    }
  }, [avatar]);

  const editPhoto = () => {
    setIsUploadFile(!isUploadFile);
  };

  const renderAvatar = () => {
    if (isUploadFile) {
      return (
        <ImgBox>
          <UploadFile setFile={setFile} />
        </ImgBox>
      );
    } else {
      return (
        <ImgBox>
          <img src={avatarURL} alt="user avatar" />
        </ImgBox>
      );
    }
  };

  // console.log(" MyInformatio", user);
  return (
    <CardBox>
      <TitleProfile>My information:</TitleProfile>
      <CardMyInformation>
        {renderAvatar()}
        {!isUploadFile && <BtnEditPhoto onClick={editPhoto} />}
        <FormProfile user={user} />
        <BtnLogOut />
      </CardMyInformation>
    </CardBox>
  );
};

export default MyInformationCard;
