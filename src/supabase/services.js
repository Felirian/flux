import { createClient, } from '@supabase/supabase-js';
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

export const checkSession = async () => {
  let loginUser = null
  try {
    const { data:session, error: sessionError } = await supabase.auth.getSession()

    if (sessionError) {
      throw sessionError;
    }

    if (session) {
      loginUser = session.session.user
    } else {
      // Пользователь не аутентифицирован
      console.log('Пользователь не аутентифицирован');
    }
  } catch (error) {
    console.error('Ошибка при проверке сессии:', error.message);
  }
  return loginUser;
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

export const GET_ACCOUNT = gql`
query ($slug: String) {  
  accountsCollection (filter: {
    slug: {eq: "felirian"}
  }) {
    edges {
      node {
        id
        name
        slug
        email
        experience
      }
    }
  }
}
`

export const GET_ITEM = gql`
query ($slug: String) {  
  itemsCollection (filter: {
    slug: { eq: $slug }
  }) {
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


