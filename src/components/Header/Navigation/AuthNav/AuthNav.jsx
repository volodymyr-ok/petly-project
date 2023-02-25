import React from 'react';
import {Nav, NavAuthItem} from "./AuthNav.styled";
import {NavAuthUl} from "../Nav/Nav.styled";

const AuthNav = ({type}) => {
    return (
        <Nav type={type}>
            <NavAuthUl>
                <li>
                    <NavAuthItem to="./login" color='color'>Login</NavAuthItem>
                </li>
                <li>
                    <NavAuthItem to="./register" >Registration</NavAuthItem>
                </li>
            </NavAuthUl>
        </Nav>
    );
};

export default AuthNav;