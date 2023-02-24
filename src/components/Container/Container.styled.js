import styled from "styled-components";
import { device } from "../../utils/mixin";

export const MainContainer = styled.div`
  max-width: 480px;
  padding: 0 20px;
  margin: 0 auto;

  ${device.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }

  ${device.desktop} {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
