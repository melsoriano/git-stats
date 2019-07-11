import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'DM Sans';
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  svg {
    fill: currentColor;
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline: 0;
    }
  }
  input {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  h1,h2,h3 {
    margin: .5rem;
  }
`;

export default GlobalStyle;
