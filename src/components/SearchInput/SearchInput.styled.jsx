import styled from "styled-components";
import { device } from "../../utils/mixin";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  padding: 9px 10px 9px 12px;

  min-width: 280px;
  height: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  border: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
  color: #535353;

  ${device.tablet} {
    padding: 9px 12px 9px 20px;
    min-width: 608px;
    height: 44px;
    border-radius: 40px;

    font-size: 20px;
  }
  ${device.desktop} {
    padding: 10px 12px 10px 20px;
    border-radius: 20px;
  }

  ::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.35;
    color: #535353;

    ${device.tablet} {
      font-size: 20px;
    }
  }

  :focus {
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  ${device.tablet} {
    width: 42px;
    height: 42px;
  }

  img {
    width: 20px;
    height: 20px;

    ${device.tablet} {
      width: 24px;
      height: 24px;
    }
  }
`;
