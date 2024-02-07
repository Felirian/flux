import React, {useContext, useEffect, useRef, useState} from 'react';
import {COLOR} from "@/style/variables";
import {useCursorContext} from "@/pages/_app";
export const LiveBorders = ({children, width, height}) => {

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

    borderImageSource: `radial-gradient(circle at ${gradPos.x}px ${gradPos.y}px, ${COLOR.text[0]}, transparent  50%)`,
    borderImageWidth: '1px',
    borderImageSlice: '9',

    background: `radial-gradient(circle at ${gradPos.x}px ${gradPos.y}px, rgba(50,50,50, ${opacity}), transparent  100%)`,
    transition: '0.5s ease',
  };
  return (
    <div
      style={gradientStyle}
      ref={ref}
      onMouseEnter={() => (setOpacity(1))}
      onMouseLeave={() => (setOpacity(0))}
    >

      {children}
    </div>
  );
};
