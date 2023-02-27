import { Input, Label } from "../../Forms.styled";
import { InputPassword } from "../../InputPassword";
import { InputPasswordConfirm } from "../../InputPasswordConfirm";
import { FormError } from "../../LoginForm/LoginForm";

export const StepOne = () => {
  return (
    <>
      <Label>
        <Input name="email" type="text" placeholder="Email" />
        <FormError name="email" />
      </Label>
      <Label>
        <InputPassword />
        <FormError name="password" />
      </Label>
      <Label>
        <InputPasswordConfirm />
        {/* <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        /> */}

        <FormError name="confirmPassword" />
      </Label>
    </>
  );
};
