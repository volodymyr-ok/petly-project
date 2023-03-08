import styled from "styled-components";
import { device } from "../../utils/mixin";

export const NoticesSection = styled.section`
  padding-bottom: 100px;

  ${device.desktop} {
    padding-bottom: 200px;
  }
`;
