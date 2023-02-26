import styled from "styled-components";
import { device } from "../../../../../utils/mixin";

export const BtnPencil = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  ${device.tablet} {
    margin-left: 24px;
  }
  ${device.desktop} {
    margin-left: auto;
  }
  img {
    width: 20px;
    ${device.tablet} {
      width: 32px;
    }
  }
`;
