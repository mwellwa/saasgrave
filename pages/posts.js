import { useState, useEffect } from 'react';
import supabase from './supabaseClient';
import PostLayout from './postsLayout';

export default function Posts() {
  
  const [posts, setPosts] = useState([]);

  const fetchData = async() => {

    let { data: post, error } = await supabase
    .from('post')
    .select('*')
    setPosts(post)

  }
  
  useEffect(() => {
      fetchData();
  }, [])

  return (
    posts.map(post=> (
      <div className='bg-gray-900'>
        <PostLayout name={post.project_name} />
      </div>
    ))
  );
}