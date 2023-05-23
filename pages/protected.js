/*import { supabase } from '../client'
import { createClient } from '@supabase/supabase-js'

export default function Protected({ user }) {

    const Url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const Key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(Url, Key)

    console.log({ user })
    return (
        <div style={{ maxWidth: '420px', margin: '96px auto' }}>
        <h2>Hello from protected route</h2>
        </div>
  )
} */

/*export async function getServerSideProps({ req }) {
    /* check to see if a user is set */
   // const { user } = await supabase.auth.api.getUserByCookie(req)

    /* if no user is set, redirect to the sign-in page */
   // if (!user) {
   //     return { props: {}, redirect: { destination: '/sign-in' } } }

    /* if a user is set, pass it to the page via props */
    //return { props: { user } }
//} 
