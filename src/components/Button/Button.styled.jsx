import styled from 'styled-components';
import { colors } from 'utils/colors';
import { device } from 'utils/mixin';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 28px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;

  color: ${colors.primaryText};
  border: 2px solid ${colors.accentOrange};
  border-radius: 40px;
  background-color: ${colors.white};
  cursor: pointer;

  ${device.tablet} {
    padding: 10px 28px;
    font-size: 20px;
  }

  :hover,
  :focus {
    color: ${colors.white};
    background-color: ${colors.accentOrange};
  }
`;
