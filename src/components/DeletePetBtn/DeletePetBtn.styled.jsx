import styled from "styled-components";
import { HiTrash } from "react-icons/hi2";
import { device, transition } from "../../utils/mixin";

export const DeleteBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  right: 0;
  width: 20px;
  height: 20px;
  border: none;
  background-color: #fdf7f2;
  cursor: pointer;
  border-radius: 50%;
  ${device.tablet} {
    width: 32px;
    height: 32px;
  }
  :hover,
  :focus {
    transform: scale(1.1);
    transition: transform ${transition};
  }
`;

export const DelIcon = styled(HiTrash)`
  width: 22px;
  height: 22px;
  fill: rgba(17, 17, 17, 0.6);
  ${device.tablet} {
    width: 24px;
    height: 24px;
  }
  :hover,
  :focus {
    fill: #f59256;
  }
`;
