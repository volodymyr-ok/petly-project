import {
  Input,
  Label,
  // RegionInput
} from "../../Forms.styled";
import { FormError } from "../../LoginForm/LoginForm";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import { isValidPhoneNumber } from 'react-phone-number-input'
// import { useState } from "react";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export const StepTwo = ({ setFieldValue, values }) => {
  const NAME_INPUT_CITY = "city";
  return (
    <>
      <Label>
        <Input name="name" placeholder="Name" />
        <FormError name="name" />
      </Label>
      <Label>
        {/* <LocationPicker value={val} disabled={false} onChange={handleChange} /> */}

        <Input name="city" placeholder="City, region" />
        <FormError name={NAME_INPUT_CITY} />
      </Label>
      <Label>
        <PhoneInput
          placeholder="Mobile phone"
          value={values["phone"]}
          onChange={(e) => setFieldValue("phone", e)}
          name="phone"
          defaultCountry="UA"
          type="tel"
          data-tel-input
          maxLength="12"
        />
        {/*<Input*/}
        {/*  name="phone"*/}
        {/*  type="tel"*/}
        {/*  data-tel-input*/}
        {/*  placeholder="Mobile phone"*/}
        {/*  maxLength="13"*/}
        {/*/>*/}
        <FormError name="phone" />
      </Label>
    </>
  );
};
