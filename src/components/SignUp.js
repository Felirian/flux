import React, {useState} from 'react';
import {LiveBorders} from "@/components/LiveBorders/LiveBorders";
import styled from "styled-components";
import {Input} from "@/style/StyledComponents";
import {AuthWrapper, ButtonChange, ButtonsGroups, ButtonSubmit} from "@/pages/auth";
import supabase from "@/supabase/services";

export const SignUp = ({changeLogin}) => {

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

    const { data: existingUsers, error: existingUsersError } = await supabase
      .from('users')
      .select('id')
      .eq('email', formData.email);

    if (existingUsers) {
      console.log(existingUsers);
    }

    try {
      // Регистрация нового пользователя
      let { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
          },
        },
      })

      if (authError) {
        throw authError;
      }

      console.log('Пользователь добавлен', authData);
    } catch (error) {
      console.error('Ошибка при добавлении', error.message);
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
            placeholder={' имя'}
            pattern="^[A-Za-zА-Яа-яЁё\s\D]+$"
            type={"text"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
          />
        </LiveBorders>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={' почта'}
            type={"email"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
          />
        </LiveBorders>
        <h1>БЕЗОПАСНОСТЬ</h1>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={' пароль'}
            type={"password"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
          />
        </LiveBorders>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={' повторите пароль'}
            type={"password"}
            name={"confirmPassword"}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </LiveBorders>
      </LoginForm>

      <ButtonsGroups>
        <ButtonChange onClick={()=>changeLogin()}>
          <p className={'t3'}>ВОЙТИ</p>
        </ButtonChange>
        <ButtonSubmit type={'submit'} form={'SignUpForm'}>
          <p className={'t3'}>ЗАРЕГИСТРИРОВАТЬСЯ</p>
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
