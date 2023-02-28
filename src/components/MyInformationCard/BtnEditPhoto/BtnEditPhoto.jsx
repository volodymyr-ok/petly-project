import EditPhoto from "../../../assets/svg/edit-photo.svg";
import { Btn } from "./BtnEditPhoto.styled";

export const BtnEditPhoto = ({ onClick }) => {
  return (
    <Btn onClick={onClick}>
      <img src={EditPhoto} alt="camera" />
      <span>Edit photo</span>
    </Btn>
  );
};
