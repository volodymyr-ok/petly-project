import { CardMyInformation, ImgBox, CardBox } from "./MyInformationCard.styled";
import { TitleProfile } from "../TitleProfile/TitleProfile";
// import IconPlus from "../img/avatar.png";
// import { BtnEditPhoto } from "./BtnEditPhoto/BtnEditPhoto";
import { BtnLogOut } from "./BtnLogOut/BtnLogOut";
import { FormProfile } from "./FormProfile/FormProfile";
import { BtnEditPhoto } from "./BtnEditPhoto/BtnEditPhoto";
import { useState } from "react";

const MyInformationCard = ({ user }) => {
  const [isUploadFile, setIsUploadFile] = useState(false);
  const [file, setFile] = useState("");

  const editPhoto = () => {
    console.log("editPhot");
    setIsUploadFile(!isUploadFile);
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        "content-type": file.type,
        "content-length": `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const renderAvatar = () => {
    if (isUploadFile) {
      return (
        <div>
          <input type="file" onChange={handleFileChange} />

          <div>{file && `${file.name} - ${file.type}`}</div>

          <button onClick={handleUploadClick}>Upload</button>
        </div>
      );
    } else {
      return (
        <ImgBox>
          <img src={user?.avatarURL} alt="icon plus" />
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
        <BtnEditPhoto onClick={editPhoto} />
        <FormProfile user={user} />
        <BtnLogOut />
      </CardMyInformation>
    </CardBox>
  );
};

export default MyInformationCard;
