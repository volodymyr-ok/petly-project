import {
  CardMyInformation,
  ImgBox,
  CardBox,
  ImageBox,
  PreviewBox,
  PreviewBtn,
  LeftArrow,
} from "./MyInformationCard.styled";
import { TitleProfile } from "../TitleProfile/TitleProfile";
import { BtnLogOut } from "./BtnLogOut/BtnLogOut";
import { FormProfile } from "./FormProfile/FormProfile";
import { BtnEditPhoto } from "./BtnEditPhoto/BtnEditPhoto";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAvatar } from "../../redux/user/user-selections";
import { Modal } from "../Modal/Modal";
import Avatar from "react-avatar-edit";
import { updateAvatars } from "../../redux/user/user-operations";

const MyInformationCard = ({ user }) => {
  const dispatch = useDispatch();
  const [avatarURL, setAvatarURL] = useState(user?.avatarURL);
  const [fileName, setFileName] = useState(null);
  const [show, setShow] = useState(false);
  const avatar = useSelector(selectAvatar);
  const [preview, setPreview] = useState(null);

  function onClose() {
    setPreview(null);
  }

  const dataURLtoFile = (preview, filename) => {
    const arr = preview.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) u8arr[n] = bstr.charCodeAt(n);

    return new File([u8arr], filename, { type: mime });
  };

  function saveImageHandler() {
    if (preview) {
      dispatch(updateAvatars(dataURLtoFile(preview, fileName)));
    }
    setShow(false);
    setPreview(null);
  }

  function onCrop(pv) {
    setPreview(pv);
  }

  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    } else {
      const name = elem.target.files[0].name.split(".");
      setFileName(name[0] + ".png");
    }
  }

  useEffect(() => {
    if (avatar) {
      setAvatarURL(avatar);
    }
  }, [avatar]);

  return (
    <CardBox>
      <TitleProfile>My information:</TitleProfile>
      <CardMyInformation>
        <ImgBox>
          <img src={avatarURL} alt="user avatar" />
        </ImgBox>
        <BtnEditPhoto onClick={() => setShow(!show)} />
        <FormProfile user={user} />
        <BtnLogOut />
        {show ? (
          <Modal
            onClose={() => {
              setShow(!show);
              setPreview(null);
            }}
          >
            <div>
              <Avatar
                width={380}
                height={233}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={null}
                label={"Select a file"}
                backgroundColor={"transparent"}
                closeIconColor={"transparent"}
              />
              {preview && (
                <PreviewBox>
                  <LeftArrow />
                  <ImageBox>
                    <img src={preview} alt="Preview" style={{ width: 150 }} />
                    <img src={preview} alt="Preview" style={{ width: 100 }} />
                    <img src={preview} alt="Preview" style={{ width: 50 }} />
                  </ImageBox>
                  <PreviewBtn onClick={saveImageHandler}>Save</PreviewBtn>
                </PreviewBox>
              )}
            </div>
          </Modal>
        ) : null}
      </CardMyInformation>
    </CardBox>
  );
};

export default MyInformationCard;
