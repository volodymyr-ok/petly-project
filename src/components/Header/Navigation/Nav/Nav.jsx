import React, {useState} from 'react';
import {BurgerIcon, BurgerMenu, NavItem, NavMain, NavMobile, NavUl} from "./Nav.styled";
import Logo from "../../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";

const Nav = () => {
    const [checked, setChecked] = useState(false)
    const updateMenu = () => {
        setChecked(!checked)
    }

    const isAuth = false
    return (
        <>
            <NavMain>
                <NavUl>
                    <li>
                        <NavItem to="./news" onClick={updateMenu}>News</NavItem>
                    </li>
                    <li>
                        <NavItem to="./notices" onClick={updateMenu}>Find pet</NavItem>
                    </li>
                    <li>
                        <NavItem to="./friends" onClick={updateMenu}>Our friends</NavItem>
                    </li>
                </NavUl>
            </NavMain>
            <BurgerIcon onClick={updateMenu} open={checked}>
                <span></span>
                <span></span>
                <span></span>
            </BurgerIcon>

            <BurgerMenu open={checked}>
                <Logo/>
                {isAuth ? <UserNav/> : <AuthNav/>}
                <NavMobile>
                    <NavUl>
                        <li>
                            <NavItem to="./news" onClick={updateMenu}>News</NavItem>
                        </li>
                        <li>
                            <NavItem to="./notices" onClick={updateMenu}>Find pet</NavItem>
                        </li>
                        <li>
                            <NavItem to="./friends" onClick={updateMenu}>Our friends</NavItem>
                        </li>
                    </NavUl>
                </NavMobile>
            </BurgerMenu>
        </>
    );
};

export default Nav;