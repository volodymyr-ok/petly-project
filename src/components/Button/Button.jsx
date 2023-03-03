import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({ children, type = "button", ...props }) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};
