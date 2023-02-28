import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";

export const CardBox = styled.div`
  margin: 0 auto;
  width: 280px;
  ${device.tablet} {
    margin: 0;
    width: 736px;
  }
  ${device.desktop} {
    width: 411px;
  }
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
    border-radius: 0px 40px 40px 0px;
    display: flex;
    flex-wrap: wrap;
  }
  ${device.desktop} {
    display: block;
    padding: 20px 16px 18px 16px;
    position: relative;
  }
`;

export const ImgBox = styled.span`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  max-width: 233px;
  max-height: 233px;
  border-radius: 50%;
  overflow: hidden;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.11);
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
