import {
  Input,
  Label,
  // RegionInput
} from "../../Forms.styled";
import { FormError } from "../../LoginForm/LoginForm";
import "react-phone-number-input/style.css";
import { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import { useState } from "react";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export const StepTwo = ({ values }) => {
  const NAME_INPUT_CITY = "city";
  const [val, setVal] = useState("");

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
    <>
      <Label>
        <Input name="name" placeholder="Name" />
        <FormError name="name" />
      </Label>
      <Label>
        {/* <LocationPicker value={val} onChange={handleChange} /> */}

        <Input name="city" placeholder="City, region" />
        <FormError name={NAME_INPUT_CITY} />
      </Label>
      <Label>
        {/* <PhoneInput
          placeholder="Mobile phone"
          value={phone}
          onChange={(val) => setPhone(val)}
          name="phone"
          type="tel"
          data-tel-input
          maxLength="13"
        /> */}
        <Input
          name="phone"
          type="tel"
          data-tel-input
          placeholder="Mobile phone"
          maxLength="13"
        />
        <FormError name="phone" />
      </Label>
    </>
  );
};
