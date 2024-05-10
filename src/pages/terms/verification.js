import React from 'react';
import Head from "next/head";
import {H2} from "@/style/TextTags";
import TermWrapper from "@/widgets/TermWrapper";

const Verification = () => {

  return (
    <>
      <Head>
        <title>FLUX | Verification</title>
      </Head>
      <TermWrapper>
        <H2>Вам на почту отправлено письмо со ссылкой для подтверждения аккаунта</H2>
      </TermWrapper>
    </>

  );
};

export default Verification;