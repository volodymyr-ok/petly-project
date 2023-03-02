import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";
import {StyledButton} from "../Button/Button.styled";
import { HiArrowLeftCircle } from "react-icons/hi2";

export const CardBox = styled.div`
  margin: 0 auto;
  min-width: 280px;
  width: 100%;
  ${device.mobile} {
    width: 440px;
  }
  ${device.tablet} {
    margin: 0;
    width: 736px;
  }
  ${device.desktop} {
    width: 411px;
  }
`;

export const LeftArrow = styled(HiArrowLeftCircle)`
  position: absolute;
  left: 7px;
  top: -235px;
  width: 25px;
  height: 25px;
 color: ${colors.accentOrange};
`;

export const CardMyInformation = styled.div`
  margin-top: 18px;
  padding: 20px 16px;
  background-color: ${colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  ${device.tablet} {
    margin-top: 40px;
    padding: 40px 40px 24px 32px;
    border-radius: 0 40px 40px 0;
    display: flex;
    flex-wrap: wrap;
  }
  ${device.desktop} {
    display: block;
    padding: 20px 16px 18px 16px;
    position: relative;
  }
`;

export const ImgBox = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-width: 233px;
  min-height: 233px;
  width: 233px;
  height: 233px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.11);
  transition: transform 300ms linear;

  ${device.tablet} {
    order: 2;
    margin-left: 52px;
  }
  ${device.desktop} {
    order: 1;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :hover {
    transform: scale(1.05);
  }
`;
export const PreviewBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const ImageBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 10px;
`;

export const PreviewBtn = styled(StyledButton)`
  margin-top: 20px;
  width: 200px;
  font-size: 16px;
  line-height: 1.37;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.accentOrange};
  color: ${colors.white};
  border-color: ${colors.accentOrange};
  fill: ${colors.darkOrange};
  padding-top: 6px;
  padding-bottom: 6px;

  &:hover,
  &:focus {
    background: ${colors.darkOrange};
    border-color: ${colors.darkOrange};
  }

  &:active {
    background-color: ${colors.accentOrange};
    border-color: ${colors.accentOrange};
  }
`;
