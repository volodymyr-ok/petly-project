import styled from "styled-components";
import { device } from "../../utils/mixin";
import { colors } from "../../utils/colors";
import mainBgM from "../../assets/img/home-main_bg/mainBgM.png";
import mainBgM2x from "../../assets/img/home-main_bg/mainBgM@2x.png";
import mainBgT from "../../assets/img/home-main_bg/mainBgT.png";
import mainBgT2x from "../../assets/img/home-main_bg/mainBgT@2x.png";
import mainBgD from "../../assets/img/home-main_bg/mainBgD.png";
import mainBgD2x from "../../assets/img/home-main_bg/mainBgD@2x.png";
import heartBg from "../../assets/img/home-heart_bg/heartBg.png";
import heartBg2x from "../../assets/img/home-heart_bg/heartBg@2x.png";

export const HomeSection = styled.section`
  margin-top: 60px;
  width: 100%;
  min-height: calc(100vh - 72px - 60px); // 72px це висота хедера
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 58px;

  background-image: url(${mainBgM});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100vw 470px;
  ${device.retina} {
    background-image: url(${mainBgM2x});
  }

  ${device.tablet} {
    margin-top: 64px;
    min-height: calc(100vh - 96px - 64px); // 96px це висота хедера
    gap: 118px;

    background-image: url(${mainBgT});
    background-size: 100vw 1098px;

    ${device.retina} {
      background-image: url(${mainBgT2x});
    }
  }

  ${device.desktop} {
    flex-direction: row;

    margin-top: 40px;

    margin-bottom: 0;
    padding-bottom: 0;

    min-height: calc(100vh - 88px - 33px); // 88px це висота хедера
    gap: 70px;

    background-image: url(${mainBgD});
    background-size: 100vw 538px;
    ${device.retina} {
      background-image: url(${mainBgD2x});
    }
  }
`;

export const TitleContainer = styled.div`
  max-width: 480px;
  padding: 0 20px;

  ${device.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }

  ${device.desktop} {
    max-width: 1280px;
    padding: 32px 0 0 16px;
  }
`;

export const Title = styled.h1`
  height: 88px;
  font-size: 31px; // має бути 32, але тоді не влізає
  line-height: 44px / 31px;
  color: ${colors.black};

  ${device.tablet} {
    height: 200px;
    font-size: 68px;
    line-height: 100 / 68;
  }

  ${device.desktop} {
    width: 588px;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;

  picture {
    ${device.desktop} {
      :before {
        content: "";
        /* width: 184px;
        height: 184px; */
        width: 92px;
        height: 89px;

        position: absolute;
        top: 42px;
        left: 38px;
        /* top: 0px;
        left: 0px; */

        background-image: url(${heartBg});
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: 92px 89px;

        ${device.retina} {
          background-image: url(${heartBg2x});
        }
      }
    }
  }
`;
