import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { device } from "../../../../utils/mixin";

export const Form = styled.form`
  margin-top: 36px;
  ${device.tablet} {
    margin: 0;
  }
  ${device.desktop} {
    margin-top: 36px;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  input {
    width: 156px;
    padding: 4px 4px 4px 18px;
    font-size: 12px;
    line-height: 1.33;
    ${device.tablet} {
      width: 216px;
      font-size: 18px;
      line-height: 1.38;
    }
  }
  input:disabled {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: ${colors.primaryText};
    background-color: ${colors.white};
    border: none;
    ${device.tablet} {
      font-size: 18px;
      line-height: 1.38;
    }
  }
`;

export const NameInput = styled.label`
  margin-right: 8px;
  width: 48px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${colors.primaryText};
  ${device.tablet} {
    width: 83px;
    font-size: 18px;
    line-height: 1.38;
  }
`;
