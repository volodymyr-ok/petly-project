import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { device } from "../../../../utils/mixin";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 47px;
  background-color: ${colors.accentOrange};
  border: 2px solid ${colors.accentOrange};
  border-radius: 40px;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: 0.04em;
    color: ${colors.white};
  }

  :hover {
    cursor: pointer;
    background-color: ${colors.darkOrange};
    border-color: ${colors.darkOrange};
  }
  ${device.tablet} {
    width: 160px;
  }
`;
