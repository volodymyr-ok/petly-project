import PropTypes from "prop-types";
import sadCat from "../../assets/svg/sadCat.svg";
import { Modal } from "../Modal/Modal";
import { Btn, BtnBox, Img, Question } from "./ModalConfirm.styled";

export const ModalConfirm = ({ text, onClose, action, actionText, cancelText }) => {
  return (
    <Modal onClose={onClose}>
      <Img src={sadCat} alt="sad cat" />
      <Question>{text}</Question>
      <BtnBox>
        <Btn onClick={onClose} color="true">
          {cancelText}
        </Btn>
        <Btn onClick={action}>{actionText}</Btn>
      </BtnBox>
    </Modal>
  );
};

ModalConfirm.propTypes = {
  text: PropTypes.string,
  onClose: PropTypes.func,
  action: PropTypes.func,
  actionText: PropTypes.string,
  cancelText: PropTypes.string,
};
