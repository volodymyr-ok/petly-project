import styled, {createGlobalStyle} from "styled-components";
import {device} from "../../utils/mixin";
import {colors} from "../../utils/colors";

export const BirthBtn = styled.div`
  width: calc(100% - 75px);
  min-width: 156px;
  max-width: 270px;
  padding: 4px 4px 4px 18px;
  font-size: 12px;
  line-height: 1.33;
  border: ${(props) => (props.disabled ? "none" : `1px solid rgba(245, 146, 86, 0.5)`)};;
  background-color: ${(props) => (props.disabled ? "none" : `#fdf7f2`)};;
  border-radius: 40px;
  outline: none;

  ${device.tablet} {
    width: 216px;
    font-size: 18px;
    line-height: 1.38;
  }
`;

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
    border: none;
    width: 150px;
    
    ${device.tablet} {
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
      background-color: ${colors.accentOrange};
      color: ${colors.white};
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