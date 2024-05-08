import React from 'react';
import Head from "next/head";
import CardsGroupCol2 from "@/components/cardsGroup/CardsGroupCol2";
import SearchWidget from "@/widgets/index/SearchWidget";

const Index = () => {


  return (
    <>
      <Head>
        <title>FLUX | Магазин</title>
      </Head>

      <CardsGroupCol2 title={'Лидеры продаж'} filter={1}/>
      <SearchWidget/>
    </>
  );
};

export default Index;
