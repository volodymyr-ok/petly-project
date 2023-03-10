import { ModalWindow } from "../ModalWindow/ModalWindow";
import { CancelBtn } from "../CancelBtn/CancelBtn";
import { Text, Wrap, StyledLink, Title, Button } from "./WarningMessage.styled";


export const WarningMessage = ({
  onClose,
  text,
  title,
  type,
  onRemove,
  // approveFunk,
  id,
}) => {

  const clickHandler = () => {
    onRemove(id)
    onClose();
  };

  return (
    <ModalWindow onClose={onClose} modalType={"addPet"}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {type === "auth" && (
        <Wrap>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </Wrap>
      )}
      {type === "approve" && (
        <Wrap>
          <CancelBtn onClick={onClose} />
          <Button type="button" onClick={clickHandler}>
            Delete
          </Button>
        </Wrap>
      )}
    </ModalWindow>
  );
};
