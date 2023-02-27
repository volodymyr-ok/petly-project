import React from 'react';
import {Nav, NavAuthItem} from "./AuthNav.styled";
import {NavAuthUl} from "../Nav/Nav.styled";

const AuthNav = ({type, updateMenu}) => {

    return (
        <Nav type={type}>
            <NavAuthUl>
                <li>
                    <NavAuthItem to="./login" color='color' onClick={updateMenu}>Login</NavAuthItem>
                </li>
                <li>
                    <NavAuthItem to="./register" onClick={updateMenu}>Registration</NavAuthItem>
                </li>
            </NavAuthUl>
        </Nav>
    );
};

export default AuthNav;