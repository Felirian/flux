import React from 'react';
import Image from "next/image";
import styled from "styled-components";


export const CardCol2 = ({slug, tags, price}) => {
  return (
    <div className={'Button'}>
      <Card>
        <Image
          src={`${process.env.NEXT_PUBLIC_DB_URL}/storage/v1/object/public/Images/items/${slug}/col_2_card_img.jpg`}
          alt={' '}
          width={228}
          height={135}
        />
        <Tags>
          {tags.map((el, i)=>(
            <p className={'caption'} key={`Caption_${i}`}>{el.node.tags.name}</p>
          ))}
        </Tags>
        <h3>{price}</h3>
      </Card>
    </div>

  );
};

const Card = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`

const Tags = styled.div`
      display: flex;
      align-items: center;
      gap: 10px;
  `