import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixin";

export const Btn = styled.button`
  cursor: pointer;
  margin-top: 44px;
  margin-left: auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  background-color: ${colors.white};
  overflow: hidden;
  border: none;
  ${device.tablet} {
    order: 3;
    margin-left: 0;
    margin-top: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
  }
  ${device.desktop} {
    order: 1;
    margin-top: 24px;
  }

  img {
    margin-right: 4px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: ${colors.accentOrange};
  }
`;
