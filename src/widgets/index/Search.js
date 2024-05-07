import React, {useState} from 'react';
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_ITEMS_SEARCH, GET_NAMES_SEARCH} from "@/supabase/services";
import {H1, H2, H3} from "@/style/TextTags";
import styled from "styled-components";
import CardLarge from "@/components/gameCards/CardLarge";
import {Input} from "@/style/StyledComponents";

const Search = () => {
  const [inputSearch, setInputSearch] = useState(null)
  const {data, error, loading} = useQuery(GET_ITEMS_SEARCH, {
    //variables:
  })

  const [searchGames, { loading: textLoad, error: textError, data: dataError }] = useLazyQuery(GET_NAMES_SEARCH);

  const handleSearch = () => {
    searchGames({ variables: { query: inputSearch } });
  };

  return (
    <SearchWrapper>
      <br/><br/>
      <Input
        type="text"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder="Поиск игр..."
      />
      <button onClick={handleSearch}>Искать</button>
      <br/><br/>
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