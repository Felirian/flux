import React from 'react';
import {Caption, H2, T1, T2, T3} from "@/style/TextTags";
import styled from "styled-components";
import {COLOR} from "@/style/variables";

const CardDescription = ({name, tags, discount, price}) => {
  return (
    <ItemDesc>
      <Left>
        <TagsWr>
          {tags && tags.map((tag, index) => (
            <Caption key={`${name}_tag_${index}`}>{tag.node.tags.name}</Caption>
          ))}
        </TagsWr>
        <H2>{name}</H2>
      </Left>
      <Right>
        {discount ? (
          <>
            <T3
              style={{color: COLOR.text[1], textDecoration: 'line-through'}}
            >{discount} ₽</T3>
            <T2 style={{color: COLOR.accent.green}}>{price} ₽</T2>
          </>
        ) : (
          <T2>{price} ₽</T2>
        )}

      </Right>

    </ItemDesc>
  );
};

const ItemDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 5px 10px;
  width: 100%;
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  ${H2} {
    
  }
`
const TagsWr =styled.div`
  display: flex;
  gap: 5px;
  ${Caption} {
    color: ${COLOR.text[1]};
  }
  
`

const Right = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;  
`

export default CardDescription;