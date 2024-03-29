import React, {useContext, useState} from 'react';
import {Input} from "@/style/StyledComponents";
import {LiveBorders} from "@/components/LiveBorders";
import {AuthWrapper, ButtonChange, ButtonSubmit, ButtonsGroups} from "@/pages/account/auth";
import styled from "styled-components";
import supabase from "@/supabase/services";
import {authContext} from "@/shared/Context";
import {useRouter} from "next/router";
import {H1} from "@/style/TextTags";

export const LogIn = ({changeLogin}) => {
  const router = useRouter()
  const [auth, setAuth] = useContext(authContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      })

      if (signInError) {
        throw signInError
      }
      if (typeof window !== 'undefined') {
        router.push(`/account/felirian`);
      }

      setAuth(true)
    } catch (error) {
      console.error('Ошибка при входе', error.message);
    }

  };
  return (
    <AuthWrapper>

      <LoginForm
        onSubmit={handleSubmit}
        id={'LoginForm'}
      >
        <H1>ВХОД</H1>

        <LiveBorders width={'100%'}>
          <Input
            placeholder={' почта'}
            type={"email"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
          />
        </LiveBorders>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={' пароль'}
            type={"password"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
          />
        </LiveBorders>
      </LoginForm>

      <ButtonsGroups>

        <ButtonChange onClick={()=> changeLogin()}>
          <p className={'t3'}>ЗАРЕГИСТРИРОВАТЬСЯ</p>
        </ButtonChange>
        <ButtonSubmit type={'submit'} form={'LoginForm'}>
          <p className={'t3'}>ВОЙТИ</p>
        </ButtonSubmit>

      </ButtonsGroups>
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
