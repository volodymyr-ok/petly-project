import Pencil from "../../../../../assets/svg/pencil.svg";
import BlackPencil from "../../../../../assets/svg/black-pencil.svg";
import { BtnPencil } from "./BtnProfileForm.styled";
import ok from "../../../../../assets/svg/btn-ok.svg";
import { useState } from "react";

export const BtnProfileForm = ({
  onClick,
  disableInput,
  name,
  disableTrue,
  activeImg,
}) => {
  const [nameActivePancil, setNameActivePancil] = useState("");
  console.log(nameActivePancil);
  const [colorPencil, setColorPencil] = useState(Pencil);
  const handleInput = (e) => {
    e.preventDefault();

    setNameActivePancil(e.currentTarget.name);
    switch (e.currentTarget.name) {
      case "name":
        onClick({
          ...disableTrue,
          name: !disableInput.name,
        });
        break;
      case "email":
        onClick({
          ...disableTrue,
          email: !disableInput.email,
        });
        break;
      case "birthday":
        onClick({ ...disableTrue, birthday: !disableInput.birthday });
        break;
      case "phone":
        onClick({ ...disableTrue, phone: !disableInput.phone });
        break;
      case "city":
        onClick({ ...disableTrue, city: !disableInput.city });
        break;
      default:
        break;
    }
    Object.values(disableInput).forEach((el) => {
      if (el) {
        return setColorPencil(Pencil);
      } else {
        return setColorPencil(BlackPencil);
      }
    });
  };

  console.log(colorPencil);
  return (
    <BtnPencil onClick={handleInput} name={name}>
      <img src={activeImg ? colorPencil : ok} alt="pencl" />
    </BtnPencil>
  );
};
