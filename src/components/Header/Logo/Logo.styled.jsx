import styled from "styled-components";
import { device } from "../../../utils/mixin";
export const LogoImage = styled.img`
  width: 82px;
  margin-right: auto;
  top: 5px;
  position: relative;
  z-index: 10;

  ${device.tablet} {
    height: 48px;
    width: 94px;
  }
  ${device.desktop} {
    margin-right: 80px;
  }
`;
