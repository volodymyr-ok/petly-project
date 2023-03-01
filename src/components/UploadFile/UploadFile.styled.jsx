import styled from "styled-components";
import { device } from "../../utils/mixin";
import { colors } from "../../utils/colors";

export const UploadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
  /* height: 100%; */
  padding: 20px;

  input {
    opacity: 0;
    height: 0;
    width: 0;
    line-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  ${device.tablet} {
  }

  svg {
    stroke: ${colors.primaryText};
    width: 51px;
    height: 51px;

    :hover {
      stroke: ${colors.accentOrange};
    }
  }
`;

export const UploadBtn = styled.button`
  border: ${colors.accentOrange};
  background-color: ${colors.accentOrange};
  color: ${colors.white};
  padding: 10px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  font-size: 14px;
  line-height: 1;
  transition: background-color 0.25s ease-in-out;
  :hover {
    background-color: ${colors.darkOrange};
  }

  ${device.tablet} {
  }
`;
