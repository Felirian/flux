import React from 'react';
import Head from "next/head";
import {useQuery} from "@apollo/client";
import {GET_ITEMS, GetItems} from "@/supabase/services";


const Index = () => {
  const {data, error, loading} = useQuery(GET_ITEMS)
  const Items = GetItems()
  console.log('grph:\n');
  console.log(data)
  console.log('promise:\n');
  console.log(Items.data);
  return (
    <>
      <Head>
        <title>FLUX</title>
      </Head>
      <h1>Main Page</h1>

      {Items.data != null ? (
        Items.data.map((el, i)=> (
          <div key={i}>
            <h2>{el.name}</h2>

            <p>{el.price}</p>
          </div>

        ))
      ) : Items.error ? (
        <>
          <h2>{Items.error.code}</h2>
          <p>{Items.error.message}</p>
        </>

      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Index;
