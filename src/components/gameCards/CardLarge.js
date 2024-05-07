import React from 'react';
import styled from "styled-components";
import {LiveBorders} from "@/components/LiveBorders";
import Link from "next/link";
import CardDescription from "@/components/gameCards/CardDescription";

const CardLarge = ({itemData}) => {
  return (
    <LiveBorders>
      <CardWrapper href={`/item/${itemData.node.slug}`}>
        <ImgWr>
          <CardImg
            src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${itemData.node.steamId}/library_600x900.jpg`}
            alt={`${itemData.node.slug}_image`}
          />
        </ImgWr>

        <CardDescription
          name={itemData.node.name}
          tags={itemData.node.items_tagsCollection.edges}
          discount={itemData.node.discount}
          price={itemData.node.price}
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