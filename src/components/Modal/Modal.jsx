import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Content } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");
export const Modal = ({ onClose, children }) => {
  console.log(children)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot
  );
};
