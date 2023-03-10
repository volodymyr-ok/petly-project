import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device, transition } from "../../../../utils/mixin";
import { colors } from "../../../../utils/colors";
import logo from "../../../../assets/svg/accoun-logo.svg";

export const NavMain = styled.nav`
  display: none;
  margin-right: auto;

  ${device.desktop} {
    display: flex;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  ${device.tablet} {
    gap: 60px;
  }

  ${device.desktop} {
    gap: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const NavAuthUl = styled.ul`
  display: flex;
  gap: 12px;
`;

export const BurgerContainer = styled.div`
  margin-top: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.tablet} {
    margin-top: 160px;
  }
`;

export const NavMobile = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 60px;

  ${device.tablet} {
    margin-top: 0;
  }

  ${device.desktop} {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  color: ${colors.black};
  font-size: 32px;
  text-decoration: none;
  margin-right: 0;
  transition: color ${transition}, text-decoration-line ${transition};

  ${device.tablet} {
    font-size: 48px;
  }

  ${device.desktop} {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: ${colors.accentOrange};
    text-decoration-line: underline;
  }

  &.active {
    color: ${colors.darkOrange};
    text-decoration-line: underline;
  }
`;

export const NavUserItem = styled(NavLink)`
  display: ${(props) => (props.type ? `none` : "flex")};
  color: ${colors.white};
  padding: 10px 37px;
  border-radius: 40px;
  font-size: 16px;
  text-decoration: none;
  background: ${colors.accentOrange};
  transition: background ${transition};

  ${device.tablet} {
    display: ${(props) => (props.type ? `flex` : "none")};
    margin-right: 14px;
    padding: 10px 28px;
  }

  ${device.desktop} {
    margin-right: 0;
  }

  ::before {
    content: ${(props) => (props.open ? `url(${logo})` : "")};
    margin-right: 15px;
    width: 23px;
    height: 23px;
  }

  :hover,
  :focus {
    background: ${colors.darkOrange};
  }

  &.active {
    // color: ${colors.darkOrange};
  }
`;

export const BurgerMenu = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${colors.white};
  transition: all 400ms var(--timing-function);
  transform: translate(0) scale (1);
  z-index: 3;

  &.is-hidden {
    transform: translate(50%, -60%);
    scale: 0;
    opacity: 0;
  }
`;

export const BurgerIcon = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 10;
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  ${device.desktop} {
    display: none;
  }

  & span {
    display: block;
    position: absolute;
    height: 3px;
    width: 30px;
    background: #000000;
    border-radius: 7px;
    opacity: 1;
    left: 5px;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    transform-origin: left center;
    transform: ${(props) => props.open && "rotate(45deg)"};
    top: ${(props) => (props.open ? "9px" : "10px")};
    left: ${(props) => props.open && "9px"};
  }

  & span:nth-child(3) {
    transform-origin: left center;
    transform: ${(props) => props.open && "rotate(-45deg)"};
    top: ${(props) => (props.open ? "30px" : "28px")};
    left: ${(props) => props.open && "9px"};
  }

  & span:nth-child(2) {
    top: 19px;
    transform-origin: left center;
    width: ${(props) => props.open && "0"};
    opacity: ${(props) => props.open && "0"};
  }
`;
