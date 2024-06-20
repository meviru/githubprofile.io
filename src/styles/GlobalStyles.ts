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
    outline: none;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
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
}`