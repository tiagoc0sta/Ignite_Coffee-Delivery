import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({theme }) => theme.colors["base-background"]};
    color: ${({theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: subpixel-antialiased;
  }

  body, input, textarea, button {
    
  }

`;