import { createClient, } from '@supabase/supabase-js'
import {useEffect, useState} from "react";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {gql} from "@apollo/client";

const supabase_key = process.env.NEXT_PUBLIC_DB_SERVICE_KEY
const supabase_url = process.env.NEXT_PUBLIC_DB_URL
const token = 'ezjvhnxqqokpnobxycpd'
const supabase = createClient(supabase_url, supabase_key);

export const client = new ApolloClient({
  uri: supabase_url + '/graphql/v1',

  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    apikey: supabase_key
  },
  cache: new InMemoryCache(),
  ssrMode: false,
})
export const GET_USER = async () => {
  const { data, error } = await supabase.auth.getSession()
  return data;
}

export const checkSession = async () => {
  try {
    const { data:session, error: sessionError } = await supabase.auth.getSession()

    if (sessionError) {
      throw sessionError;
    }

    if (session) {
      // Пользователь аутентифицирован, session содержит информацию о сессии
      //console.log('Текущая сессия:', session);
    } else {
      // Пользователь не аутентифицирован
      //console.log('Пользователь не аутентифицирован');
    }
  } catch (error) {
    //console.error('Ошибка при проверке сессии:', error.message);
  }
};

export const checkUserName = async () => {
  let result
  try {
    const { data:session, error: sessionError } = await supabase.auth.getSession()

    if (sessionError) {
      throw sessionError;
    }

    if (session) {
      // Пользователь аутентифицирован, session содержит информацию о сессии
      result = String(session.session.user.user_metadata.name.toString())
    } else {
      // Пользователь не аутентифицирован
      console.log('Пользователь не аутентифицирован');
    }
  } catch (error) {
    console.error('Ошибка ', error.message);
  }
  return result
};

export const FIND_USER = gql`
query ($slug: String) {  
  accountsCollection (filter: {
    slug: { eq: $slug }
  }) {
    edges {
      node {
        slug
      }
    }
  }
}
`

export const GET_ITEMS = gql`
query {
  itemsCollection {
    edges {
      node {
        name
        slug
        price
        accessoryCollection {
          edges {
            node {
              tags {
                name
              }
            }
          }
        }
      }
    }
  }
}
`;
export default supabase


