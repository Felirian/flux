import {createClient,} from '@supabase/supabase-js';
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {gql} from "@apollo/client";

const supabase_key = process.env.NEXT_PUBLIC_DB_SERVICE_KEY
const supabase_url = process.env.NEXT_PUBLIC_DB_URL
const supabase = createClient(supabase_url, supabase_key);

//--------------------------------FETCH--------------------------------\\
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
    const {data: session, error: sessionError} = await supabase.auth.getSession()

    if (sessionError) {
      return sessionError;
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
export const logOut = async () => {
  let {error} = await supabase.auth.signOut()
  if (!error) {
    window.location.href = '/';
  } else {
    alert(error);
    return error;
  }
}
export const addItemInBasket = async (item, account) => {
  if (item && account) {
    let { data, error } = await supabase
      .rpc('add_item_in_basket', {
        in_account: account,
        in_item: item
      })
    if (error) console.error('error: ', error)
    else console.log('data: ',data)
  }
}

//-------------------------------GRAPHQL-------------------------------\\
export const GET_ACCOUNT = gql`
query ($slug: String) {  
  accountsCollection (filter: {
    slug: {eq: $slug}
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
`;
export const GET_ITEM = gql`
query ($slug: String) {  
  itemsCollection (filter: {
    slug: { eq: $slug }
  }) {
    edges {
      node {
        id
        name
        slug
        info
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
export const GET_ITEMS_IN_GROUP = gql`
query ($collection: String) {
  collectionCollection (filter: {
    id: {eq: $collection}
  }) {
    edges {
      node {
        accessoryCollection {
          edges {
            node {
              items {
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
      }
    }
  }
}
`;

//-------------------------------IMAGES-------------------------------\\
export const accountAvatar = (slug) => {
  let result

  const {data: image} = supabase
    .storage
    .from('Images')
    .getPublicUrl(`accounts/${slug}`)

  if (image) {
    result = image.publicUrl
  }
  return result
}

export const itemMainImg = (slug) => {
  let result

  const {data: image} = supabase
    .storage
    .from('Images')
    .getPublicUrl(`items/${slug}/full_page_img.jpg`)

  if (image) {
    result = image.publicUrl
  }
  return result
}

export default supabase


