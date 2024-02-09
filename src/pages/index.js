import React from 'react';
import Head from "next/head";
import {useQuery} from "@apollo/client";
import {GET_ITEMS} from "@/supabase/services";
import {CardCol2} from "@/components/CardCol2";
import {H3, Title} from "@/style/TextTags";

const Index = () => {
  const {data, error, loading} = useQuery(GET_ITEMS)

  return (
    <>
      <Head>
        <title>FLUX | Магазин</title>
      </Head>
      <Title>Main Page</Title>
      {loading ? (
        <H3>Loading...</H3>
      ) : error ? (
        <H3>error</H3>
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
