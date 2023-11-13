import React from 'react';
import Head from "next/head";
import {getItems} from "@/supabase/services";

const Index = () => {
  let Items = getItems();

  console.log(Items);
  return (
    <>
      <Head>
        <title>FLUX</title>
      </Head>
      <h1>Main Page</h1>
      {Items.data != null ? (
        Items.data.map((el, i)=> (
          <div key={i}>
            <h1>{el.name}</h1>
            <p>{el.description}</p>
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
