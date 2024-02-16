import React from 'react';
import styled from "styled-components";
import {Caption, T3, T4, Title} from "@/style/TextTags";
import {FlexRow8px} from "@/style/Containers";
import {itemMainImg} from "@/supabase/services";
import ImageLoad from "@/components/ImageLoad";
import {COLOR} from "@/style/variables";

const ItemHead = ({name, tags, info, id, slug}) => {
  return (
    <ItemHeadWrapper>



      <GameInfo>
        <Title>{name}</Title>
        {tags &&
          <FlexRow8px>
            {tags.map((el, i) => (
              <T4 key={`Caption_${i}`}>{el.node.tags?.name}</T4>
            ))}
          </FlexRow8px>
        }
        <T3>{info}</T3>
      </GameInfo>
    </ItemHeadWrapper>
  );
};

const ItemHeadWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
`

const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: end;
  text-align: end;
  justify-content: center;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(0,0,0,0) 0%, #0D0D0D 30%);
  
  ${T3} {
    max-width: 346px;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  //z-index: 0;
`

export default ItemHead;