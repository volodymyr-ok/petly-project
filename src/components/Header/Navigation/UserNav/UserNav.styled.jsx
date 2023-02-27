import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {colors} from "../../../../utils/colors";
import {device} from "../../../../utils/mixin";
import logo from "../../../../assets/svg/accoun-logo.svg";

export const NavUserItem = styled(NavLink)`
  display: ${(props) => (props.type ? `none` : "flex")};
  color: ${colors.white};
  padding: 10px 37px;
  border-radius: 40px;
  font-size: 16px;
  text-decoration: none;
  background: ${colors.accentOrange};

  ${device.tablet} {
    display: ${(props) => (props.type ? `flex` : "none")};
    margin-right: 14px;
    padding: 10px 28px;
  }

  ${device.desktop} {
    margin-right: 0;
  }

  &::before {
    content: ${(props) => (props.open ? `url(${logo})` : "")};
    margin-right: 15px;
    width: 23px;
    height: 23px;
  }

  &:hover,
  &:focus {
    background: ${colors.darkOrange};
  }

  &.active {
    background: ${colors.darkOrange};
  }
`;

