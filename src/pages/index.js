import React from 'react';
import Head from "next/head";
import {useQuery} from "@apollo/client";
import {GET_ITEMS, GetItems} from "@/supabase/services";
import {H2, H3, T1, Title} from "@/style/styledComponents";
import Image from "next/image";
import {CardCol2} from "@/components/card_col_2/CardCol2";

const Index = () => {
  const {data, error, loading} = useQuery(GET_ITEMS)
  console.log('grph:\n');
  console.log(data?.itemsCollection.edges)
  return (
    <>
      <Head>
        <title>FLUX</title>
      </Head>
      <Title>Main Page</Title>
      {loading ? (
        <H3>Loading...</H3>
      ) : error ? (
        <H3>{error}</H3>
      ) : (
        data.itemsCollection.edges.map((el, i) => (
          <CardCol2
            key={i}
            slug={el.node.slug}
            tags={el.node.accessoryCollection.edges}
            price={el.node.price}
          />
        ))
      )}
    </>
  );
};

export default Index;
