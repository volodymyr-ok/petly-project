import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";
import { StyledButton } from "../Button/Button.styled";

export const Img = styled.img`
  height: 100px;

  ${device.tablet} {
    width: 400px;
    height: 200px;
  }
`;

export const Question = styled.h2`
  font-size: 18px;
  text-align: center;

  ${device.tablet} {
    font-size: 24px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;

  ${device.tablet} {
    padding: 20px;
  }
`;

export const Btn = styled(StyledButton)`
  padding: 5px 28px;
  background-color: ${(prop) => (prop.color ? ` ${colors.accentOrange}` : `${colors.white}`)};
`;
