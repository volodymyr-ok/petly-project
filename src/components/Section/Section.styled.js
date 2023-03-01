import styled from "styled-components";
import { device } from "../../utils/mixin";

export const SectionTag = styled.section`
  padding: 42px 0 100px;

  ${device.tablet} {
    padding-top: 89px;
  }

  ${device.desktop} {
    padding: 59px 0 200px;
  }
`;
