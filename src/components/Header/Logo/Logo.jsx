import React from "react";
import { LogoImage, LogoLink } from "./Logo.styled";
import logo from "../../../assets/svg/logo.svg";

const Logo = () => (
  <LogoLink href={"/"}>
    <LogoImage src={logo} alt="Petly logo" />
  </LogoLink>
);

export default Logo;
