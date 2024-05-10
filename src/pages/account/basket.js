import React from 'react';
import Head from "next/head";
import {useSession} from "@/supabase/services";

const Basket = () => {

  const {userId, userMetaData, userError} = useSession()

  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>

      <div>
        <h1>error</h1>
      </div>
    </>

  );
};

export default Basket;