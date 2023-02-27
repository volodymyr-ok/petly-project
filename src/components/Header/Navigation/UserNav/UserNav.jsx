import React from 'react';
import {NavUserItem} from "../Nav/Nav.styled";

const UserNav = ({type, updateMenu}) => {
    return (
        <nav>
            <NavUserItem to="./user" open type={type} onClick={updateMenu}>Account</NavUserItem>
        </nav>
    );
};

export default UserNav;