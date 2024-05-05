import {createClient,} from '@supabase/supabase-js';
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {gql} from "@apollo/client";
import {useEffect, useState} from "react";

const supabase_key = process.env.NEXT_PUBLIC_DB_SERVICE_KEY
const supabase_url = process.env.NEXT_PUBLIC_DB_URL
const supabase = createClient(supabase_url, supabase_key);

const steamApiKey = 'E50AB7E5A1FCCF19F0EA71DBFF190B51'
const gameId = '413150'
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
};
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
};

export function useSteamGameData(gameId) {
  const [gameData, setGameData] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    const fetchGameData = async () => {

      const url = `https://steam-api7.p.rapidapi.com/appDetails/271590`;
      //const url = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${steamApiKey}&appid=${gameId}&format=json`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '9ef2c584f0mshc39c18732451fc6p12abc8jsnd4650ce51313',
            'X-RapidAPI-Host': 'steam-api7.p.rapidapi.com'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGameData({ data: data, loading: false, error: null });
      } catch (error) {
        setGameData({ data: null, loading: false, error: error.message });
      }
    };

    fetchGameData();
  }, [gameId]);

  return gameData;
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
        items_tagsCollection {
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
        items_tagsCollection {
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
  items_collectionCollection(filter: {
    collection_id: {eq: $collection}
  }) {
    edges {
      node {        
        items {
          id
          name
          slug
          price
          items_tagsCollection {
            edges{
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
};

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
};

export default supabase


