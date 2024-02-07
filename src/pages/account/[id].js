import React, {useContext, useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import {authContext} from "@/shared/Context";
import {checkUserName} from "@/supabase/services";

const Account = () => {
  const router = useRouter();
  const {id} = router.query;

  const [auth, setAuth] = useContext(authContext)
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (auth) {
      auth
        .then(loginUser => setUserData(loginUser))
        .catch(error => console.error('Ошибка:', error.message))

      // checkUserName()
      //   .then(result => setUserData(result))
      //   .catch(error => console.error('Ошибка:', error.message));
    } else {

    }
    console.log(userData);
  }, [auth]);


  return (
    <>
      <Head>
        <title>{userData ? userData.name : "Account"}</title>
      </Head>

      <div>
        <h1>Account</h1>
      </div>
    </>

  );
};

export default Account;