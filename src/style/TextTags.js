import styled from "styled-components";
import {BREAKPOINTS} from "@/style/variables";

export const Title = styled.h1`
  font-family: 'Jost', sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px; /* 123.81% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 5vw;
    line-height: 6.19vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 10vw; 
    line-height: 10.83vw;
  }
`
export const H1 = styled.h2`
  font-family: 'Jost', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 3.81vw;
    line-height: 4.76vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 6.67vw;
    line-height: 8.33vw;
  }
`
export const H2 = styled.h3`
  font-family: 'Jost', sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 123.077% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 3.10vw;
    line-height: 3.81vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 5.42vw;
    line-height: 6.67vw;
  }
`
export const H3 = styled.h4`
  font-family: 'Jost', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px; /* 110% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 2.38vw;
    line-height: 2.62vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 4.17vw;
    line-height: 4.58vw;
  }
`
export const H4 = styled.h5`
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: 18px; /* 112.5% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.90vw;
    line-height: 2.14vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 3.33vw;
    line-height: 3.75vw;
  }
`
export const T1 = styled.h6`
  font-family: 'Jost', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 2.86vw;
    line-height: 3.57vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 5vw;
    line-height: 6.25vw;
  }
`
export const T2 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 2.38vw;
    line-height: 2.86vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 4.17vw;
    line-height: 5vw;
  }
`
export const T3 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.67vw;
    line-height: 1.90vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 2.92vw;
    line-height: 3.33vw;
  }
`
export const T4 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 114.286% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.43vw;
    line-height: 1.43vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 2.50vw;
    line-height: 2.50vw;
  }
`
export const Caption = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px; /* 120% */
  @media ${BREAKPOINTS.laptop} {
    font-size: 1.19vw;
    line-height: 1.43vw;
  }
  @media ${BREAKPOINTS.mobile} {
    font-size: 2.08vw;
    line-height: 2.50vw;
  }
`