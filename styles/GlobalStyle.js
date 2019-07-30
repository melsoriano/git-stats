import { createGlobalStyle } from "styled-components";
import theme from "./theme";
const { colors } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: ${colors.orange};
    color: ${colors.white};
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'DM Sans';
    color: ${colors.darkGrey};
    background-color: ${colors.offWhite};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    transition: ${theme.transition};
    color: ${colors.orange};
    display: inline-block;
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
    transition: ${theme.transition};
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
`;

export default GlobalStyle;
