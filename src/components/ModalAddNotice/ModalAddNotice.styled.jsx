import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";
import { Form, Field } from "formik";
// import { Link } from "react-router-dom";

export const ModalBox = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 18px;
  max-width: 420px;

  ${device.tablet} {
    max-width: 608px;
    border-radius: 40px;
    padding: 40px 80px;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -15px;
  left: 0px;
  margin: 0;
  font-size: 10px;
  line-height: calc(1.5);
  color: red;
`;
export const RadioWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  /* height: 54px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
  ${device.tablet} {
    font-size: 24px;
    line-height: 1.1;
  }

  button {
    max-width: 140px;
    max-height: 140px;
  }
  div {
    max-height: 140px;
    margin-bottom: 0;
  }
`;

export const LabelText = styled.span`
  margin-bottom: 8px;

  ${device.tablet} {
    margin-bottom: 12px;
  }

  span {
    color: ${colors.accentOrange};
  }
`;
export const LabelSex = styled(Label)`
  margin-bottom: 18px;
  display: inline-block;

  ${device.tablet} {
    margin-bottom: 31px;
  }

  span {
    color: ${colors.accentOrange};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  /* margin-bottom: 16px; */
  position: relative;
`;
export const RadioGroupSex = styled(RadioGroup)`
  gap: 83px;
  /* margin-bottom: 16px; */
`;
export const RadioBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    position: absolute;
    left: 0;
    z-index: -1;
  }
  input:checked + label {
    background-color: ${colors.accentOrange};
    color: ${colors.white};
  }
`;
export const SexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 14px;

  label {
    display: flex;
    gap: 14px;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    color: ${colors.black};
    cursor: pointer;

    ${device.tablet} {
      gap: 20px;
    }

    svg {
      position: relative;
      top: 1px;
      width: 36px;
      height: 36px;
    }
  }

  input {
    position: absolute;
    left: 0;
    z-index: -1;
  }
  input:checked + label {
    color: ${colors.accentOrange};
  }

  :hover {
    label {
      color: ${colors.darkOrange};
    }
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  position: relative;

  color: ${colors.primaryText};
  border: 2px solid ${colors.accentOrange};
  border-radius: 40px;
  background-color: ${colors.white};
  cursor: pointer;

  ${device.tablet} {
    max-height: 47px;
    padding: 10px 28px;
    font-size: 20px;
    line-height: 1.3;
  }

  :hover,
  :focus {
    color: ${colors.white};
    background-color: ${colors.accentOrange};
  }
`;

export const Input = styled(Field)`
  width: 100%;
  max-height: 40px;
  padding: 11px 20px 12px 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  color: ${colors.primaryText};
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  position: relative;

  ${device.tablet} {
    max-height: 47px;
    font-size: 16px;
    line-height: 1.6;
    padding: 11px 20px 12px 16px;
  }

  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: rgba(27, 27, 27, 0.6);
    ${device.tablet} {
      font-size: 16px;
      line-height: 1.6;
    }
  }

  &:focus {
    border-color: ${colors.accentOrange};
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.4;
  color: ${colors.primaryText};
  ${device.tablet} {
    font-size: 39px;
    line-height: 1.25;
  }
`;
export const SubTitle = styled(Title)`
  font-size: 16px;
  ${device.tablet} {
    font-size: 20px;
    margin-bottom: 0;
    letter-spacing: -0.01em;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${device.tablet} {
    flex-direction: row-reverse;
    width: 100%;
    gap: 20px;
    justify-content: center;
    /* margin-top: 12px; */
  }
`;
export const Button = styled.button`
  padding: 8px 37px;
  background-color: #f59256;
  border: 2px solid #f59256;
  /* margin-top: 12px; */
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #fff;
  cursor: pointer;
  transition: color 300ms linear, background-color 300ms linear;
  :hover {
    background-color: ${colors.darkOrange};
    /* color: rgba(0, 0, 0, 1); */
  }
  ${device.tablet} {
    width: 180px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    /* padding: 10px 28px; */
  }
`;

export const BackBtn = styled(Button)`
  margin-top: 0;
  background: #fff;
  color: #000000;
  border: 2px solid #f59256;
  :hover {
    border: 2px solid ${colors.darkOrange};
    background: #fff;
    color: #000000;
  }
`;

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${device.tablet} {
    gap: 28px;
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
  width: 116px;
  height: 116px;
  background: #fdf7f2;
  border-radius: 20px;
  font-size: 14px;
  line-height: 1.2;
  padding: 10px;
  white-space: wrap;

  ${device.tablet} {
    /* margin-bottom: 40px; */
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
    font-family: "Manrope";
    font-style: normal;
    /* padding: 14px 12px; */
    font-weight: 400;
    font-size: 14px;
    line-height: 1.35;
    color: rgba(27, 27, 27, 0.6);
  }
  ${device.tablet} {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    margin-top: 20px;
    padding: 16px;
    /* width: 394px; */
    height: 116px;
  }
`;

export const LabelBox = styled.div`
  position: relative;
  margin-bottom: 16px;
  ${device.tablet} {
    margin-bottom: 12px;
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
