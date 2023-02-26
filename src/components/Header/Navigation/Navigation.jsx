import React from 'react';
import Nav from "./Nav/Nav";
import UserNav from "./UserNav/UserNav";
import AuthNav from "./AuthNav/AuthNav";
import {NavContainer} from "./Navigation.styled";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../../redux/auth/auth-selectors";

const Navigation = () => {
    const isAuth = useSelector(selectIsAuth)

    return (
        <NavContainer>
            {isAuth ? <UserNav type='user'/> : <AuthNav type='user'/>}
            <Nav/>
        </NavContainer>
    );
};

export default Navigation;