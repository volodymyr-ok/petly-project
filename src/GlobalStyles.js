import { createGlobalStyle } from "styled-components";
import { device } from "./utils/mixin";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* html {
  
} */

body {
  font-family: "Manrope", sans-serif;
  letter-spacing: 0.04em;
  background-color: #FDF7F2;
  color: #111111;
  margin: 0;
  padding: 0;
  min-width: 320px;

   /* min-height: 601px;

  ${device.tablet} {
  min-height: 1193px;
  }

  ${device.desktop} {
  min-height: 768px;
  } */

  &.no-scroll {
  overflow: hidden !important;
}
 
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  list-style: none;
}

img {
  display: block;
  width: 100%;
}



input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid rgba(245, 146, 86, 0.5);
    -webkit-text-fill-color: #52555f;
    transition: background-color 5000s ease-in-out 0s;
  }

`;
