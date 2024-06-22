import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    border: none;
    max-width: 100%;
}

html,
body {
    font-family: "Be Vietnam Pro", sans-serif;
    height: 100%;
    font-size: 16px;
    background-color: #20293A;
}

input,
textarea,
button,
select {
    border: none;
    outline: none;
    font-family: inherit;
    font-weight: 500;
    font-size: 16px;
}


::placeholder {
    color: #4A5567;
}

::-webkit-input-placeholder {
    color: #4A5567;
}

::-moz-placeholder {
    color: #4A5567;
}

:-ms-input-placeholder {
    color: #4A5567;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #282B30;
  border-radius: 5px;
}
 
::-webkit-scrollbar-thumb {
  background: #6C727F; 
  border-radius: 5px;
}

.Toastify__toast-container {
    width: 375px;
    max-width: 100%;
}

.Toastify__toast {
    font-family: "DM Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
}`