import styled from "styled-components";
import { device } from "../../utils/mixin";

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 16px;

    ${device.tablet} {
      font-size: 24px;
    }
  }
`;
export const Image = styled.img`
  width: 250px;
  height: 70px;

  ${device.tablet} {
    width: 350px;
    height: 100px;
  }
`;
