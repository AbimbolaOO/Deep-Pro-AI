import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

import { fontFamily } from "./typography";
import media from "../media";

export const GlobalStyles = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
  ${media.phones`
  font-size: 13px;
  `}
  
}
*, *:before, *:after {
  box-sizing: inherit;
  list-style: none;
  text-decoration: none;
}
body {
  margin: 0;
  padding: 0;
  font-family: ${fontFamily.secondary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  background-color: ${(props) => props.theme.primaryColor};
}
`;
