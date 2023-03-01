import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixin";

export const ModalCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);

  padding: 60px 20px 40px 20px;
  min-width: 280px;
  width: calc(100% - 40px);
  /* min-height: 901px; */
  border-radius: 30px 30px 30px 30px;
  background-color: ${colors.white};
  overflow-y: auto;
  overflow-x: hidden;
  ${device.mobile} {
    width: 440px;
  }
  ${device.tablet} {
    width: 704px;
    padding: 32px 20px;
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
