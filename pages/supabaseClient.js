import { createClient } from '@supabase/supabase-js'

const Url = process.env.NEXT_PUBLIC_SUPABASE_URL
const Key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export default createClient(Url, Key)