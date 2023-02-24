import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components/LoginBtn/LoginBtn.styled";
import { Modal } from "../../components/Modal/Modal";
import { logoutUser } from "../../redux/auth/auth-operations";

const UserPage = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <div>UserPage</div>
      <Button onClick={logoutHandler}>Logout</Button>
      <Button onClick={handleOpenModal}>OPEN Modal</Button>

      {isOpen && (
        <Modal onClose={handleOpenModal}>
          //add some modalComponent you need
          <div>Hello I'm a modal wrapper</div>
        </Modal>
      )}
    </>
  );
};

export default UserPage;
