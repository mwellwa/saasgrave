/*
export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Hello World!
        </h1>
       </main>
    </div>
  )
}



/*import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'
import Auth from '../components/Auth';
//import { useSession } from '@supabase/auth-helpers-react'
import Account from '../components/Account';
import { createClient } from '@supabase/supabase-js';

function Home() {

  //const session = useSession()
  const [session, setSession] = useState(null)
  const Url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const Key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabase = createClient(Url, Key)

  useEffect(() =>{
    setSession(supabase.auth.getSession())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  async function getUser() {
    const user = await supabase.auth.getUser()
  }

  return (
    <div className="w-screen h-screen">
      {!session ? <Auth /> : <Account session={session} />}
    </div>
  );
}

export default Home;

/* 
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import { useState } from 'react'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const [email, setEmail] = useState(null)

async function signIn(email) {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: `${email}`,
    options: {
      emailRedirectTo: 'https://example.com/welcome'
    }
  })
}

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <Account session={session} />      )}
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={(e) => setEmail(e.target.value)} />
        <button className="button block" onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  )
}

export default Home

*/