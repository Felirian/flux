import React from 'react';
import Head from "next/head";
import GroupCollectionSmallCards from "@/components/cardsGroup/GroupCollectionSmallCards";
import SearchWidget from "@/widgets/index/SearchWidget";

const Index = () => {


  return (
    <>
      <Head>
        <title>FLUX | Магазин</title>
      </Head>

      <GroupCollectionSmallCards title={'Лидеры продаж'} filter={3}/>
      <GroupCollectionSmallCards title={'Лидеры продаж'} filter={3}/>
      <GroupCollectionSmallCards title={'Лидеры продаж'} filter={3}/>
      <GroupCollectionSmallCards title={'Лидеры продаж'} filter={3}/>
      <SearchWidget/>
    </>
  );
};

export default Index;
