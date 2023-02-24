import React from 'react';
import {BurgerBtn, BurgerImage} from "../../Header.styled";
import burgerBtn from "../../../../assets/svg/burger-menu-btn.svg";
import {NavItem, NavMain} from "../Nav/Nav.styled";

const UserNav = () => {
    return (
        <NavMain>
            <NavItem to="./user">User</NavItem>
        </NavMain>
    );
};

export default UserNav;