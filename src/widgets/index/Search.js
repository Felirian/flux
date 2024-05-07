import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ITEMS_SEARCH} from "@/supabase/services";
import {H1, H2, H3} from "@/style/TextTags";
import styled from "styled-components";
import CardLarge from "@/components/gameCards/CardLarge";

const Search = () => {

  const {data, error, loading} = useQuery(GET_ITEMS_SEARCH, {
    //variables:
  })

  return (
    <SearchWrapper>
      {loading ? (
        <>
          <H2>Loading..</H2>
        </>
      ) : error ? (
        <>
          <H1>Ошибка</H1>
          <H3>Перезагрузите страницу</H3>
        </>
      ) : (
        <SearchResultWrapper>
          {data?.itemsCollection.edges.map((item, index) => (
            <CardLarge
              key={`search_result_${index}`}
              itemData={item}
            />
          ))}
        </SearchResultWrapper>
      )}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 6px;
`

const SearchResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  
`

export default Search;