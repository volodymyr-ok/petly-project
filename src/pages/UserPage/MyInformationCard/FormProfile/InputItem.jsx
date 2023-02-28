// import { BtnProfileForm } from "./BtnProfileForm/BtnProfileForm";
import { BtnPencil } from "./BtnProfileForm/BtnProfileForm.styled";
import { BoxInput, NameInput } from "./FormProfile.styled";
import { ReactComponent as Pencil } from "../../../../assets/svg/pencil.svg";
import { ReactComponent as Check } from "../../../../assets/svg/btn-ok.svg";
import { useState } from "react";

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
  const [val, setVal] = useState(value);
  const handleChange = (e) => {
    setVal(e.target.value);
    onChange([name, e.target.value]);
  };

  return (
    <BoxInput>
      <NameInput>{title}:</NameInput>
      <input
        type={type}
        value={val}
        name={name}
        title
        mask={mask}
        onBlur={onBlur}
        onChange={handleChange}
        disabled={disable}
      />
      <BtnPencil type="button" dark={dark} onClick={onClickPencil} name={name}>
        {disable ? <Pencil dark={dark} /> : <Check />}
      </BtnPencil>
    </BoxInput>
  );
};
