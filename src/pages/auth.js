import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {LogIn} from "@/components/LogIn";
import {SignUp} from "@/components/SignUp";
import {color} from "@/style/variables";
import Head from "next/head";
import {checkUserName} from "@/supabase/services";
import {authContext} from "@/components/Context";

const Auth = () => {
  const [login, setLogin] = useState(true)
  const [auth, setAuth] = useContext(authContext)
  const [username, setUsername] = useState(null);
  const changeLogin = () => {
    setLogin(!login)
  }

  useEffect(() => {
    if (auth) {
      checkUserName()
        .then(result => setUsername(result.toString()))
        .catch(error => console.error('Ошибка:', error.message));
    }
  }, [auth]);

  return (
    <>
      <Head>
        <title>{username !== null ? username : 'Flux account'}</title>
      </Head>
      <AuthPage>
        {login ? <LogIn changeLogin={changeLogin}/> : <SignUp changeLogin={changeLogin}/>}
      </AuthPage>
    </>
  );
};

export const ButtonsGroups = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    p {
        color: ${color.text[2]};
    }
`
export const ButtonChange = styled.button `
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    background-color: ${color.accent.pink};    
`
export const ButtonSubmit = styled.button `
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    background-color: ${color.accent.green};
`
const AuthPage = styled.div`
    background: radial-gradient(51.07% 65.98% at 51.07% 3.75%, rgba(152, 152, 152, 0.20) 0%, rgba(140, 140, 140, 0.00) 100%), #0D0D0D;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AuthWrapper = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex: 1 0 0;

    max-width: 300px;
`

export default Auth;
