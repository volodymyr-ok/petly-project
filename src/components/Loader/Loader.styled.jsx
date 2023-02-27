import styled from "styled-components";
// import { colors } from "../../utils/colors";

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(7px);
  z-index: 1200;
  display: ${(props) => (props.disable === true ? "flex" : "none")};

  & > div {
    top: 43%;
  }
`;
export const LoaderBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 37px 0 0 -25px;
  width: 50px;
  height: 50px;

  &:after {
    content: "";
    background-image: url(https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png);
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    position: absolute;
    margin: -6px;
    width: inherit;
    height: inherit;
    animation: nfLoader-spin 1.1s linear infinite, 1 !important;
    -webkit-animation: nfLoader-spin 1.1s linear infinite, 1 !important;
  }

  @keyframes nfLoader-spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
