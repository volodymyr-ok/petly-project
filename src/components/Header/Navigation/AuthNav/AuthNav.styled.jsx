import styled from "styled-components";
import {device} from "../../../../utils/mixin";
import {NavLink} from "react-router-dom";
import {colors} from "../../../../utils/colors";
export const Nav = styled.nav`
  display: none;

  ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavAuthItem = styled(NavLink)`
  display: flex;
  color: ${props => props.color ? `${colors.white}` : `${colors.black}`};
  padding: 6px 28px;
  border-radius: 40px;
  font-size: 14px;
  text-decoration: none;
  background: ${props => props.color ? `${colors.accentOrange}` : ``};
  border: 2px solid ${colors.accentOrange};
  margin-right: 30px;
  
  ${device.tablet} {
    font-size: 20px;
  }

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

