import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {xMousePos, yMousePos} from "@/components/Context";

export const LiveBorders = ({children}) => {
  const [rect, setRect] = useState()
  const [xPos, setXMos] = useContext(xMousePos);
  const yPos = useContext(yMousePos);
  const ref =useRef();

  useEffect(() => {
    setRect(ref.current.getBoundingClientRect().x)
    console.log(rect);
    console.log(xPos);
  }, []);

  const LiveBorder = styled.div `
    border-image: radial-gradient(120px circle at var(${xPos - rect}) var(--mouse-y), $color-bg-3, transparent 40%);
    border-image-width: 1px;
    border-image-slice: 9;

    background: radial-gradient(100vh circle at var(--mouse-x) var(--mouse-y), rgba(50,50,50, var(--opacity)), transparent 40%);

    transition: --opacity 0.5s;
    &:hover {
        --opacity: 100%;
        
        transition: --opacity 0.5s;
    }
`

  return (
    <LiveBorder ref={ref}>
      {children}
    </LiveBorder>
  );
};


