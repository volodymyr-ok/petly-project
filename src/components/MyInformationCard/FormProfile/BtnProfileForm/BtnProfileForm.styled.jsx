import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { device } from "../../../../utils/mixin";

export const BtnPencil = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  padding: 0;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  transition: transform 300ms linear;
  border-radius: 50%;
  overflow: hidden;

  cursor: pointer;
  ${device.tablet} {
    margin-left: 24px;
    width: 32px;
    min-width: 32px;
    min-height: 32px;
  }
  ${device.desktop} {
    margin-left: auto;
  }
  /* img {
    width: 20px;
    ${device.tablet} {
      width: 32px;
    }
  } */

  svg {
    fill: ${(p) => (p.dark ? colors.primaryText : colors.accentOrange)};
    opacity: 0.6;
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    transition: transform 300ms linear, box-shadow 300ms linear;

    ${device.tablet} {
      width: 32px;
      min-width: 32px;
      min-height: 32px;
    }
    &:hover {
      box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.11);
      transform: scale(1.05);
    }
  }

  &:hover {
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.11);
    transform: scale(1.05);
  }
`;
