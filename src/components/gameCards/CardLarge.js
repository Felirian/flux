import React from 'react';
import styled from "styled-components";
import {LiveBorders} from "@/components/LiveBorders";
import Link from "next/link";
import CardDescription from "@/components/gameCards/CardDescription";
import {BREAKPOINTS} from "@/style/variables";

const CardLarge = ({name, slug, steamId, tags, price, discount}) => {
  return (
    <LiveBorders>
      <CardWrapper href={`/item/${slug}`}>
        <ImgWr>
          <CardImg
            src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamId}/library_600x900.jpg`}
            alt={`${slug}_image`}
          />
        </ImgWr>

        <CardDescription
          name={name}
          tags={tags}
          discount={discount}
          price={price}
        />
      </CardWrapper>
    </LiveBorders>
  );
};

const CardWrapper = styled(Link)`
  width: 344px;
  display: flex;
  flex-direction: column;
  margin: 1px;
  &:hover {
    img {
      opacity: 0.5;
    }
  }
  @media ${BREAKPOINTS.laptop} {
    width: 45.83vw;
  }
  @media ${BREAKPOINTS.mobile} {
    width: 95.83vw;
  }
`
const ImgWr = styled.div`
  width: 100%;
`
const CardImg = styled.img`
  width: 100%;
  height: 100%; //461 
  transition: 0.5s;
  object-fit: cover;
`


export default CardLarge;