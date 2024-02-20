import React, {useState} from 'react';
import {H3} from "@/style/TextTags";
import styled from "styled-components";
import Image from "next/image";

const ImageLoad = ({img, size, alt}) => {
  const [load, setLoad] = useState(false)

  const SIZES= {
    fullPage: {width: 1173, height: 660},
    coll6: {width: 700, height: 394},
    coll3: {width: 345, height: 461},
    coll2: {width: 228, height: 135},
  }
  //console.log(SIZES[size]);
  return (
    <ImageWrapper size={SIZES[size]}>

      {load ? (
        <>
          <H3>Loading...</H3>
        </>
      ) : (
        <Img src={img} alt={alt} width={SIZES[size].width} height={SIZES[size].height}/>
      )}

    </ImageWrapper>
  );
};
const ImageWrapper = styled.div`
  
`
const Img = styled(Image)`
  
`

export default ImageLoad;