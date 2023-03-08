import {
  Input,
  Label,
  // RegionInput
} from "../../Forms.styled";
import { FormError } from "../../LoginForm/LoginForm";
import "react-phone-number-input/style.css";

export const StepTwo = ({ values }) => {
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
