import React, {useState} from 'react';
import {BurgerContainer, BurgerIcon, BurgerMenu, NavItem, NavMain, NavMobile, NavUl} from "./Nav.styled";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../../../redux/auth/auth-selectors";

const Nav = () => {
    const [checked, setChecked] = useState(false)
    const updateMenu = () => {
        setChecked(!checked)
    }

    const isAuth = useSelector(selectIsAuth)
    return (
        <>
            <NavMain>
                <NavUl>
                    <li>
                        <NavItem to="./news">News</NavItem>
                    </li>
                    <li>
                        <NavItem to="./notices">Find pet</NavItem>
                    </li>
                    <li>
                        <NavItem to="./friends">Our friends</NavItem>
                    </li>
                </NavUl>
            </NavMain>
            <BurgerIcon onClick={updateMenu} open={checked}>
                <span></span>
                <span></span>
                <span></span>
            </BurgerIcon>

            <BurgerMenu open={checked}>
                <BurgerContainer>
                {isAuth ? <UserNav updateMenu={updateMenu}/> : <AuthNav updateMenu={updateMenu}/>}
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
                </BurgerContainer>
            </BurgerMenu>
        </>
    );
};

export default Nav;