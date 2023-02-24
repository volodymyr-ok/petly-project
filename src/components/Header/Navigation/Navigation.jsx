import React from 'react';
import Nav from "./Nav/Nav";
import UserNav from "./UserNav/UserNav";
import AuthNav from "./AuthNav/AuthNav";


const Navigation = () => {
    return (
        <>
            <Nav/>
            <UserNav/>
            <AuthNav/>
        </>
    );
};

export default Navigation;