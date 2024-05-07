import React from 'react';
import {useRouter} from "next/router";
import {GET_ITEM} from "@/supabase/services";
import Head from "next/head";
import {H1} from "@/style/TextTags";
import {useQuery} from "@apollo/client";
import styled from "styled-components";
import {COLOR} from "@/style/variables";
import Markdown from "react-markdown";
import GroupTitle from "@/components/GroupTitle";

const Item = () => {
  const router = useRouter();
  const {id} = router.query;

  const {data, loading, error} = useQuery(GET_ITEM, {
    variables: {slug: id}
  })



  return (
    <>
      <Head>
        <title>
          {
            loading ? 'FLUX | Loading...'
              : error ? 'FLUX | Error'
                : `FLUX | ${data?.itemsCollection.edges[0].node.name}`
          }
        </title>
      </Head>
      {
        loading ? (
          <H1>loading...</H1>
        ) : error ? (
          <>
            <H1>error ;-(</H1>
          </>
        ) : (
          <ItemWrapper>
            <Wallpaper>
              {data?.itemsCollection.edges[0].node.video !== null ? (
                <VideoBg
                  src={ data?.itemsCollection.edges[0].node.video}
                  typeof={'video/mp4'}
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                />
              ) : (
                <H1>image</H1>
              )}
            </Wallpaper>

            <GameDescription>

              <GameDescriptionWrapper>
                <GroupTitle><H1>Характеристики</H1></GroupTitle>
                <GameInfo>
                  {data?.itemsCollection.edges[0].node.pc_characteristics}
                </GameInfo>

                <GroupTitle><H1>Об игре</H1></GroupTitle>
                <GameInfo>
                  {data?.itemsCollection.edges[0].node.info}
                </GameInfo>
              </GameDescriptionWrapper>

              <GameTitle>
                <LogoImg
                  src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${data?.itemsCollection.edges[0].node.steamId}/logo.png`}
                  alt={`logo_${data?.itemsCollection.edges[0].node.name}`}
                />
              </GameTitle>
            </GameDescription>

          </ItemWrapper>
        )
      }
      {/*<button onClick={() => addItemInBasket(itemData?.id, 'c7b1d1e6-377f-4243-bd60-e731e811b122')}>ADD</button>*/}
    </>
  );
};

const ItemWrapper = styled.div`
  width: 100%;
  position: relative;
`

const Wallpaper = styled.div`
  width: 100%;
  //background-color: red;
    //background-image: linear-gradient(0deg, ${
    COLOR.bg[0]
  } 0%, rgba(255,255,255,0) 50%);

`
const VideoBg = styled.video`
  width: 100%;
  height: auto;
  box-sizing: content-box;
`
const GameDescription = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`

const GameTitle = styled.div`
  position: sticky;
  width: 100%;
  height: 400px;
  top: 0;
  left: 0;
  
  display: flex;
  flex-direction: column;
  align-items: end;
`

const LogoImg = styled.img`
  width: 100%;
  height: auto;
  
  max-width: 400px;
  max-height: 400px;
`
const GameDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 600px;
  //height: 400vw;
  
`

const GameInfo = styled(Markdown)`
  display: flex;
  flex-direction: column;
  
  gap: 20px;
  
  width: 100%;
  
  h1, h2 {
    font-family: 'Jost', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    margin-top: 20px;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
  img {
    width: 600px;
    height: auto;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    //background-color: gray;
    
    li {
      font-family: 'Jost', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 200;
      line-height: 18px;
      margin-left: 30px;
      &::marker {        
        font-size: 10px;
        color: ${COLOR.text[1]};
      }
      &:nth-child(even) {
        p{
          color: ${COLOR.text[1]};
        }
        
      }
      &:nth-child(odd) {
        text-align: left;
      }
    }
    
    
  }
`

export default Item;