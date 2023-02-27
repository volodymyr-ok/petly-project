import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";

export const ContainerUserPage = styled.div`
  padding: 61px 20px 80px 20px;
  width: 100%;
  height: 100%;
  ${device.tablet} {
    padding: 88px 32px 100px 0;
  }
  ${device.desktop} {
    padding: 57px 16px 40px 0;
  }
`;

export const ErrorText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
  color: red;
  padding: 20px 20px 80px 20px;
`;
