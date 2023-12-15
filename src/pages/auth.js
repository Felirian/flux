import React, {useContext, useState} from 'react';
import styled from "styled-components";
import {LogIn} from "@/components/LogIn";
import {SignUp} from "@/components/SignUp";

const Auth = () => {
  const [login, setLogin] = useState(true)

  return (
    <AuthPage>
      {!login ? <LogIn/> : <SignUp/>}
    </AuthPage>
  );
};

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
