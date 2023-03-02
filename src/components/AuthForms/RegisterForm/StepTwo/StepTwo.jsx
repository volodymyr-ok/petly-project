import {
  Input,
  Label,
  // RegionInput
} from "../../Forms.styled";
import { FormError } from "../../LoginForm/LoginForm";
import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { useState } from "react";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

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
  // const [phone, setPhone] = useState("");
  // const [country, setCountry] = useState("");
  // const [region, setRegion] = useState("");
  // console.log(country);
  return (
    <>
      {/* <Label>
        <Input name="name" placeholder="Name" />
        <FormError name="name" />
      </Label> */}
      <Label>
        {/* <RegionInput>
                    <CountryDropdown
                        blacklist={['RU']}
                        value={country}
                        defaultOptionLabel={'Country'}
                        onChange={(val) => setCountry(val)}/>
                    <RegionDropdown
                        defaultOptionLabel={'Region'}
                        blankOptionLabel="Select country first"
                        disableWhenEmpty={true}
                        country={country}
                        value={region}
                        onChange={(val) => setRegion(val)}/>
                </RegionInput> */}

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
