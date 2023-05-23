import { useState, useEffect } from 'react';
import supabase from './supabaseClient';
import PostLayout from './postsLayout';
import { useRouter } from 'next/router';

export default function Posts() {
  
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  const fetchData = async() => {

    let { data: post, error } = await supabase
    .from('post')
    .select('*')
    setPosts(post)

  }
  
  useEffect(() => {
      fetchData();
  }, [])
  
  const handlePrevClick = () => {
    setCurrentPostIndex(currentPostIndex === 0 ? posts.length - 1 : currentPostIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentPostIndex(currentPostIndex === posts.length - 1 ? 0 : currentPostIndex + 1);
  };

  return (
    <div className="flex bg-stone-950 h-screen w-screen justify-center items-center bg-[url('/tomb.png')]">
      {posts.map((post, index) => (
        <div key={index}
          className={`absolute top-0 left-0 w-fit transform transition duration-300 ease-in-out ${
            index === currentPostIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`} >
          <div className='bg-stone-950 h-screen w-screen flex items-center justify-center '>
            <div className="z-10 w-fit h-fit">
              <PostLayout name={post.project_name} bio={post.project_bio} birth={post.birth_date} 
                death={post.death_date} deathCause={post.death_cause}/>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-7 z-11 transform -translate-y-1/2">
        <button onClick={handlePrevClick} className="bg-gray-900 hover:bg-green-950 text-white px-2 py-1 rounded-l-2xl">
          Prev
        </button>
        <button onClick={handleNextClick} className="bg-gray-900 hover:bg-green-900 text-white px-2 py-1 rounded-r-2xl">
          Next
        </button>
      </div>
      <div className="flex absolute z-12 left-3 top-3 h-fit">
      <button
        className="px-4 py-2 bg-red-900 rounded-xl text-white font-bold font-serif hover:bg-red-700"
        onClick={handleClick}
      >
        Add Your Project
      </button>
    </div>
      {/*<div className="absolute left-0 z-0">
        <img className="h-screen w-full" src='/img_skull.png'/>
      </div>
      {/*<div className="absolute right-0 z-0">
          <img className="h-screen w-full" src='/img_skull2.png'/>
        </div> */}
    </div>
  );
}