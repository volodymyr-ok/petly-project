import styled from "styled-components";
import { device } from "../../../utils/mixin";

export const PawContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 25%;
  transform: rotate(90deg) translate(-50%, 0%);
  font-size: 20px;
  width: 1em;
  height: 2em;

  ${device.tablet} {
    top: 60%;

    height: 3em;
    font-size: 24px;
  }
  ${device.desktop} {
    top: 60%;
    right: 33%;
    height: 3em;
    font-size: 24px;
  }
  div {
    width: 1em;
    height: 2em;
    animation: 1500ms pawAnimation ease-in-out infinite;
    opacity: 0;

    ${device.tablet} {
      height: 3em;
    }
    img {
      width: 100%;
      height: 100%;
    }

    &:nth-child(odd) {
      transform: rotate(-10deg);
    }

    &:nth-child(even) {
      transform: rotate(10deg) translate(125%, 0);
    }

    :nth-child(1) {
      animation-delay: 0.5s;
    }

    :nth-child(2) {
      animation-delay: 0.4s;
    }

    :nth-child(3) {
      animation-delay: 0.3s;
    }

    :nth-child(4) {
      animation-delay: 0.2s;
    }

    :nth-child(5) {
      animation-delay: 0.1s;
    }

    :nth-child(6) {
      animation-delay: 0s;
    }
  }
  @keyframes pawAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
