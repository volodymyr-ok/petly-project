// import { BtnProfileForm } from "./BtnProfileForm/BtnProfileForm";
import {BtnPencil} from "./BtnProfileForm/BtnProfileForm.styled";
import {BirthBtn, BoxInput, DatePickerWrapperStyles, NameInput, SelectMonth, SelectYear} from "./FormProfile.styled";
import {ReactComponent as Pencil} from "../../../assets/svg/pencil.svg";
import {ReactComponent as Check} from "../../../assets/svg/btn-ok.svg";
import {forwardRef, useEffect, useState} from "react";
import DatePicker from "react-datepicker";

export const InputItem = ({
                              type,
                              value,
                              name,
                              title,
                              mask,
                              onBlur,
                              onChange,
                              onClickPencil,
                              disable,
                              dark,
                          }) => {

    useEffect(() => {
        const initData = value.split('.')
        if (name === 'birthday') {
            const month = initData[1] < 10 ? initData[1].slice(1) : initData[1]
            const day = initData[0] < 10 ? initData[0].slice(1) : initData[0]
            const year = initData[2]
            setStartDate(new Date(year, month-1, day))
        }
    }, [name, value])

    const [val, setVal] = useState(value);
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (e) => {
        console.log('e', e)
        setStartDate(e)
        if (name === 'birthday') {
            onChange([name, e]);
        } else {
            setVal(e.target.value);
            onChange([name, e.target.value]);
        }
    };
    // const handleBlur = (e) => {
    //   console.log("nameActivePancil", nameActivePancil, name);
    //   setVal(value);
    //   onBlur(e);
    // };

    // const years = range(1950, getYear(new Date()) + 1, 1);
    const range = () => {
        const years = []
        for (let i = 1950; i < 2024; i++) {
            years.push(i)
        }
        return years
    }
    const years = range();

    const getYear = (data) => data.getFullYear()
    const getMonth = (data) => data.getMonth()

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

    const ExampleCustomInput = forwardRef(({value, onClick}, ref) => (
        <BirthBtn onClick={onClick} ref={ref}>
            {value}
        </BirthBtn>
    ));

    return (
        <BoxInput>
            <NameInput>{title}:</NameInput>
            {name === 'birthday' ?
                <div>
                    <DatePicker
                        wrapperClassName='react-datepicker'
                        selected={startDate}
                        onChange={(date) => handleChange(date)}
                        dateFormat="dd.MM.yyyy"
                        disabled={disable}
                        customInput={<ExampleCustomInput/>}
                        renderCustomHeader={({
                                                 date,
                                                 changeYear,
                                                 changeMonth,
                                             }) => (
                            <div
                                style={{
                                    margin: 10,
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <SelectYear
                                    value={getYear(date)}
                                    onChange={({target: {value}}) => changeYear(value)}
                                >
                                    {years.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </SelectYear>

                                <SelectMonth
                                    value={months[getMonth(date)]}
                                    onChange={({target: {value}}) =>
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
                    <DatePickerWrapperStyles/>
                </div>
                :
                <input
                    type={type}
                    value={val}
                    name={name}
                    mask={mask}
                    // onBlur={onBlur}
                    // onChange={handleChange}
                    onChange={handleChange}
                    disabled={disable}
                />}
            <BtnPencil type="button" dark={dark} onClick={onClickPencil} name={name}>
                {disable ? <Pencil dark={dark}/> : <Check/>}
            </BtnPencil>
        </BoxInput>
    );
};
