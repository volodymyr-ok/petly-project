import React from 'react';
import {Nav, NavAuthItem} from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <Nav>
            <NavAuthItem to="./login" color='color'>Login</NavAuthItem>
            <NavAuthItem to="./register" >Register</NavAuthItem>
        </Nav>
    );
};

export default AuthNav;