import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixin";
import { StyledButton } from "../Button/Button.styled";

export const ListBox = styled.div`
  padding-bottom: 100px;
`;
export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: unset;
  }
`;

export const BtnReadMore = styled(StyledButton)`
  font-size: 16px;
  line-height: 1.37;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.accentOrange};
  padding-top: 6px;
  padding-bottom: 6px;
`;
export const BtnRemove = styled(StyledButton)`
  font-size: 16px;
  line-height: 1.37;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkOrange};
  border-color: ${colors.darkOrange};
  fill: ${colors.darkOrange};
  padding-top: 6px;
  padding-bottom: 6px;
`;
// export const BtnAddSticky = styled(StyledButton)`
//     position: fixed;
//     padding: 0;
//     right: 5%;
//     top: 85%;
//     width: 80px;
//     height: 80px;
//     border-radius: 50%;
//     border: none;
//     background-color: ${colors.accentOrange};
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     stroke: ${colors.white};
//     font-size: 12px;
//     line-height: 1.33;
//     color: ${colors.white};
//     z-index: 1;
//     gap: 5px;
//     @media screen and (min-width: 460px) {

//     }
//     ${device.tablet} {
//       display: none;
//     }

// `
export const BtnAddSticky = styled(StyledButton)`
  position: fixed;
  padding: 0;
  left: 77%;
  top: 85%;
  width: 120px;
  height: 30px;
  border: none;
  background-color: ${colors.accentOrange};
  display: flex;
  flex-direction: row-reverse;
  transform: rotate(-90deg);
  justify-content: center;
  align-items: center;
  stroke: ${colors.white};
  font-size: 12px;
  line-height: 1.33;
  color: ${colors.white};
  z-index: 1;
  gap: 15px;
  @media screen and (min-width: 460px) {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    flex-direction: column;
    gap: 5px;
    transform: rotate(0);
  }
  ${device.tablet} {
    display: none;
  }
  &.hidden {
    display: none;
  }
`;
// export const SpaceBox = styled.div`
//   height: 8px;

// `
