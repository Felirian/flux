import React from 'react';
import Head from "next/head";
import CardsGroupCol2 from "@/components/cardsGroup/CardsGroupCol2";
import Search from "@/widgets/index/Search";

const Index = () => {


  return (
    <>
      <Head>
        <title>FLUX | Магазин</title>
      </Head>

      {/*<CardsGroupCol2 title={'Лидеры продаж'} filter={1}/>*/}
      <Search/>
    </>
  );
};

export default Index;
