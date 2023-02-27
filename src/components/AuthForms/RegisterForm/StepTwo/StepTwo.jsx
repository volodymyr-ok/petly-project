import { Input, Label } from "../../Forms.styled";
import { FormError } from "../../LoginForm/LoginForm";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

export const StepTwo = ({
  setFieldTouched,
  setFieldError,
  setFieldValue,
  values: { city },
}) => {
  const NAME_INPUT_CITY = "city";
  // const handleChange = (evt) => {
  //   setFieldTouched(NAME_INPUT_CITY);

  //   setFieldError(NAME_INPUT_CITY, true);

  //   setFieldValue(NAME_INPUT_CITY, evt.label);
  // };
  const [value, setValue] = useState();

  return (
    <>
      <Label>
        <Input name="name" placeholder="Name" />
        <FormError name="name" />
      </Label>
      <Label>
        <Input name="city" placeholder="City, region" />
        <FormError name={NAME_INPUT_CITY} />
      </Label>
      <Label>
        <PhoneInput
          placeholder="Mobile phone"
          value={value}
          onChange={setValue}
          name="phone"
          type="tel"
          data-tel-input
          maxLength="13"
        />

        {/* <Input name="phone" placeholder="Mobile phone" maxLength="13" /> */}
        {/* <Input
          name="phone"
          type="tel"
          data-tel-input
          placeholder="Mobile phone"
          maxLength="13"
        /> */}
        <FormError name="phone" />
      </Label>
    </>
  );
};
