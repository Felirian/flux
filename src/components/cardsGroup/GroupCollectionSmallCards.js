import React from 'react';
import GroupTitle from "@/components/GroupTitle";
import {H1, H2} from "@/style/TextTags";
import {useQuery} from "@apollo/client";
import {GET_ITEMS_IN_COLLECTION} from "@/supabase/services";
import styled from "styled-components";
import {CardSmall} from "@/components/gameCards/CardSmall";

const GroupCollectionSmallCards = ({title, filter}) => {
  const {
    data,
    error,
    loading
  } = useQuery(GET_ITEMS_IN_COLLECTION, {
    variables: {collection: filter}
  })

  console.log(data?.items_collectionCollection.edges);
  return (
    <GroupWrapper>
      <GroupTitle><H1>{title}</H1></GroupTitle>
      <CardsLine>
        {loading ? (
          <>
            <H2>Loading</H2>
          </>
        ) : error ? (
          <>
            <H2>Error</H2>
          </>
        ) : (
          <>
            {data.items_collectionCollection.edges.map((el, i) => (
              <CardSmall
                key={`game_${filter}_${i}`}
                name={el.node.items.name}
                slug={el.node.items.slug}
                steamId={el.node.items.steamId}
                discount={el.node.items.discount}
                price={el.node.items.price}
                cardData={el}
              />
            ))}
          </>
        )}
      </CardsLine>
    </GroupWrapper>
  );
};

const GroupWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CardsLine = styled.div`
  display: flex;
  gap: 8px;
`

export default GroupCollectionSmallCards;