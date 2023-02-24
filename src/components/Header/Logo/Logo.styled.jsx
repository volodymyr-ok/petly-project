import styled from "styled-components";
import { device } from "../../../utils/mixin";
export const LogoImage = styled.img`
  width: 82px;
  margin-right: auto;
  margin-top: 5px;
  
  ${device.desktop} {
    margin-right: 80px;
  }
`;
