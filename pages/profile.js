/*import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/router'

export default function Profile() {
  const [profile, setProfile] = useState(null)
  const router = useRouter()
  const Url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const Key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabase = createClient(Url, Key)

  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    const profileData = await supabase.auth.getUser()
    if (!profileData) {
      router.push('/sign-in')
    } else {
      setProfile(profileData)
    }
  }
  async function signOut() {
    await supabase.auth.signOut()
    router.push('/sign-in')
  }
  if (!profile) return null
  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <h2>Hello, {profile.email}</h2>
      <p>User ID: {profile.id}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}*/