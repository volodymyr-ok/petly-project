import { AddNoticeForm } from "./AddNoticeForm/AddNoticeForm";
import { ModalBox } from "./ModalAddNotice.styled";

export const ModalAddNotice = ({ onClose }) => {
  return (
    <ModalBox>
      <AddNoticeForm onClose={onClose} />
    </ModalBox>
  );
};
