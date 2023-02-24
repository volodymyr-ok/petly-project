import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1200;
`;

export const Content = styled.div`
  min-width: 380px;
  min-height: 194px;
  padding: 20px;
  background-color: ${colors.white};
  color: ${colors.black};

  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
`;
