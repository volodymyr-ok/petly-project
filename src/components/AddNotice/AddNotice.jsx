import { NoticeBox, NoticeBtn, NoticeText } from "./AddNotice.styled";
import { ReactComponent as Add } from "../../assets/svg/Addpet.svg";

export const AddNotice = ({ onAddPet }) => {
  return (
    <>
      <NoticeBox className="notice">
        <NoticeText className="notice">Add pet</NoticeText>
        <NoticeBtn onClick={onAddPet} className="notice">
          <Add width={23.3} height={23.3} />
        </NoticeBtn>
      </NoticeBox>
    </>
  );
};
