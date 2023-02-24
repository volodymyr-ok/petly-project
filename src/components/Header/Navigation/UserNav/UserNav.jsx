import React from 'react';
import {NavUserItem} from "../Nav/Nav.styled";

const UserNav = () => {
    return (
        <nav>
            <NavUserItem to="./user">Account</NavUserItem>
        </nav>
    );
};

export default UserNav;