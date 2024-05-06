import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useSteamGameData} from "@/supabase/services";
import Head from "next/head";
import {H1} from "@/style/TextTags";

const Item = () => {
  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {

  }, []);


  const { data, loading, error } = useSteamGameData(id);
  console.log(data);

  return (
    <>
      <Head>
        <title>{!loading && !error && data ? `FLUX | ${data.name}` : 'FLUX | Loading...' }</title>
      </Head>

      <H1>fff</H1>

      {/*<button onClick={() => addItemInBasket(itemData?.id, 'c7b1d1e6-377f-4243-bd60-e731e811b122')}>ADD</button>*/}
    </>
  );
};

export default Item;