import React from 'react';
import Head from "next/head";
import {useQuery} from "@apollo/client";
import {GET_ITEMS} from "@/supabase/services";
import {CardCol2} from "@/components/gameCards/CardCol2";
import {H3, Title} from "@/style/TextTags";
import CardsGroupCol2 from "@/components/cardsGroup/CardsGroupCol2";

const Index = () => {


  return (
    <>
      <Head>
        <title>FLUX | Магазин</title>
      </Head>

      <CardsGroupCol2 title={'Лидеры продаж'} filter={1}/>

    </>
  );
};

export default Index;
