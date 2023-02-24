import React, {useState} from 'react';
import {BurgerIcon, BurgerMenu, NavItem, NavMain, NavMobile} from "./Nav.styled";
import Logo from "../../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";

const Nav = () => {
    const [checked, setChecked] = useState(false)
    const updateMenu = () => {
        setChecked(!checked)
    }
    return (
        <>
            <NavMain>
                <NavItem to="./news">News</NavItem>
                <NavItem to="./notices">Find pet</NavItem>
                <NavItem to="./friends">Our friends</NavItem>
            </NavMain>
            {/*<BurgerIcon onClick={updateMenu} open={checked}>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*    <span></span>*/}
            {/*</BurgerIcon>*/}
            {/*<BurgerMenu open={checked}>*/}
            {/*    <Logo/>*/}
            {/*    <NavMobile>*/}
            {/*        <NavItem to="./news">News</NavItem>*/}
            {/*        <NavItem to="./notices">Find pet</NavItem>*/}
            {/*        <NavItem to="./friends">Our friends</NavItem>*/}
            {/*    </NavMobile>*/}
            {/*    <UserNav/>*/}
            {/*    <AuthNav/>*/}
            {/*</BurgerMenu>*/}
        </>
    );
};

export default Nav;