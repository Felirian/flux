import React, {useContext, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import {authContext} from "@/shared/Context";
import {H1, H4, T3, Title} from "@/style/TextTags";
import GroupTitle from "@/components/GroupTitle";
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {accountAvatar, checkSession, GET_ACCOUNT, logOut} from "@/supabase/services";
import {COLOR} from "@/style/variables";
import {LiveBorders} from "@/components/LiveBorders";
import Image from "next/image";

const Account = () => {
  const router = useRouter();
  const {id} = router.query;

  const [auth, setAuth] = useContext(authContext)
  const [userData, setUserData] = useState(null);

  const {data, loading, error} = useQuery(GET_ACCOUNT, {
    variables: {slug: id}
  })

  console.log(accountAvatar('felirian'))

  useEffect(() => {
    if (auth) {
      checkSession()
        .then(loginUser => setUserData(loginUser))
        .catch(error => console.error('Ошибка:', error.message))
    }
  }, [auth]);

  return (
    <>
      <Head>
        <title>
          {data
            ? `Flux | Account | @${data.accountsCollection.edges[0].node.slug}`
            : "Flux | Account | Loading..."
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
              <H4 style={{color: COLOR.text[1]}}>
                @{data.accountsCollection.edges[0].node.slug}
              </H4>
            </Right>

            <Avatar
              src={accountAvatar(data?.accountsCollection.edges[0].node.slug)}
              alt={'avatar'}
            />
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

const Avatar = styled.img`
  width: 228px;
  height: 228px;
`

export default Account;