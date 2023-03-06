import styled from "styled-components";
import { device, transition } from "../../utils/mixin";

export const Button = styled.button`
  padding: 8px 0;
  width: 100%;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;
  color: #ffffff;
  background-color: #f59256;
  border: 2px solid #f59256;
  border-radius: 40px;
  transition: color ${transition}, background-color ${transition};
  :hover,
  :focus {
    color: #f59256;
    background-color: #fff;
  }
  ${device.tablet} {
    width: 180px;
  }
`;
