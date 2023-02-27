import { useState } from "react";
import { Input, IconBox } from "./Forms.styled";
import { RxEyeClosed } from "react-icons/rx";
import { RxEyeOpen } from "react-icons/rx";

export const InputPasswordConfirm = () => {
  const [hidePassword, setHidePassword] = useState("hide");

  function onShowPassword() {
    let input = document.getElementById("confirmPassword");
    if (input.type === "password") {
      setHidePassword("show");
      input.type = "text";
    } else {
      setHidePassword("hide");
      input.type = "password";
    }
  }

  return (
    <>
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        id="confirmPassword"
      />
      <IconBox>
        {hidePassword === "hide" ? (
          <RxEyeClosed onClick={onShowPassword} />
        ) : (
          <RxEyeOpen onClick={onShowPassword} />
        )}
      </IconBox>
    </>
  );
};
