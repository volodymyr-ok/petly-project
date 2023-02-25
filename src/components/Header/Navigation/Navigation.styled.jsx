import styled from "styled-components";
import {device} from "../../../utils/mixin";

export const NavContainer = styled.div`
    display: flex;
    align-items: center;


  ${device.desktop} {
    width: 100%;
    flex-direction: row-reverse;
  }
`;