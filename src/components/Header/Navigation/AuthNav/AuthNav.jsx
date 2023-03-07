import React, {useEffect, useState} from 'react';
import {Nav, NavAuthItem, NavAuthUl} from "./AuthNav.styled";
import {useLocation} from "react-router-dom";

const AuthNav = ({type, updateMenu}) => {

    const location = useLocation();
    const { pathname } = location;
    const [color, setColor] = useState('')
    useEffect(()=>{
            setColor(pathname === '/register' ? 'white' : 'orange')
    }, [pathname])

    return (
        <Nav type={type}>
            <NavAuthUl>
                <li>
                    <NavAuthItem to="./login" color={color} init={'init'} onClick={updateMenu}>Login</NavAuthItem>
                </li>
                <li>
                    <NavAuthItem to="./register" color={color} onClick={updateMenu}>Registration</NavAuthItem>
                </li>
            </NavAuthUl>
        </Nav>
    );
};

export default AuthNav;