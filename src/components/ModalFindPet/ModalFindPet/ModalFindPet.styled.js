import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixin";

export const ModalCard = styled.div`
  position: relative;

  padding: 60px 20px 40px 20px;
  min-width: 280px;
  border-radius: 30px 30px 30px 30px;
  background-color: ${colors.white};
  overflow-y: auto;
  overflow-x: hidden;
  ${device.tablet} {
    width: 704px;
    padding: 32px 20px;
  }
`;
export const BtnClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: 1px solid black;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${colors.black};
  stroke-width: 1px;
  stroke-dasharray: 80;
  stroke-linejoin: round;
  & svg {
    transform: rotate(45deg);
  }
  &:hover,
  &:focus {
    stroke: ${colors.darkOrange};
    border-color: ${colors.darkOrange};
  }
`;

export const ImgAndInfoBox = styled.div`
  ${device.tablet} {
    display: flex;
    gap: 20px;
  }
`;

export const ImgBox = styled.div`
  position: relative;
  ${device.tablet} {
    width: 288px;
    height: 328px;
  }
  & img {
    object-fit: cover;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    ${device.tablet} {
      height: 328px;
    }
  }
`;

export const TextOnImg = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  display: inline-flex;
  padding: 6px 67px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  border-radius: 0 40px 40px 0;
`;

export const BlokInfo = styled.div`
  margin-top: 16px;
  ${device.tablet} {
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  letter-spacing: -0.01em;
  ${device.tablet} {
    font-size: 28px;
    line-height: 1.35;
  }
`;

export const ListInfo = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${device.tablet} {
    margin-top: 20px;
  }
`;

export const ItemInfo = styled.li`
  display: flex;
`;
export const ItemLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: ${colors.accentOrange};
  }
`;

export const NameInfo = styled.span`
  width: 80px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.35;
  color: ${colors.black};
  ${device.tablet} {
    font-size: 16px;
    line-height: 1.37;
  }
`;

export const ValueInfo = styled.p`
  margin-left: 40px;
  width: 155px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  color: ${colors.black};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${device.tablet} {
    width: 230px;
    font-size: 16px;
    line-height: 1.37;
  }
`;

export const BlokComments = styled.div`
  margin-top: 28px;
`;

export const ComentsText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  span {
    font-weight: 600;
  }
  ${device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const BlokButton = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${device.tablet} {
    margin-top: 32px;
    padding-right: 20px;
    flex-direction: row-reverse;
    justify-content: end;
  }
`;
export const ModalContent = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${device.tablet} {
    width: 568px;
    height: 158px;
    /* padding: 40px 80px; */
  }
`;
export const HidenTextBox = styled.div`
  position: relative;
  &:hover > p {
    transform: scale(1);
  }
`;
export const HidenText = styled.p`
  position: absolute;
  background-color: ${colors.darkOrange};
  color: ${colors.white};
  padding: 5px;
  font-size: 13px;
  text-align: center;
  border-radius: 20px;
  transform: scale(0);
  z-index: 1;
  top: -30px;
  right: 0;
`;

export const StyledLinkContact = styled(ItemLink)`
  text-align: center;
  padding: 8px 0;
  width: 100%;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  color: #ffffff;
  background-color: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  transition: color 300ms linear, background-color 300ms linear;
  :hover,
  :focus {
    color: #f59256;
    background-color: #fff;
  }
  @media (min-width: 768px) {
    width: 180px;
  }
`;
