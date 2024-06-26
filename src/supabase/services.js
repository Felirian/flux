import {createClient,} from '@supabase/supabase-js';
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {gql} from "@apollo/client";
import {useEffect, useState} from "react";

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

export const useSession = () => {
  const [sessionStatus, setSessionStatus] = useState({
    session: false,
    userId: null,
    userMetaData: null,
    userError: null
  })

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data: dataSession, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          setSessionStatus(dt => ({
            ...dt,
            userError: sessionError
          }))
        } else {
          setSessionStatus({
            session: true,
            userId: dataSession.session.user.id,
            userMetaData: dataSession.session.user.user_metadata,
            userError: null
          })
        }
      } catch (error) {
        setSessionStatus(dt => ({
          ...dt,
          userError: error.message
        }))
      }
    };

    fetchSession();
  }, []);

  return sessionStatus;
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

      const url = `https://store.steampowered.com/api/appdetails/?appids=413150`;
      //const url = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${steamApiKey}&appid=${gameId}&format=json`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            "Accept": "application/json",
            'Access-Control-Allow-Origin': 'http://localhost:3001',
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGameData({ data: data, loading: false, error: null });
      } catch (error) {
        setGameData({ data: null, loading: false, error: error.message });
        console.log(error);
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
export const GET_TAGS = gql`
query {
  tagsCollection {
    edges {
      node {
        name
        id
      }
    }
  }
  items_tagsCollection {
    edges {
      node {
        tags {
          name
          id
        }
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
        video
        
        short_info
        
        slug
        info
        price
        
        steamId
        
        pc_characteristics
        
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
export const GET_ITEMS_SEARCH = gql`
query ($name: String) {
  tagsCollection {
    edges {
      node {
        name
        id
      }
    }
  }  
  itemsCollection (
    orderBy: {created_at: AscNullsFirst},
    filter: {name: {iregex: $name}}
  ) {
    edges {
      node {        
        name        
        slug
        
        price
        discount
        
        steamId
        
        items_tagsCollection (first: 3) {
          edges {
            node {
              tags {
                id
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

export const GET_ITEMS_IN_BASKET = gql`
  query ($userId: UUID) {
  basketCollection (filter: {
    account_id: {eq: $userId}
  }) {
    edges{
      node {
        items {
          name        
          slug

          price
          discount

          steamId

          items_tagsCollection (first: 3) {
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
`

export const GET_NAMES_SEARCH = gql`
query ($name: String) {
  itemsCollection (filter: {
    name: {iregex: $name}
  }) {
    edges {
      node {        
        name
        slug
      }
    }
  }
}
`;

export const GET_ITEMS_IN_COLLECTION = gql`
query ($collection: String) {
  items_collectionCollection(filter: {
    collection_id: {eq: $collection}
  }) {
    edges {
      node {        
        items {          
          name
          slug
          
          price
          discount
          
          steamId
          
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
export const GET_ITEMS_IN_TAGS = gql`
query ($collection: Int) {
  items_tagsCollection(filter: {
    tag_id: {eq: $collection}
  }) {
    edges {
      node {
        items {
          name
          slug
          
          price
          discount
          
          steamId
          
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


