import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../../utils/mixin";
import {colors} from "../../../../utils/colors"

export const NavMain = styled.nav`
  display: none;
  
  ${device.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavMobile = styled.nav`
 
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${device.desktop} {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  display: block;
  width: 100%;
  margin-right: auto;
  cursor: pointer;
`;

export const BurgerMenu = styled.div`
  display: ${props => props.open ? "block" : "none"};
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  

  background: ${colors.white};

  transition: all 400ms var(--timing-function);
  transform: translate(0) scale (1);
  z-index: 1;

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
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;

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
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }


  & span:nth-child(1) {
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;

    -webkit-transform: ${props => props.open && "rotate(45deg)"} ;
    -moz-transform: ${props => props.open && "rotate(45deg)"};
    -o-transform: ${props => props.open && "rotate(45deg)"};
    transform: ${props => props.open && "rotate(45deg)"};
    top: ${props => props.open ? "9px" : "10px"};
    left: ${props => props.open && "9px"};
  }

  & span:nth-child(3) {
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    
    -webkit-transform: ${props => props.open && "rotate(-45deg)"} ;
    -moz-transform: ${props => props.open && "rotate(-45deg)"};
    -o-transform: ${props => props.open && "rotate(-45deg)"};
    transform: ${props => props.open && "rotate(-45deg)"};
    top: ${props => props.open ? "30px" : "28px"};
    left: ${props => props.open && "9px"};
  }

  & span:nth-child(2) {
    top: 19px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    width: ${props => props.open && "0"};
    opacity: ${props => props.open && "0"};
  }
`;
