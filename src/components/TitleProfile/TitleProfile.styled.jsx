import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";

export const InformationTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${colors.black};
  ${device.tablet} {
    margin-left: 32px;
    font-size: 28px;
  }
  ${device.desktop} {
    margin-left: 17px;
    font-weight: 500;
    font-size: 28px;
  }
`;
