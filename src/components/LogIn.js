import React, {useState} from 'react';
import {Input} from "@/style/StyledComponents";
import {LiveBorders} from "@/components/LiveBorders/LiveBorders";
import {AuthWrapper, ButtonChange, ButtonSubmit, ButtonsGroups} from "@/pages/auth";
import styled from "styled-components";
import supabase from "@/supabase/services";

export const LogIn = ({changeLogin}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  };
  return (
    <AuthWrapper>

      <LoginForm>
        <h1>ВХОД</h1>

        <LiveBorders width={'100%'}>
          <Input
            placeholder={'почта'}
            type={"email"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
          />
        </LiveBorders>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={'пароль'}
            type={"password"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
          />
        </LiveBorders>
      </LoginForm>

      <ButtonsGroups>

        <ButtonChange onClick={()=> changeLogin()}>
          <p className={'t3'}>ЗАРЕГЕСТРИРОВАТЬСЯ</p>
        </ButtonChange>
        <ButtonSubmit type={'submit'} form={'SignUpForm'}>
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
