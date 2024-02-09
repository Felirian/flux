import React from 'react';
import Head from "next/head";
import {H2} from "@/style/TextTags";

const Verification = () => {

  return (
    <>
      <Head>
        <title>Flux - verification</title>
      </Head>
      <div>
        <H2>Вам на почту отправлено письмо со ссылкой для подтверждения аккаунта</H2>
      </div>
    </>

  );
};

export default Verification;