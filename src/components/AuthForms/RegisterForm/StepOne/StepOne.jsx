import { Input, Label } from "../../Forms.styled";
import { FormError } from "../../LoginForm/LoginForm";

export const StepOne = () => {
  return (
    <>
      <Label>
        <Input name="email" type="text" placeholder="Email" />
        <FormError name="email" />
      </Label>
      <Label>
        <Input name="password" type="password" placeholder="Password" />
        <FormError name="password" />
      </Label>
      <Label>
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />

        <FormError name="confirmPassword" />
      </Label>
    </>
  );
};
