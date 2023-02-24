import React from "react";
import { NavItem, NavMain } from "../Nav/Nav.styled";

const AuthNav = () => {
  return (
    <NavMain>
      <NavItem to="./register">Register</NavItem>
      <NavItem to="./login">Login</NavItem>
    </NavMain>
  );
};

export default AuthNav;
