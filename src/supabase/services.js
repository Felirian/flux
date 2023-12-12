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


export const GetItems = () => {
  const [Items, setItems] = useState(null)
  const [Error, setError] = useState(null)

  useEffect(() => {
    const rest = async () => {
      let { data: items, dataError } = await supabase
        .from('items')
        .select('*')

      if (dataError) {
        setError(dataError)
        setItems(null)
      }
      if (items) {
        setItems(items)
        setError(null)
      }
    }
    rest()
  }, [1]);
  return {data: Items, error: Error}
}




export default supabase


