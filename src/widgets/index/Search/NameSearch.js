import React, {useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_NAMES_SEARCH} from "@/supabase/services";
import {Input} from "@/style/StyledComponents";
import {T1} from "@/style/TextTags";
import {LiveBorders} from "@/components/LiveBorders";
import styled from "styled-components";
import Link from "next/link";

const NameSearch = () => {

  const [inputSearch, setInputSearch] = useState('')
  const {loading: textLoad, error: textError, data: dataText} = useQuery(GET_NAMES_SEARCH, {
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

  return (
    <>
      <Input
        type="text"
        onChange={onChangeSearch}
        placeholder="Поиск игр..."
      />

      <TextSearchWrapper>
        <TextSearchResults>
          {!textLoad && !textError && inputSearch.length > 2 && dataText?.itemsCollection.edges.length === 0 ? (
            <T1>Ничего не найдено</T1>
          ) : dataText?.itemsCollection.edges.length > 0 && (
            <>
              {dataText?.itemsCollection.edges.map((result, index) => (
                <LiveBorders key={`search_result_${index}`} width={'100%'}>
                  <Result href={`/item/${result.node.slug}`}>
                    <T1>{result.node.name}</T1>
                  </Result>
                </LiveBorders>
              ))}
            </>
          )}
        </TextSearchResults>
      </TextSearchWrapper>

    </>
  );
};

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

export default NameSearch;