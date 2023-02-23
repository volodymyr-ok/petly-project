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
        <Input name="password" type="text" placeholder="Password" />

        <FormError name="password" />
      </Label>
      <Label>
        <Input
          name="confirmPassword"
          type="text"
          placeholder="Confirm password"
        />

        <FormError name="confirmPassword" />
      </Label>
    </>
  );
};
