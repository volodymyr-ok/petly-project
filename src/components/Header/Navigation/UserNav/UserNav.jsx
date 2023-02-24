import React from "react";
import { NavItem, NavMain } from "../Nav/Nav.styled";

const UserNav = () => {
  return (
    <NavMain>
      <NavItem to="./user">User</NavItem>
    </NavMain>
  );
};

export default UserNav;
