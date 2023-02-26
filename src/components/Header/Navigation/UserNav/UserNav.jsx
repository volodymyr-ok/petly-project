import React from 'react';
import {NavUserItem} from "../Nav/Nav.styled";

const UserNav = ({type}) => {
    return (
        <nav>
            <NavUserItem to="./user" open type={type}>Account</NavUserItem>
        </nav>
    );
};

export default UserNav;