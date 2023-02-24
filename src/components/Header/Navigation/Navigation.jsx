import React from 'react';
import Nav from "./Nav/Nav";
import UserNav from "./UserNav/UserNav";
import AuthNav from "./AuthNav/AuthNav";


const Navigation = () => {
    const isAuth = false

    return (
        <>
            <Nav/>
            {isAuth ? <UserNav/> : <AuthNav/>}
        </>
    );
};

export default Navigation;