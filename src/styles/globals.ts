import { createGlobalStyle } from "styled-components";
import { device } from "./media";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Montserrat", -apple-system, "sans-serif";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
}
  html{
    height:100vh;
  }

  body{
    height:auto;
    min-height: 100%;
    margin: 0 ;
  }
   #__next{
    height:auto;
    min-height: 100vh;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }
`;
