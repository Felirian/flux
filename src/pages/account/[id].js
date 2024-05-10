import React from 'react';
import {useRouter} from "next/router";
import {H1} from "@/style/TextTags";
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {accountAvatar,  GET_ACCOUNT, useSession} from "@/supabase/services";
import Head from "next/head";
import AccountHead from "@/components/account/AccountHead";

const Account = () => {
  const router = useRouter();
  const {id} = router.query;

  const { userMetaData, userError} = useSession()


  const {data, loading, error} = useQuery(GET_ACCOUNT, {
    variables: {slug: id}
  })

  return (
    <>
      <Head>
        <title>
          {userMetaData && !userError
            ? `FLUX | Account | @${userMetaData.slug}`
            : "FLUX | Account | ..."
          }
        </title>
      </Head>

      <AccountWrapper>
        {/*<GroupTitle>*/}
        {/*  <Title>Аккаунт</Title>*/}
        {/*</GroupTitle>*/}
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
            <AccountHead
              img={accountAvatar(data?.accountsCollection.edges[0].node.slug)}
              name={data.accountsCollection.edges[0].node.name}
              slug={data.accountsCollection.edges[0].node.slug}
              exp={data.accountsCollection.edges[0].node.experience}
            />
          </>

        )}


      </AccountWrapper>
    </>

  );
};

const AccountWrapper = styled.div`

`


export default Account;