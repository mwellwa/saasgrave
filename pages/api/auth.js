/* pages/api/auth.js 
import { createClient } from '@supabase/supabase-js'

export default async function handler(req) {
    
  const Url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const Key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabase = createClient(Url, Key)

  let token = req.cookies['sb:token'];
  if (!token) {
      return 
  }
  let authRequestResult = await fetch(`${Url}/auth/v2/user`, {
      headers: {
          'Authorization': `Bearer ${token}`,
          'APIKey': Key
      }
  });

  return(authRequestResult)

}*/
