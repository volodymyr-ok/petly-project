import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Field } from "formik";
import { colors } from "../../utils/colors";
import { device, transition } from "../../utils/mixin";

import bgLoginDesc from "../../img/bgLoginDesc.png";
import bgLoginTab from "../../img/bgLoginTab.png";
import bgLoginMob from "../../img/bgLoginMob.png";

import { SectionTag } from "../Section/Section.styled";

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 25px;
  height: 25px;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
    fill: rgba(17, 17, 17, 0.6);
  }
`;

export const AuthSection = styled(SectionTag)`
  min-height: calc(100vh - 58px);
  background-repeat: no-repeat;
  background-image: url(${bgLoginMob});
  background-position: center bottom;
  background-size: contain;
  /* 
  @media screen and (max-width: 767px) {
    height: 100vh;
  } */
  ${device.tablet} {
    padding-top: 100px;
    background-image: url(${bgLoginTab});
    min-height: calc(100vh - 75px);
  }
  ${device.desktop} {
    padding-top: 80px;
    background-image: url(${bgLoginDesc});
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

export const Text = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  ${device.tablet} {
    font-size: 16px;
  }
`;

export const RegionInput = styled.div`
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 14px 10px 13px 32px;
  width: 100%;
  height: 100%;

  select {
    width: 48%;
    border: none;
    outline: none;
    color: ${colors.inputPriText};
    background-color: transparent;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 25px;
    }

    :focus-visible {
      outline: none;
    }
  }

  :focus-visible {
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
`;

export const Label = styled.label`
  height: 54px;
  display: flex;
  align-items: center;
  position: relative;

  .PhoneInput {
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    padding: 14px 10px 13px 32px;
    width: 100%;
    height: 100%;

    :focus-visible {
      border: 1px solid rgba(245, 146, 86, 0.5);
    }
  }

  .PhoneInputInput {
    border: none;
    outline: none;
    background-color: transparent;

    padding-left: 10px;
    border-left: 1px solid rgba(245, 146, 86, 0.5);

    :focus-visible {
      outline: none;
    }

    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 0.04em;
      color: rgba(17, 17, 17, 0.6);
      ${device.tablet} {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }
`;

export const LoginGoogle = styled.a`
  color: ${colors.black};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  padding: 6px 28px;
  border-radius: 40px;
  font-size: 14px;
  text-decoration: none;
  border: 2px solid ${colors.accentOrange};
  margin: 0 auto;
  max-width: 300px;
  transition: color ${transition}, background-color ${transition};
  :hover,
  :focus {
    background-color: ${colors.accentOrange};
    color: ${colors.white};
  }
  ${device.tablet} {
    padding: 10px 48px;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    position: relative;
    z-index: 1;
  }
`;

export const IconBox = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  right: 14px;
  top: 50%;
  z-index: 2;
  color: ${colors.inputPriText};
  transform: translateY(-50%);
  ${device.tablet} {
    right: 32px;
  }

  svg {
    width: 22px;
    height: 22px;
  }

  :hover {
    color: ${colors.accentOrange};
  }
`;

export const Wrapper = styled.div`
  ${device.tablet} {
    width: 608px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    margin-left: auto;
    margin-right: auto;
    padding: 60px 80px 40px;
  }
  ${device.desktop} {
    width: 618px;
    padding: 60px 80px;
  }
`;

export const TitleAuth = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: 40px;
  ${device.tablet} {
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const FormSearch = styled(FormCustom)`
  position: relative;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 14px 10px 13px 32px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #111111;
  /* color: rgba(17, 17, 17, 0.6); */
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  outline: none;
  position: relative;

  ${device.tablet} {
    font-size: 18px;
    line-height: 25px;
  }
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
    ${device.tablet} {
      font-size: 18px;
      line-height: 25px;
    }
  }
  /* border-color: #f59256; */
  /* &:hover, */
  &:focus {
    border-color: ${colors.accentOrange};
  }
`;
export const SearchInput = styled(Input)`
  border: none;
  background-color: ${colors.white};
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
  /* &:visited {
    color: rgba(85, 26, 139);
  } */
`;

export const toastStyled = {
  position: "top-right",
  autoClose: 5000,
  pauseOnHover: true,
};
