import React from "react";
import { LogoImage } from "./Logo.styled";
import logo from "../../../assets/svg/logo.svg";

const Logo = () => (
  <a href={"/"}>
    <LogoImage src={logo} alt="Petly logo" />
  </a>
);

export default Logo;
