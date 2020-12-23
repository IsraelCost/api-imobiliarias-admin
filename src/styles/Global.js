import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --font-family: 'Poppins', sans-serif;
    --white: #FFF;
    --gray: #768299;
    --input-bg: #f3f6f9;
    --btn-login-bg: #6993ff;
    --tab-item-active-color: #17c191;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;

    ::-webkit-scrollbar {
    width: 1.2rem;
  }

  ::-webkit-scrollbar-thumb {
    width: 1.2rem;
    border-radius: 15px;
    background: var(--gray);
  }
  }

  html,
  body,
  input,
  textarea,
  select,
  button {
    font-family: var(--font-family);
    border: none;
    outline: none;
  }

  @media(min-width: 1530px) {
    html {
      font-size: 67%;
    }
  }


  @media(min-width: 1920px) {
    html {
      font-size: 72%;
    }
  }

  @media(max-width: 418px) {
    html {
      font-size: 55%;
    }
  }
`;
