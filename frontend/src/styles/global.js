import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #16D0DB;
  }

  ::-webkit-scrollbar {
     width: 2px
  }

  ::-webkit-scrollbar-thumb {
    background-color: lightgrey;
    border-radius: 3px;
  }

  body, input, textarea, button {
    font: 14px sans-serif;
  }
` 