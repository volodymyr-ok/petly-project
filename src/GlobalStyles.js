// @import "../node_modules/modern-normalize/modern-normalize.css";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Manrope", sans-serif;
  letter-spacing: 0.04em;
  background-color: #FDF7F2;
  color: #111111;
  margin: 0;
  padding: 0;
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

img {
  display: block;
  width: 100%;
  height: auto;
}

`;
