import React from 'react';
import Head from "next/head";
import {useQuery} from "@apollo/client";
import {GET_ITEMS, GetItems} from "@/supabase/services";
import {H2, T1, Title} from "@/style/styledComponents";
import Image from "next/image";

const Index = () => {
  const {data, error, loading} = useQuery(GET_ITEMS)
  const Items = GetItems()
  console.log('grph:\n');
  console.log(data?.itemsCollection.edges)
  console.log('promise:\n');
  console.log(Items.data);
  return (
    <>
      <Head>
        <title>FLUX</title>
      </Head>
      <Title>Main Page</Title>

      {Items.data != null ? (
        Items.data.map((el, i)=> (
          <div key={i}>
            <H2>{el.name}</H2>
            <T1>{el.price}</T1>
            <Image
              src={`${process.env.NEXT_PUBLIC_DB_URL}/storage/v1/object/public/Images/items/${el.slug}/col_2_card_img.jpg`}
              alt={' '}
              width={228}
              height={135}
            />
          </div>

        ))
      ) : Items.error ? (
        <>
          <H2>{Items.error.code}</H2>
          <T1>{Items.error.message}</T1>
        </>

      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Index;
