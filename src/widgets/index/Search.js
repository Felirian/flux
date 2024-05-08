import React, {useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_ITEMS_SEARCH, GET_NAMES_SEARCH} from "@/supabase/services";
import {H1, H2, H3, T1, T2, T4, Title} from "@/style/TextTags";
import styled from "styled-components";
import CardLarge from "@/components/gameCards/CardLarge";
import {Input} from "@/style/StyledComponents";
import GroupTitle from "@/components/GroupTitle";
import Link from "next/link";
import {LiveBorders} from "@/components/LiveBorders";

const Search = () => {

  const {data, error, loading} = useQuery(GET_ITEMS_SEARCH, {
    //variables:
  })

  const [inputSearch, setInputSearch] = useState('')
  const { loading: textLoad, error: textError, data: dataText } = useQuery(GET_NAMES_SEARCH, {
    variables: {name: inputSearch === '' ? null : inputSearch}
  });

  const onChangeSearch = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 2) {
      setInputSearch(inputValue);
    } else {
      setInputSearch('');
    }
  }

  console.log(dataText?.itemsCollection.edges);

  return (
    <SearchWrapper>
      <GroupTitle><Title>Поиск</Title></GroupTitle>
      <Input
        type="text"
        //value={inputSearch}
        onChange={onChangeSearch}
        placeholder="Поиск игр..."
      />
      <TextSearchWrapper>
        <TextSearchResults>
          {!textLoad && !textError && inputSearch.length > 2 && dataText?.itemsCollection.edges.length === 0 ? (
            <T1 >Ничего не найдено</T1>
          ) : dataText?.itemsCollection.edges.length > 0 && (
            <>
              {dataText?.itemsCollection.edges.map((result, index) => (
                <LiveBorders key={`search_result_${index}`} width={'100%'}>
                  <Result  href={`/item/${result.node.slug}`}>
                    <T1 >{result.node.name}</T1>
                  </Result>
                </LiveBorders>

              ))}

            </>
          )}
        </TextSearchResults>
      </TextSearchWrapper>


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

const TextSearchWrapper = styled.div`
  width: 100%;
  height: 40px;
  
  position: relative;
`

const TextSearchResults = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  
  display: flex;
  flex-direction: column;
  
  //gap: 10px;
  
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  
  z-index: 99;  
`

const Result = styled(Link)`
  padding: 10px;
  display: flex;
`

const SearchResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;  
`

export default Search;