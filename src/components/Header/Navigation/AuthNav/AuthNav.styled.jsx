import styled from "styled-components";
import {device, transition} from "../../../../utils/mixin";
import { NavLink } from "react-router-dom";
import { colors } from "../../../../utils/colors";
export const Nav = styled.nav`
  display: ${(props) => (props.type ? `none` : "flex")};

  ${device.tablet} {
    display: ${(props) => (props.type ? `flex` : "none")};
    margin-right: 14px;
  }
  ${device.desktop} {
    display: flex;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const NavAuthUl = styled.ul`
  display: flex;
  gap: 12px;
`;

export const NavAuthItem = styled(NavLink)`
  color: ${(props) => (props.color ? `${colors.white}` : `${colors.black}`)};
  padding: 6px 28px;
  border-radius: 40px;
  font-size: 14px;
  text-decoration: none;
  background: ${(props) => (props.color ? `${colors.accentOrange}` : ``)};
  border: 2px solid ${colors.accentOrange};
  margin-right: 12px;
  transition: border ${transition}, background ${transition};

  ${device.tablet} {
    font-size: 20px;
  }

  ${device.desktop} {
    margin-right: 20px;
  }

  &:nth-last-child(1) {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    background: ${(props) => (props.color ? `${colors.darkOrange}` : ``)};
    border: 2px solid ${colors.darkOrange};
  }

  &.active {
    background: ${(props) => (props.color ? `${colors.darkOrange}` : ``)};
    border: 2px solid ${colors.darkOrange};
  }
`;
