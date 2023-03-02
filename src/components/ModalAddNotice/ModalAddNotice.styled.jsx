import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";
import { Form, Field } from "formik";
import { Link } from "react-router-dom";

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
  left: 32px;
  margin: 0;
  font-size: 10px;
  line-height: calc(1.5);
  color: red;
`;

export const Label = styled.label`
  /* height: 54px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  font-size: 18px;
  line-height: 1.4;
  ${device.tablet} {
    font-size: 24px;
    line-height: 1.1;
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

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
  position: relative;
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
  margin-bottom: 20px;
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
    margin-top: 12px;
  }
`;
export const Button = styled.button`
  margin-top: 24px;
  padding: 8px 37px;
  background-color: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: #fff;
  transition: color 300ms linear, background-color 300ms linear;
  :hover,
  :focus {
    background-color: #fff;
    color: rgba(0, 0, 0, 1);
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
  :hover,
  :focus {
    background-color: #f59256;
    color: #fff;
  }
`;

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${device.tablet} {
    gap: 28px;
  }
`;
export const FormSearch = styled(FormCustom)`
  position: relative;
`;

export const Paragraph = styled.p`
  margin-top: 30px;
  text-align: center;
  & span {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
  }
`;

export const FormLink = styled(Link)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-decoration-line: underline;
  color: ${colors.blue};
`;
