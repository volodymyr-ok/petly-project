import React from "react";
import {
  BurgerBtn,
  BurgerImage,
  Container,
  LogoImage,
  LogoLink,
  NavBar,
} from "./Header.styled";
import logo from "../../assets/svg/logo.svg";
import burgerBtn from "../../assets/svg/burger-menu-btn.svg";

const Header = () => {
  return (
    <Container>
      <NavBar>
        <LogoLink>
          <LogoImage src={logo} alt="Petly logo" />
        </LogoLink>

        <BurgerBtn type="button">
          <BurgerImage src={burgerBtn} alt="burger button" />
        </BurgerBtn>
      </NavBar>
    </Container>
  );
};

export default Header;
