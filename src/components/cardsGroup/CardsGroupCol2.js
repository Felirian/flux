import React from 'react';
import GroupTitle from "@/components/GroupTitle";
import {H1, H2} from "@/style/TextTags";
import {useQuery} from "@apollo/client";
import {GET_ITEMS_IN_GROUP} from "@/supabase/services";
import styled from "styled-components";
import {CardCol2} from "@/components/gameCards/CardCol2";

const CardsGroupCol2 = ({title, filter}) => {
  const {data, error, loading} = useQuery(GET_ITEMS_IN_GROUP, {
    variables: {collection: filter}
  })

  //console.log(data?.collectionCollection.edges[0].node.accessoryCollection.edges);
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
            {data?.collectionCollection.edges[0].node.accessoryCollection.edges.map((el, i) => (
              <CardCol2
                key={i}
                name={el.node.items.name}
                slug={el.node.items.slug}
                tags={el.node.items.accessoryCollection.edges}
                price={el.node.items.price}
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

export default CardsGroupCol2;