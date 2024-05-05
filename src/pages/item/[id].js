import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {addItemInBasket, GET_ITEM, getSteamGameData, useSteamGameData} from "@/supabase/services";
import Head from "next/head";
import {H1, T1} from "@/style/TextTags";
import ItemHead from "@/components/itemPage/ItemHead";


const Item = () => {
  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {

  }, []);


  const { data, loading, error } = useSteamGameData(id);
  console.log(data, error, loading, id);

  return (
    <>
      <Head>
        {/*<title>{itemData !== null ? `FLUX | ${itemData.name}` : 'FLUX | Loading...' }</title>*/}
      </Head>



      {/*{*/}
      {/*  loading ? (*/}
      {/*    <H1>loading...</H1>*/}
      {/*  ) : error ? (*/}
      {/*    <>*/}
      {/*      <H1>error ;-(</H1>*/}
      {/*    </>*/}
      {/*  ) : (*/}
      {/*    <>*/}
      {/*      <ItemHead*/}
      {/*        name={itemData?.name}*/}
      {/*        tags={itemData?.items_tagsCollection.edges}*/}
      {/*        info={itemData?.info}*/}
      {/*        slug={itemData?.slug}*/}
      {/*        id={itemData?.id}*/}
      {/*      />*/}


      {/*      /!*<H1>{itemData?.name}</H1>*!/*/}
      {/*      /!*{itemData?.items_tagsCollection.edges.map((el,i)=> (*!/*/}
      {/*      /!*  <T1 key={`game_tag_${i}`}>{el.node.tags?.name}</T1>*!/*/}
      {/*      /!*))}*!/*/}
      {/*    </>*/}
      {/*  )*/}
      {/*}*/}
      {/*<button onClick={() => addItemInBasket(itemData?.id, 'c7b1d1e6-377f-4243-bd60-e731e811b122')}>ADD</button>*/}
    </>
  );
};

export default Item;