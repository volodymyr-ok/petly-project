import React from "react";
import {Container} from "./Header.styled";

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

const Header = () => {
    return (
        <Container>
            <Logo/>
            <Navigation/>
        </Container>
    );
};

export default Header;
