import styled from "styled-components";

import { Form, Field } from "formik";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";

export const Overlay = styled.div`
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 99px auto;
  justify-content: center;
  align-items: center;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1200;
`;

export const ModalItem = styled.div`
  position: relative;
  display: block;
  padding: 40px 20px;
  width: 280px;
  height: 530px;
  background: #ffffff;
  border-radius: 40px;
  ${device.tablet} {
    padding: 40px 80px;
    width: 608px;
    height: 570px;
  }
`;

export const ModalItemTwo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  width: 280px;
  height: 670px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  ${device.tablet} {
    padding: 40px auto;
    width: 608px;
    height: 661px;
  }
`;

export const TitleItemTwo = styled.h4`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  text-align: center;
  margin-bottom: 20px;
  color: #111111;
  ${device.tablet} {
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: -0.01em;
  }
`;

export const TitleTwo = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.37;
  color: #111111;
  ${device.tablet} {
    font-size: 36px;
    line-height: 1.36;
  }
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  display: flex;
  transition: color 300ms linear, background-color 300ms linear;

  svg {
    fill: rgba(17, 17, 17, 0.6);
    &:hover {
      fill: rgba(245, 146, 86, 1);
    }
  }

  :hover,
  :focus,
  :active {
    stroke: rgba(245, 146, 86, 1);
    fill: rgba(245, 146, 86, 1);
  }

  svg {
    fill: black;
  }

  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;

  background: #fdf7f2;
  border-radius: 50%;
  ${device.tablet} {
    width: 44px;
    height: 44px;
    top: 25px;
    right: 25px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 40px;
  text-align: center;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.37;
  color: #111111;
  ${device.tablet} {
    font-size: 36px;
    line-height: 1.36;
  }
`;

export const FormStyled = styled(Form)`
  display: block;
`;

export const FieldStyled = styled(Field)`
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  cursor: pointer;
  width: 240px;
  height: 40px;
  color: rgba(17, 17, 17, 0.6);
  margin-top: 8px;
  padding: 11px 14px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: rgba(27, 27, 27, 0.6);
    ${device.tablet} {
      font-size: 16px;
      line-height: 1.62;
      color: rgba(17, 17, 17, 0.6);
    }
  }
  ${device.tablet} {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    padding: 16px 10px;
    width: 448px;
    height: 48px;
    margin-top: 12px;
  }
`;

export const FieldPhoto = styled(Field)`
  display: none;
  cursor: pointer;
`;

export const AddFile = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 208px;
  height: 208px;
  background-color: #fdf7f2;
  border-radius: 20px;
  margin-bottom: 20px;

  :hover,
  :focus,
  :active {
    filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
    box-shadow: 0px 0px 6px 1px rgba(255, 255, 255, 0.11);
    transition: transform 300ms linear, stroke 300ms linear;
    transform: scale(1.05);
    stroke: rgba(245, 146, 86, 0.5);
    fill: rgba(245, 146, 86, 0.5);

    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  svg {
    stroke: #111111;
  }

  ${device.tablet} {
    margin-bottom: 40px;
    width: 184px;
    height: 184px;
  }
`;

export const FieldTextarea = styled(Field)`
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  display: block;
  margin-top: 8px;
  padding: 14px 12px;
  width: 100%;
  height: 76px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
  ::placeholder {
    position: absolute;
    top: 0px;
    left: 5px;
    padding: 14px 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: rgba(27, 27, 27, 0.6);
    ${device.tablet} {
      top: 5px;
      left: 8px;
    }
  }
  ${device.tablet} {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    margin-top: 20px;
    padding: 16px;
    width: 394px;
    height: 113px;
  }
`;

export const LabelBox = styled.div`
  margin-bottom: 16px;
  ${device.tablet} {
    margin-bottom: 28px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.47;
  color: #111111;
  ${device.tablet} {
    font-size: 24px;
    line-height: 1.1;
  }
`;

export const FlexBox = styled.div`
  cursor: pointer;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  ${device.tablet} {
    flex-direction: row-reverse;
    display: flex;
  }
`;

export const NextBtn = styled.button`
  cursor: pointer;
  display: block;
  width: 240px;
  height: 40px;
  margin-bottom: 12px;

  background: #f59256;
  border-radius: 40px;
  border: none;
  color: #fff;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover,
  &:focus {
    background: ${colors.darkOrange};
  }

  ${device.tablet} {
    width: 180px;
    height: 44px;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;
  }
`;

export const CancelBtn = styled.button`
  font-family: "Manrope";
  font-style: normal;
  cursor: pointer;
  margin-right: 15px;
  display: block;
  width: 240px;
  height: 40px;
  background: #fff;
  border-radius: 40px;
  transition: color 300ms linear, background-color 300ms linear;
  color: #111111;
  border: 2px solid #f59256;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  &:hover,
  &:focus {
    background: ${(props) => (props.color ? `${colors.darkOrange}` : ``)};
    border: 2px solid ${colors.darkOrange};
  }

  &.active {
    background: ${(props) => (props.color ? `${colors.darkOrange}` : ``)};
    border: 2px solid ${colors.darkOrange};
  }

  ${device.tablet} {
    width: 180px;
    height: 44px;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: 0.04em;
  }
`;

export const ErrorText = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.6;
  color: red;
  margin-top: -20px;
  position: absolute;
  @media (min-width: 320px) {
    margin-left: 10px;
  }
  ${device.tablet} {
    margin-top: -30px;
  }
`;
