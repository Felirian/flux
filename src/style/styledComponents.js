import styled from "styled-components";
import {color} from "@/style/variables";



export const LiveBorder = styled.div `
  @property --opacity {
    syntax: '<percentage>';
    initial-value: 0%;
    inherits: false;
  }

  .Button {
    //position: relative;
    border-image: radial-gradient(120px circle at var(--mouse-x) var(--mouse-y), ${color.text[2]}, transparent 40%);
    border-image-width: 1px;
    border-image-slice: 9;

    background: radial-gradient(100vh circle at var(--mouse-x) var(--mouse-y), rgba(50,50,50, var(--opacity)), transparent 40%);

    transition: --opacity 0.5s;
    &:hover {
      --opacity: 100%;
      transition: --opacity 0.5s;
    }
  }
`