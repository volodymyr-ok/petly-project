import styled from "styled-components";
import { device } from "../../utils/mixin";

export const NoticesSection = styled.section`
  padding-bottom: calc(100px - 40px); // відступ пагінаціїї

  ${device.desktop} {
    padding-bottom: calc(200px - 40px);
  }
`;
