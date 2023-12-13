import React from 'react';
import Head from "next/head";
import {useQuery} from "@apollo/client";
import {GET_ITEMS} from "@/supabase/services";
import {CardCol2} from "@/components/card_col_2/CardCol2";

const Index = () => {
  const {data, error, loading} = useQuery(GET_ITEMS)

  return (
    <>
      <Head>
        <title>FLUX</title>
      </Head>
      <div className={'title'}>Main Page</div>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>{error}</h3>
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
