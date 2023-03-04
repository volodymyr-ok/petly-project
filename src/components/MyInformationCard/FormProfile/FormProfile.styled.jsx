import styled, {createGlobalStyle} from "styled-components";
import { colors } from "../../../utils/colors";
import { device } from "../../../utils/mixin";

export const DatePickerWrapperStyles = createGlobalStyle`
  .react-datepicker {
    border: solid 1px ${colors.accentOrange};
    border-radius: 0.4rem;
  }

  .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {
    border-bottom-color: ${colors.accentOrange};
  }

  .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before {
    border-top-color: ${colors.accentOrange};
  }

  .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
    border-bottom-color: ${colors.accentOrange};
  }

  .react-datepicker-wrapper {
    background-color: transparent;
      // background-color: ${colors.accentOrange};
    border: none;
    width: 150px;
    //position: relative;
    //top: -98px;
    //left: 65px;

    ${device.tablet} {
      //top: -122px;
      //left: 101px;
      height: 30px;
      width: 210px;
      font-size: 18px;
      line-height: 1.33;
    }
  }

  .react-datepicker, .react-datepicker__month {

    font-family: "Manrope", sans-serif;
  }

  .react-datepicker__header {
    background-color: ${colors.accentOrange};
    color: ${colors.white};
    border-bottom: none;
  }

  .react-datepicker__day {
    &:hover {
      background-color: #FDF7F2;
      border-radius: 50%;
    }
  }

  .react-datepicker__day--selected {
    background-color: ${colors.accentOrange};
    border-radius: 50%;

    &:hover {
      background-color: ${colors.darkOrange};
      border-radius: 50%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 36px;
  ${device.tablet} {
    margin: 0;
  }
  ${device.desktop} {
    margin-top: 36px;
  }
`;
export const SelectYear = styled.select`
  height: 25px;
  border: none;
  background-color: #FDF7F2;
  padding-left: 5px;
  font-family: "Manrope", sans-serif;
  border-radius: 15px 0 0 15px
`;

export const SelectMonth = styled.select`
  border: none;
  background-color: #FDF7F2;
  font-family: "Manrope", sans-serif;
  border-radius: 0 15px 15px 0;
`;

export const BirthBtn = styled.div`
  //position: absolute;
  //top: -114px;
  //left: 65px;
  width: 150px;
  min-width: 150px;
  max-width: 270px;
  padding: 4px 4px 4px 16px;
  font-size: 12px;
  line-height: 1.33;
  //background-color: #fdf7f2;
  border: none;
  border-radius: 40px;
  outline: none;

  ${device.tablet} {
    top: -140px;
    left: 101px;
    height: 30px;
    width: 210px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  input {
    width: calc(100% - 75px);
    min-width: 156px;
    max-width: 270px;
    padding: 4px 4px 4px 18px;
    font-size: 12px;
    line-height: 1.33;
    background-color: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    outline: none;
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
