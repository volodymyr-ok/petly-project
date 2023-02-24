import styled from "styled-components";
import {device} from "../../../../utils/mixin";
import {NavLink} from "react-router-dom";
import {colors} from "../../../../utils/colors";
export const Nav = styled.nav`
  display: none;

  ${device.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavAuthItem = styled(NavLink)`
  display: flex;
  color: ${props => props.color ? `${colors.white}` : `${colors.accentOrange}`};
  padding: 6px 28px;
  border-radius: 40px;
  font-size: 16px;
  text-decoration: none;
  background: ${props => props.color ? `${colors.accentOrange}` : ``};
  border: 2px solid ${colors.accentOrange};
  margin-right: 30px;

  &:nth-last-child(1) {
    margin-right: 0;
  }
}

&:hover,
&:focus {
    // color: ${colors.accentOrange};
  background: ${props => props.color ? `${colors.darkOrange}` : ``};
  border: 2px solid ${colors.darkOrange};
}

&:active {
  color: ${colors.darkOrange};
`;

