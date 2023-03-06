import React, { forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {
  BirthBtn,
  DatePickerWrapperStyles,
  SelectMonth,
  SelectYear,
} from "./DatePickerStyled.styled";

const DatePickerStyled = ({
  startDate,
  disabled,
  handleChange,
  customStyle,
}) => {
  const range = () => {
    const years = [];
    for (let i = 1900; i < 2024; i++) {
      years.push(i);
    }
    return years;
  };
  const years = range();

  const getYear = (data) => data.getFullYear();
  const getMonth = (data) => data.getMonth();

  console.log("customStyle", customStyle);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <BirthBtn
      onClick={onClick}
      ref={ref}
      disabled={disabled}
      style={customStyle}
    >
      {value}
    </BirthBtn>
  ));

  return (
    <div style={{ width: "100%" }}>
      <DatePicker
        wrapperClassName="react-datepicker"
        selected={startDate}
        onChange={(date) => handleChange(date)}
        dateFormat="dd.MM.yyyy"
        disabled={disabled}
        customInput={<ExampleCustomInput />}
        renderCustomHeader={({ date, changeYear, changeMonth }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SelectYear
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectYear>

            <SelectMonth
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </SelectMonth>
          </div>
        )}
      />
      <DatePickerWrapperStyles />
    </div>
  );
};

export default DatePickerStyled;
