import React, {useEffect} from 'react';
import Head from "next/head";
import {GET_ITEMS_IN_BASKET, useSession} from "@/supabase/services";
import {useQuery} from "@apollo/client";
import {H2, Title} from "@/style/TextTags";
import CardLarge from "@/components/gameCards/CardLarge";
import styled from "styled-components";
import GroupTitle from "@/components/GroupTitle";
import {useRouter} from "next/router";

const Basket = () => {
  const {userId, userMetaData, userError} = useSession()
  const router = useRouter()
  const {data, loading, error} = useQuery(GET_ITEMS_IN_BASKET, {
    variables: {userId: userId}
  })


  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>

      <GroupWrapper>
        <GroupTitle><Title>Корзина</Title></GroupTitle>
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

              {data.basketCollection.edges.map((el, i) => (
                <CardLarge
                  key={`game_user_${i}`}
                  name={el.node.items.name}
                  slug={el.node.items.slug}
                  steamId={el.node.items.steamId}
                  discount={el.node.items.discount}
                  price={el.node.items.price}
                  tags={el.node.items.items_tagsCollection.edges}
                  cardData={el}
                />
              ))}
            </>
          )}
        </CardsLine>
      </GroupWrapper>
    </>

  );
};

const GroupWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CardsLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export default Basket;