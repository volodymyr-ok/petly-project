import sadCat from "../../assets/svg/sadCat.svg";
import { Modal } from "../Modal/Modal";
import { Btn, BtnBox, Img, Question } from "./ModalConfirm.styled";

export const ModalConfirm = ({ text, onClose, action, actionText, cancelText }) => {
  return (
    <Modal onClose={onClose}>
      <Img src={sadCat} alt="sad cat" />
      <Question>{text}</Question>
      <BtnBox>
        <Btn onClick={action}>{actionText}</Btn>
        <Btn onClick={onClose} color>
          {cancelText}
        </Btn>
      </BtnBox>
    </Modal>
  );
};
