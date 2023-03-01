import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { device } from "../../../../utils/mixin";
import { ReactComponent as Heart } from "../../../../assets/svg/heart.svg";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background-color: ${colors.white};
  border: 2px solid ${colors.accentOrange};
  border-radius: 40px;

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: 0.04em;
  }

  :hover {
    border-color: ${colors.darkOrange};
    cursor: pointer;
  }
  :hover svg {
    fill: ${colors.darkOrange};
  }

  ${device.tablet} {
    width: 160px;
  }
`;

export const IconHeart = styled(Heart)`
  margin-left: 8px;
  width: 16px;
  height: 16px;
  fill: ${colors.accentOrange};
`;
