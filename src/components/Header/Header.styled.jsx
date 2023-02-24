import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/mixin";

export const Container = styled.div`
  padding: 16px 25px 16px 20px;
  display: flex;
  /* position: fixed;
  width: 100%;
  z-index: 1; */
`;

export const BurgerBtn = styled.button`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  padding: 0;

  ${device.desktop} {
    display: none;
  }
`;

export const BurgerImage = styled.img`
  width: 100%;
  height: 100%;
`;
