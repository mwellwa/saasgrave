/*import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js';

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [user_email, setEmail] = useState(null)
  const Url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const Key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabase = createClient(Url, Key)

  useEffect(() => {
    getProfile()
    //console.log(response.user.id)
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = await supabase.auth.getUser()
      console.log('USERID!: '+ user.id)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, user_email`)
        .eq('id', )
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setEmail(data.user_email)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, user_email }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        user_email,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="user_email">user_email</label>
        <input
          id="user_email"
          type="url"
          value={user_email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}


/* get the fields values 
import { useState, useEffect } from "react"
import { supabase } from "../pages/supabaseClient"

const Account = ( { session } ) => {

    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [user_email, setEmail] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    const getProfile = async () => {
        try {
            setLoading(true)
            const user = supabase.auth.user()

            let { data, error, status } = await supabase
            .from('profiles')
            .select(`username, user_email`)
            .eq('id', user.id)
            .single()

            if(data){
                setUsername(data.username)
                setEmail(data.user_email)
            }

        } catch (error) {
            alert(error.message)
        }finally{
            setLoading(false)
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const user = supabase.auth.user();

            const updates = {
                id : user.id,
                username,
                user_email,
                updated_at: new Date()
            }

            let { error } = await supabase.from("profiles")
            .upsert(updates, { returning : 'minimal'})

            if(error){
                throw error;
            }
        } catch (error) {
            alert(error.message)
        } finally{
            setLoading(false)
        }
    }

    return (
        <div aria-live="polite" className='container mx-auto'>
      {loading ? (
        'Saving ...'
      ) : (
        <form onSubmit={updateProfile} className="form-widget">            
          {/* <div>Email: {session.user.email}</div> }
          <div className="container mx-auto w-72 py-4">
                <input type="text" 
                name="text" 
                id="username"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Your Name" 
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
                />
          </div>
          <div class="container mx-auto w-72 py-4">
              <input type="text" 
              name="text" 
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
              placeholder="your@website.com"
              id="email"
              value={user_email || ''}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          <div className='text-center'>
              <button class="w-44 h-11 rounded-full text-gray-50 bg-indigo-600 hover:bg-indigo-700" disabled={loading}>
                Update Profile
              </button>
          </div>
          <div className="text-center">
              <button type="button" className="button" onClick={() => supabase.auth.signOut()}>
                  Sign Out
              </button>
          </div>
        </form>
      )}
      
    </div>
    )


}

export default Account;

// update these values

/*import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [user_email, setEmail] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, user_email`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
        console.log(error)
      }

      if (data) {
        setUsername(data.username)
        setEmail(data.user_email)
        //setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, user_email }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        user_email,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={(e) => setEmail(e.target.value)}
        value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ username, user_email})}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
} */
