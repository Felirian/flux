import React, {useContext, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import {authContext} from "@/shared/Context";
import {H1, H4, T3, Title} from "@/style/TextTags";
import GroupTitle from "@/components/GroupTitle";
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {GET_ACCOUNT, logOut} from "@/supabase/services";
import {COLOR} from "@/style/variables";
import {LiveBorders} from "@/components/LiveBorders";

const Account = () => {
  const router = useRouter();
  const {id} = router.query;

  const [auth, setAuth] = useContext(authContext)
  const [userData, setUserData] = useState(null);

  const {data, loading, error} = useQuery(GET_ACCOUNT, {
    variables: {slug: id}
  })
  //--надо настроить вход

  //console.log(data?.accountsCollection.edges[0].node.slug);
  useEffect(() => {
    if (auth && typeof auth === 'function') {
      auth
        .then(loginUser => setUserData(loginUser))
        .catch(error => console.error('Ошибка:', error.message))
    }
  }, [auth]);

  return (
    <>
      <Head>
        <title>
          {data
            ? `Account | ${data.accountsCollection.edges[0].node.slug}`
            : "Account"
          }</title>
      </Head>

      <AccountWrapper>
        <GroupTitle>
          <Title>Аккаунт</Title>
        </GroupTitle>
        {loading ? (
          <>
            <H1>Loading...</H1>
          </>
        ) : error ? (
          <>
            <H1>Error</H1>
          </>
        ) : (
          <>
            <Left>
              <LiveBorders>
                <button onClick={()=> logOut()}>
                  <T3>ВЫЙТИ</T3>
                </button>
              </LiveBorders>
            </Left>
            <Right>
              <H1>{data.accountsCollection.edges[0].node.name}</H1>
              <H4 style={{color: COLOR.text[1]}}>@{data.accountsCollection.edges[0].node.slug}</H4>
            </Right>

          </>

        )}


      </AccountWrapper>
    </>

  );
};

const AccountWrapper = styled.div`

`
const Left = styled.div`

`
const Right = styled.div`

`

export default Account;