import React from 'react';
import {useRouter} from "next/router";
import {GET_ITEM} from "@/supabase/services";
import Head from "next/head";
import {H1} from "@/style/TextTags";
import {useQuery} from "@apollo/client";
import styled from "styled-components";
import {BREAKPOINTS} from "@/style/variables";
import GameDescription from "@/widgets/itemPage/GameDescription";

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
            <VideoWr>
              <VideoBg
                src={ data?.itemsCollection.edges[0].node.video}
                typeof={'video/mp4'}
                controls={false}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
              />
            </VideoWr>

            <GameDescription
              gameData={data?.itemsCollection.edges[0].node}
            />

          </ItemWrapper>
        )
      }
      {/*<button onClick={() => addItemInBasket(itemData?.id, 'c7b1d1e6-377f-4243-bd60-e731e811b122')}>ADD</button>*/}
    </>
  );
};

const ItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  flex-direction: column;
`

const VideoWr = styled.div`
  width: 100%;
  height: 800px;

  position: sticky;
  top: 0;
  left: 0;
  &:after {
    content: '';
    display: block;
    position: absolute;
    background: linear-gradient(90deg, #0D0D0D 5%, rgba(255, 255, 255, 0) 50%, #0D0D0D 95%);
    width: 100%;
    height: 800px;
    top: 0;
    left: 0;
    z-index: 3;
  }
  @media ${BREAKPOINTS.laptop} {
    width: 100%;
    height: auto;
  }
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
    
`

const Fade = styled.div`
  
`

export default Item;