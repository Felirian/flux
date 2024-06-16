import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_ITEMS_SEARCH} from "@/supabase/services";
import {H1, H2, H3, Title} from "@/style/TextTags";
import styled from "styled-components";
import CardLarge from "@/components/gameCards/CardLarge";
import GroupTitle from "@/components/GroupTitle";
import NameSearch from "@/widgets/index/Search/NameSearch";
import {LiveBorders} from "@/components/LiveBorders";
import {Button} from "@mui/material";

const SearchWidget = () => {
  const [globalSearch, setGlobalSearch] = useState('')
  const [filters, setFilters] = useState([])
  const {data, error, loading} = useQuery(GET_ITEMS_SEARCH, {
    variables: {name: globalSearch}
  })

  const touchFilter = (id) => {
    if (filters.includes(id)) {
      setFilters(filters.filter(filterId => filterId !== id));
    } else {
      setFilters([...filters, id]);
    }
  }


  return (
    <SearchWrapper id={'search'}>
      <GroupTitle><Title>Поиск</Title></GroupTitle>

      <NameSearch setGlobalSearch={setGlobalSearch}/>

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
        <>
          <H1>Категории: </H1>
          <SearchResultWrapper>

            {data?.tagsCollection.edges.map((tag, idex) => (
              <button onClick={() => touchFilter(tag.node.id)} key={`tags_result_${idex}`}>
                <H3>{tag.node.name}</H3>
              </button>

            ))}
          </SearchResultWrapper>
          <br/>
          <SearchResultWrapper>
            {data?.itemsCollection.edges.filter(item =>
              filters.every(filterId =>
                item.node.items_tagsCollection.edges.some(edge => edge.node.tags.id === filterId)
              )
            )
              .map((item, index) => (
              <CardLarge
                key={`search_result_${index}`}
                slug={item.node.slug}
                name={item.node.name}
                steamId={item.node.steamId}
                tags={item.node.items_tagsCollection.edges}
                discount={item.node.discount}
                price={item.node.price}
                itemData={item}
              />
            ))}
          </SearchResultWrapper>
        </>

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

export default SearchWidget;