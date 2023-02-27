import { useState } from "react";
import { Input, IconBox } from "./Forms.styled";

export const InputPasswordConfirm = () => {
  const [hidePassword, setHidePassword] = useState("hide");

  function onShowPassword() {
    let input = document.getElementById("password");
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
        id="password"
      />
      <IconBox type={hidePassword} onClick={onShowPassword} />
    </>
  );
};
