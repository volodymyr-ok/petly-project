import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ children, type = 'button' }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
};
