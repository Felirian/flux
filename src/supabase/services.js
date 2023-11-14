import { createClient } from '@supabase/supabase-js'
import {useEffect, useState} from "react";

const supabase_key = process.env.NEXT_PUBLIC_DB_API_KEY
const supabase_url = process.env.NEXT_PUBLIC_DB_URL
const supabase = createClient(supabase_url, supabase_key);

export const GetItems = () => {
  const [Items, setItems] = useState(null)
  const [Error, setError] = useState(null)
  useEffect(() => {
    const rest = async () => {
      let { data: items, error } = await supabase
        .from('items')
        .select('*')

      if (error) {
        setError(error)
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


