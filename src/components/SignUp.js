import React, {useState} from 'react';
import {LiveBorders} from "@/components/LiveBorders";
import styled from "styled-components";
import {Input} from "@/style/StyledComponents";
import {AuthWrapper, ButtonChange, ButtonsGroups, ButtonSubmit} from "@/pages/account/auth";
import supabase from "@/supabase/services";
import {useRouter} from "next/router";
import {H1} from "@/style/TextTags";

export const SignUp = ({changeLogin}) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // const findUser = () => {
  //   const {data, loading, error} = useQuery(FIND_USER, {
  //     variables: {slug: formData.slug}
  //   })
  //   if (data) {
  //     return data
  //   } else {
  //     return error
  //   }
  //
  // }
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // if (findUser) {
    //   console.log(formData.slug)
    //   console.log(findUser)
    // }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data: existingUsers, error: existingUsersError} = await supabase
      .from('users')
      .select('id')
      .eq('email', formData.email);

    if (formData.password !== formData.confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }
    // if (existingUsers?.length !== 0) {
    //   alert('пользователь существует');
    //   return;
    // }
    try {
      // Регистрация нового пользователя
      let {data: authData, error: authError} = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            slug: formData.slug,
          },
        },
      })
      if (authError) {
        throw authError;
      }
      if (typeof window !== 'undefined') {
        router.push('/terms/verification');
      }
    } catch (error) {
      alert('Ошибка при добавлении', error.message);
    }
  };

  return (
    <AuthWrapper>
      <LoginForm
        onSubmit={handleSubmit}
        id={'SignUpForm'}
      >
        <H1>РЕГИСТРАЦИЯ</H1>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={' имя'}
            pattern="^[A-Za-zА-Яа-яЁё\s\D]+$"
            type={"text"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
            required={true}
          />
        </LiveBorders>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={' уникальное имя пользователя'}
            pattern="^[a-z\s\D]+$"
            type={"text"}
            name={"slug"}
            value={formData.slug}
            onChange={handleChange}
            required={true}
          />
        </LiveBorders>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={' почта'}
            type={"email"}
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            required={true}
          />
        </LiveBorders>
        <H1>БЕЗОПАСНОСТЬ</H1>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={' пароль'}
            type={"password"}
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            required={true}
          />
        </LiveBorders>
        <LiveBorders width={'100%'}>
          <Input
            placeholder={' повторите пароль'}
            type={"password"}
            name={"confirmPassword"}
            value={formData.confirmPassword}
            onChange={handleChange}
            required={true}
          />
        </LiveBorders>
      </LoginForm>

      <ButtonsGroups>
        <ButtonChange onClick={() => changeLogin()}>
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
