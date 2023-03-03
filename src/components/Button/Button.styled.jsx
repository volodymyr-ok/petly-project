import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 28px;
  font-family: "Manrope";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;

  color: ${colors.primaryText};
  border: 2px solid ${colors.accentOrange};
  border-radius: 40px;
  background-color: ${colors.white};
  cursor: pointer;

  &.search {
    width: 40px;
    background-color: transparent;
    border: none;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0px;
    height: 100%;
    padding: 0;
    ${device.tablet} {
      width: 48px;
    }
  }
  &.active {
    background-color: ${colors.accentOrange};
    color: ${colors.white};
  }

  ${device.tablet} {
    padding: 10px 28px;
    font-size: 20px;
    line-height: 1.3;
  }

  :hover,
  :focus {
    color: ${colors.white};
    background-color: ${colors.accentOrange};
  }
`;
