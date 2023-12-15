import React from 'react';
import {Input} from "@/style/StyledComponents";
import {LiveBorders} from "@/components/LiveBorders/LiveBorders";
import {AuthWrapper} from "@/pages/auth";
import styled from "styled-components";

export const LogIn = () => {



  return (
    <AuthWrapper>
      <LoginForm

      >
        <h1>ВХОД</h1>
        <LiveBorders width={'inherit'}>
          <Input/>
        </LiveBorders>
        <LiveBorders width={'inherit'}>
          <Input/>
        </LiveBorders>
      </LoginForm>

    </AuthWrapper>
  );
};
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
`
const ButtonsGroups = styled.div`
    display: flex;
`
