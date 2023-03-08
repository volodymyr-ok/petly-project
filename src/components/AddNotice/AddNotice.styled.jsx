import styled from "styled-components";
import { device } from "../../utils/mixin";
import { StyledButton } from "../Button/Button.styled";
import { colors } from "../../utils/colors";

export const NoticeBox = styled.div`
  &.notice {
    display: none;
    ${device.tablet} {
      display: flex;
      align-items: baseline;
      gap: 12px;
      margin-left: auto;
    }
  }
`;
export const NoticeText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
`;
export const NoticeBtn = styled(StyledButton)`
  padding: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid ${colors.accentOrange};
  background-color: ${colors.accentOrange};
  stroke: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover,
  :focus {
    background-color: transparent;
    svg {
      stroke: ${colors.accentOrange};
    }
  }
`;
