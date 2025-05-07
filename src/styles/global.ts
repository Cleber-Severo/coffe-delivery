import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  :focus {
    outline: 0;
    box-shadow: 0 0 02px ${(props) => props.theme['yellow-dark']}
  }

  body {
    background: ${(props) => props.theme['backgorund']};
    color: ${(props) => props.theme['base-label']};
    -webkit-font-smoothing: antialiased;

  font-family: "Roboto", sans-serif;  }

  body, input, textArea, button {
    font-weight: 400;
    font-size: 1rem;
  }

`;
