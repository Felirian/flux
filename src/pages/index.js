import React from 'react';
import Head from "next/head";
import GroupCollectionSmallCards from "@/components/cardsGroup/GroupCollectionSmallCards";
import SearchWidget from "@/widgets/index/SearchWidget";
import GroupTagsSmallCards from "@/components/cardsGroup/GroupTagsSmallCards";
import GroupCollectionLargeCards from "@/components/cardsGroup/GroupCollectionLargeCards";
import styled from "styled-components";
import {H1, Title} from "@/style/TextTags";
import GroupTitle from "@/components/GroupTitle";

const Index = () => {


  return (
    <MainWr>
      <Head>
        <title>FLUX | Магазин</title>
      </Head>

      <GroupTitle><H1>Лидеры продаж</H1></GroupTitle>
      <GroupCollectionLargeCards title={'Лидеры продаж'} filter={3}/>

      <GroupTitle><H1 id={'sale'}>Скидки</H1></GroupTitle>
      <GroupCollectionSmallCards title={'Скидки'} filter={1}/>

      <GroupTitle><Title id={'category'}>Категории</Title></GroupTitle>
      <H1>Инди игры</H1>
      <GroupTagsSmallCards title={'Инди игры'} filter={4}/>
      <H1>Экшн</H1>
      <GroupTagsSmallCards title={'Инди игры'} filter={1}/>
      <SearchWidget/>

    </MainWr>
  );
};

const MainWr = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 40px;
  ${H1} {
    margin-bottom: 20px;
  }
`

export default Index;
