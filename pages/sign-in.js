/*import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const Url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const Key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabase = createClient(Url, Key)
  
  async function signIn() {
    const { error, data } = await supabase.auth.signInWithOtp({
      email
    })
    if (error) {
      console.log({ error })
    } else {
      setSubmitted(true)
    }
  }
  if (submitted) {
    return (
      <div>
        <h1>Please check your email to sign in</h1>
      </div>
    )
  }
  return (
    <div>
      <main>
        <h1>
          Sign In
        </h1>
        <input
          onChange={e => setEmail(e.target.value)}
          style={{ margin: 10 }}
        />
        <button onClick={() => signIn()}>Sign In</button>
       </main>
    </div>
  )
} */