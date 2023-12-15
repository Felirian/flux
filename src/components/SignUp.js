import React, {useState} from 'react';
import {LiveBorders} from "@/components/LiveBorders/LiveBorders";
import styled from "styled-components";
import {Input} from "@/style/StyledComponents";
import {AuthWrapper} from "@/pages/auth";
import {color} from "@/style/variables";
import supabase from "@/supabase/services";

export const SignUp = () => {

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

    if (formData.password !== formData.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    try {
      let { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })
      if (error) {
        throw error;
      }

      console.log('Успешно добавлено в Supabase:', data);
    } catch (error) {
      console.error('Ошибка при добавлении в Supabase:', error.message);
    }

  };

  return (
    <AuthWrapper>
      <LoginForm
        onSubmit={handleSubmit}
        id={'SignUpForm'}
      >
        <h1>РЕГИСТРАЦИЯ</h1>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={'имя'}
            pattern="^[A-Za-zА-Яа-яЁё\s\D]+$"
            type={"text"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
          />
        </LiveBorders>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={'почта'}
            type={"email"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
          />
        </LiveBorders>
        <h1>БЕЗОПАСНОСТЬ</h1>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={'пароль'}
            type={"password"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
          />
        </LiveBorders>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={'повторите пароль'}
            type={"password"}
            name={"confirmPassword"}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </LiveBorders>
      </LoginForm>
      <ButtonsGroups>

        <ButtonChange>
          <p className={'t3'}>ВОЙТИ</p>
        </ButtonChange>
        <ButtonSubmit type={'submit'} form={'SignUpForm'}>
          <p className={'t3'}>ЗАРЕГЕСТРИРОВАТЬСЯ</p>
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
const ButtonsGroups = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    p {
        color: ${color.text[2]};
    }
`
const ButtonChange = styled.button `
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    background-color: ${color.accent.pink};
    
`

const ButtonSubmit = styled.button `
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    background-color: ${color.accent.green};
`