import { Input, Label } from "../../Forms.styled";

import { FormError } from "../../LoginForm/LoginForm";

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
