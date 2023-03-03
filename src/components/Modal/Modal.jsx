import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as CloseSvg } from "../../assets/svg/close.svg";
import { Backdrop, Content, AddContent, CloseBtn } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");
export const Modal = ({ onClose, children, type = "default" }) => {
  const body = document.querySelector("body");

  useEffect(() => {
    // body.classList.add("no-scroll");
  }, [body.classList]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        // body.classList.remove("no-scroll");
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, body.classList]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      // body.classList.remove("no-scroll");
      onClose();
    }
  };

  const renderContent = (children) => {
    if (type === "addPet") {
      return (
        <AddContent>
          <CloseBtn type="button" onClick={onClose}>
            <CloseSvg />
          </CloseBtn>
          {children}
        </AddContent>
      );
    }

    return <Content>{children}</Content>;
  };

  return createPortal(
    <Backdrop id="modal" onClick={handleBackdropClick}>
      {renderContent(children)}
    </Backdrop>,
    modalRoot
  );
};
