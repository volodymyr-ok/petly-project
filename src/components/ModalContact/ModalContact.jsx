import { Modal } from "../Modal/Modal";
import { Btn, BtnBox, Question } from "./ModalConfirm.styled";

export const ModalContact = ({ text, onClose, action, actionTextPhone, cancelText }) => {
  return (
    <Modal onClose={onClose}>
      <Question>{text}</Question>
      <BtnBox>
      <Btn>
          {actionTextEmail}
        </Btn>
        <Btn>{actionTextPhone}</Btn>
      </BtnBox>
    </Modal>
  );
};
