import React from 'react';
import Nav from "./Nav/Nav";
import UserNav from "./UserNav/UserNav";
import AuthNav from "./AuthNav/AuthNav";
import {NavContainer} from "./Navigation.styled";

const Navigation = () => {
    const isAuth = false

    return (
        <NavContainer>
            {isAuth ? <UserNav/> : <AuthNav/>}
            <Nav/>
        </NavContainer>
    );
};

export default Navigation;