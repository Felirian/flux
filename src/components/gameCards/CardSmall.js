import React from 'react';
import {LiveBorders} from "@/components/LiveBorders";
import Link from "next/link";
import styled from "styled-components";
import CardDescription from "@/components/gameCards/CardDescription";

export const CardSmall = ({cardData, name, slug, steamId, discount, price}) => {
  return (
    <LiveBorders>
      <article title={name}>
        <Card href={`/item/${slug}`}>

          <ImgWr>
            <CardImg
              src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${steamId}/header.jpg`}
              alt={`item_${slug}`}
            />
          </ImgWr>

          <CardDescription
            discount={discount}
            price={price}
          />
        </Card>
      </article>

    </LiveBorders>
  );
};

const Card = styled(Link)`
  width: 226px;
  display: flex;
  flex-direction: column;
  margin: 1px;
  &:hover {
    img {
      opacity: 0.5;
    }
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
