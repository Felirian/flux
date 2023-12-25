import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {GET_ITEM} from "@/supabase/services";

const Item = () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, loading, error} = useQuery(GET_ITEM, {
    variables: {slug: id}
  })
  let itemData
  if (data && !error) {
    itemData = data?.itemsCollection.edges[0].node
  }

  console.log(itemData?.accessoryCollection.edges);

  return (
    <div>
      {
        loading ? (
          <h1>loading...</h1>
        ) : error ? (
          <>
            <h1>error(</h1>
            <h1>error(</h1>
          </>
        ) : (
          <>
            <h1>data</h1>
            <h2>{itemData.name}</h2>
            {itemData.accessoryCollection.edges.map((el,i)=> {
              <p className={'t3'}>{el.node.tags.name}</p>
            })}
          </>
        )
      }
    </div>
  );
};

export default Item;