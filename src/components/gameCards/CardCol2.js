import React from 'react';
import Image from "next/image";
import {LiveBorders} from "@/components/LiveBorders";
import Link from "next/link";
import {Caption, H3, T1} from "@/style/TextTags";
import {COLOR} from "@/style/variables";
import styled from "styled-components";

export const CardCol2 = ({name, slug, tags, price}) => {
  //console.log(tags);
  return (
    <LiveBorders>
      <CardWrapper title={name}>
        <Card href={`/item/${slug}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_DB_URL}/storage/v1/object/public/Images/items/${slug}/col_2_card_img.jpg`}
            alt={`item_${slug}`}
            width={228}
            height={135}
            style={{zIndex: 0}}
          />
          {tags &&
            <Tags>
              {tags.map((el, i) => (
                <Caption key={`Caption_${i}`}>{el.node.tags?.name}</Caption>
              ))}
            </Tags>
          }
          <H3>{price}</H3>
        </Card>
      </CardWrapper>

    </LiveBorders>
  );
};
const CardWrapper = styled.article`
  
`
const Card = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: fit-content;
  overflow: hidden;
  img{
    transition: 0.5s;
  }
  &:hover {
    img{
      opacity: 0.5;
    }
  }
`
const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`