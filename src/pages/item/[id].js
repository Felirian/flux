import React from 'react';
import {useRouter} from "next/router";
import {GET_ITEM} from "@/supabase/services";
import Head from "next/head";
import {H1} from "@/style/TextTags";
import {useQuery} from "@apollo/client";

const Item = () => {
  const router = useRouter();
  const {id} = router.query;

  const {data, loading, error} = useQuery(GET_ITEM, {
    variables: {slug: id}
  })

  console.log(data?.itemsCollection);


  return (
    <>
      <Head>
        <title>
          {
            loading ? 'FLUX | Loading...'
              : error ? 'FLUX | Error'
                :  `FLUX | ${data?.itemsCollection.edges[0].node.name}`
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
          <>

          </>
        )
      }
      {/*<button onClick={() => addItemInBasket(itemData?.id, 'c7b1d1e6-377f-4243-bd60-e731e811b122')}>ADD</button>*/}
    </>
  );
};

export default Item;