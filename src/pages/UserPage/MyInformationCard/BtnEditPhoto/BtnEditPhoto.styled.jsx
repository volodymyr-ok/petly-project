import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { device } from "../../../../utils/mixin";

export const Btn = styled.button`
  margin-top: 12px;
  margin-left: auto;
  margin-right: 24px;
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
    order: 4;
    margin-top: 8px;
    margin-right: 0;
    font-size: 12px;
  }
  ${device.desktop} {
    order: 1;
    margin: 0;
    position: absolute;
    top: 232px;
    left: 309px;
  }
  img {
    margin-right: 4px;
    margin-bottom: 2px;
    width: 20px;
    height: 20px;
  }
`;
