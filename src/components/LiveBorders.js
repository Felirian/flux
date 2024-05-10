import React, { useEffect, useRef, useState} from 'react';
import {BREAKPOINTS, COLOR} from "@/style/variables";
import {useCursorContext} from "@/pages/_app";
import styled from "styled-components";
export const LiveBorders = ({children, width, height, color}) => {

  const ref = useRef(null)
  const mosPos = useCursorContext()
  const [gradPos, setGradPos] = useState({x: 0, y: 0})
  const [opacity, setOpacity] = useState(0)


  useEffect(() => {
    //console.log(mosPos);
    const wrapperRect = ref.current.getBoundingClientRect();
    const x = mosPos.cursorPosition.x - wrapperRect.left;
    const y = mosPos.cursorPosition.y - wrapperRect.top;
    setGradPos({x, y});
  }, [mosPos]);

  const gradientStyle = {
    width: width ? width : 'fit-content',
    height: height ? height : 'fit-content',

    borderImageSource: `radial-gradient(circle at ${gradPos.x}px ${gradPos.y}px, ${color? color : COLOR.text[0]}, transparent  100px)`,
    borderImageWidth: '1px',
    borderImageSlice: '9',

    background: `radial-gradient(circle at ${gradPos.x}px ${gradPos.y}px, rgba(50,50,50, ${opacity}), transparent  100%)`,
    transition: '0.5s ease',
    overflow: 'hidden',

  };
  return (
    <LiveBordersWr
      style={gradientStyle}
      ref={ref}
      onMouseEnter={() => (setOpacity(1))}
      onMouseLeave={() => (setOpacity(0))}
    >

      {children}
    </LiveBordersWr>
  );
};

const LiveBordersWr = styled.div`
  @media ${BREAKPOINTS.mobile} {
    background: none !important;
    border-image-source: none !important;
  }
    
`
