import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device, transition } from "../../utils/mixin";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  padding: 60px 0;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 200;

  ${device.tablet} {
    padding: 100px 0;
  }
`;

export const Content = styled.div`
margin: 20px;
  background-color: ${colors.white};
  position: relative;
  min-width: 280px;
  min-height: 194px;
  padding: 20px;
  //background-color: ${colors.white};

  border-radius: 20px;

  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
  ${device.mobile} {
    max-width: 480px;
  }
  ${device.tablet} {
    background-color: ${colors.white};
    max-width: 744px;
  }
`;
export const CloseBtn = styled.button`
  border: none;
  cursor: pointer;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: #fdf7f2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
  z-index: 1;
  transition: box-shadow ${transition}, color ${transition};

  ${device.tablet} {
    right: 20px;
    top: 20px;
    width: 44px;
    height: 44px;
  }

  &:hover {
    color: ${colors.accentOrange};
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  }

  svg {
    fill: currentColor;
    width: 16px;
    height: 16px;
    ${device.tablet} {
      width: 20px;
      height: 20px;
    }
  }
`;
export const AddContent = styled.div`
  position: absolute;
  top: 57%;
  left: 50%;
  width: 100%;
  max-width: 458px;
  padding: 20px;

  transform: translate(-50%, -50%);

  ${device.tablet} {
    position: relative;
    top: 6vw;
    left: 0;
    max-width: 608px;
    transform: translate(0, 0);
    padding: 0;
    /* padding: 80px; */
  }
`;
