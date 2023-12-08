import styled from "styled-components";
import {Jost} from '@/style/globals'
import {color} from "@/style/variables";

export const Title = styled.h1 `
    ${Jost};
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: 52px; /* 123.81% */
`

export const H1 = styled.h1 `
    ${Jost};    
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 125% */
`

export const H2 = styled.h1 `
    ${Jost};
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 123.077% */
`

export const H3 = styled.h1 `
    ${Jost};
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px; /* 110% */
`
export const H4 = styled.h1 `
    ${Jost};
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: 18px; /* 112.5% */
`
export const T1 = styled.h1 `
    ${Jost};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
`
export const T2 = styled.h1 `
    ${Jost};
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
`

export const T3 = styled.h1 `
    ${Jost};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
`
export const Caption = styled.h1 `
    ${Jost};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 114.286% */
`
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