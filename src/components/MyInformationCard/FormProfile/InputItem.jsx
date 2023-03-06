import { BtnPencil } from "./BtnProfileForm/BtnProfileForm.styled";
import { BoxInput, NameInput } from "./FormProfile.styled";
import { ReactComponent as Pencil } from "../../../assets/svg/pencil.svg";
import { ReactComponent as Check } from "../../../assets/svg/btn-ok.svg";
import { useEffect, useState } from "react";
import DatePickerStyled from "../../DatePicker/DatePickerStyled";
import LocationPicker from "../../LocationPicker/LocationPicker";

export const InputItem = ({
  type,
  value,
  name,
  title,
  mask,
  onChange,
  onClickPencil,
  disable,
  dark,
}) => {
  const [val, setVal] = useState(value);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (!value) return;
    const initData = value.split(".");
    if (name === "birthday") {
      const month = initData[1] < 10 ? initData[1].slice(1) : initData[1];
      const day = initData[0] < 10 ? initData[0].slice(1) : initData[0];
      const year = initData[2];
      setStartDate(new Date(year, month - 1, day));
    }
  }, [name, value]);

  const handleChange = (e) => {
    setStartDate(e);
    if (name === "birthday") {
      onChange([name, e]);
    } else if (name === "city") {
      onChange([name, e]);
    } else {
      setVal(e.target.value);
      onChange([name, e.target.value]);
    }
  };

  return (
    <BoxInput>
      <NameInput>{title}:</NameInput>
      {name === "birthday" ? (
        <DatePickerStyled
          startDate={startDate}
          disabled={disable}
          handleChange={handleChange}
        />
      ) : name === "city" ? (
        <LocationPicker
          value={val}
          onChange={handleChange}
          disabled={disable}
        />
      ) : (
        <input
          type={type}
          value={val}
          name={name}
          mask={mask}
          onChange={handleChange}
          disabled={disable}
        />
      )}
      <BtnPencil type="button" dark={dark} onClick={onClickPencil} name={name}>
        {disable ? <Pencil dark={dark} /> : <Check />}
      </BtnPencil>
    </BoxInput>
  );
};
