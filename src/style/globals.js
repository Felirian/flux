import styled, {createGlobalStyle, css} from "styled-components";
import {color} from "@/style/variables";


export const Jost = css`    
    font-family: "Jost", sans-serif;
    //color: red;
`;
export const OpenSans = css`    
    font-family: "OpenSans", sans-serif;
    //color: red;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;      
    //border: 1px pink solid;
  }

  html, body {
    background-color: ${color.bg[0]};
    height: 100%;
  }

  #__next {
    display: flex;
      transition: 0.5s ease;
    @include xSmall {
      flex-direction: column;
    }
  }
    
  main {
    width: 100%;
    background-color: ${color.bg[0]};
  }

  p,
  a,
  br,
  span,
  img,
  div,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea {
    color: ${color.text[0]};
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;

    &:focus {

    }

    &:disabled {

    }
  }

  //----- Text Tags ------\\\\
  a {
    text-decoration: none;
  }

  h1 {
  @include Jost;
    font-size: 38px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; /* 45.6px */
  }
`

