import styled, { createGlobalStyle } from 'styled-components'
import {
  primaryColor,
  primaryDarkColor,
  errorColor,
  succesColor,
} from '../config/colors'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${primaryDarkColor};
  color: ${primaryDarkColor};
}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background: ${primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;

  &:hover {
    filter: brightness(120%)
  }
}

a {
  text-decoration: none;
  color: ${primaryColor};
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${succesColor};
  color: white;
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${errorColor};
  color: white;
}

body .Toastify .Toastify__toast-container .Toastify__progress-bar {
  background: white;
}

:root {
  --toastify-icon-color-info: white;
  --toastify-icon-color-success: white;
  --toastify-icon-color-warning: white;
  --toastify-icon-color-error: white;
}


`

export const Container = styled.main`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
