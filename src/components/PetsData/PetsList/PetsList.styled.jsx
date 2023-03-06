import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixin";
import { DeleteBtn } from "../../DeletePetBtn/DeletePetBtn.styled";

export const BoxPetsList = styled.div`
  ${device.desktop} {
    display: flex;
    flex-direction: column;
    height: 546px;

    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 40px 40px 40px 40px;
  }
`;

export const BoxScrollbar = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    color: ${colors.black};
    background-color: ${colors.hzModalPet};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.accentOrange};
    border-radius: 8px;
  }
`;

export const WrapperPicDiv = styled.div`
  margin-bottom: 20px;
  width: 240px;
  height: 240px;
  border-radius: 40px;
  background-color: #e1e1e1;
  ${device.tablet} {
    margin-right: 32px;
    margin-bottom: 0;
    width: 161px;
    height: 161px;
  }
  & > img {
    object-fit: cover;
    border-radius: inherit;
  }
`;

export const Description = styled.div`
  position: relative;

  ${device.tablet} {
    width: 471px;
  }
  ${device.desktop} {
    width: 580px;
  }
`;
export const Box = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  margin: 0 auto;
  padding: 20px;
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background-color: ${colors.white};
  ${device.mobile} {
    width: 440px;
  }
  ${device.tablet} {
    display: flex;
    width: 704px;
  }
  ${device.desktop} {
    width: 821px;
    margin-bottom: 22px;
  }
`;

export const InfoPet = styled.p`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 14px;
  font-weight: 400;
  ${device.tablet} {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  ${device.tablet} {
    margin-top: 40px;
  }
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: ${colors.inputSecText};
`;

export const Link = styled.a`
  position: relative;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: ${colors.accentOrange};
  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: ${colors.accentOrange};
    transition: width 300ms linear;
  }
  :hover::after {
    width: 100%;
    transition: 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);
  }
`;
export const EditPetBtn = styled(DeleteBtn)`
  right: 0;
  top: 30px;
  fill: #625656;
  ${device.tablet} {
    top: 0;
    right: 40px;
  }
  :hover,
  :focus {
    fill: ${colors.darkOrange};
    transform: scale(1.1);
    transition: transform 250ms linear;
  }
`;
