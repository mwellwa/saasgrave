import { useState } from "react";
import supabase from './supabaseClient';

export default function UserUploadForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState(""); //date of birth
  const [dod, setDod] = useState(""); //date of death
  const [deathCause, setdeathCause] = useState("")
  //const [promptInput, setpromptInput] = useState("");
  //const [result, setResult] = useState();

  /*async function imgGenRequest(e) {
    e.preventDefault()
    //function to send request to imageGenerator to generate image
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptInput }),
      });
      console.log(response)

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setpromptInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
    console.log(result)
  }*/

  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    //Generate image request
    //const imageurl = await imgGenRequest()
    //console.log(imageurl)

    //Do something with the form data, like sending it to a server
    //if(`${result}` == ""){
      const { data, error } = await supabase
      .from('post')
      .insert([
      { id: generateRandomId(), project_name: name, project_bio: bio, birth_date: `${dob}`, death_date: `${dod}`, death_cause: deathCause},
      ])
    //}
    console.log({ name, bio, dob, dod, deathCause}) // result});
    
    alert("death recorded!")

  }

  return (
    <div className="h-screen w-screen bg-stone-950 flex flex-col 
    items-center justify-center bg-[url('/img.png')]">
      <form onSubmit={handleSubmit} className="mb-10 p-5 bg-black bg-opacity-60 w-1/2 rounded-2xl">
        <h1 className="text-2xl p-2 font-bold rounded-2xl font-serif text-center">The Mortuary</h1>
        <div className="mb-4"> 
          <h1 className="text-xl font-bold font-serif text-center">Deceased Name</h1>
          <input
            type="text"
            id="name"
            placeholder="Name of Project"
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-pink focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold font-serif text-center">Deceased Eulogy</h1>
          <input
            type="text"
            id="bio"
            placeholder="Description of the Project and its Aim"
            className="shadow appearance-none block w-full p-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-pink focus:shadow-outline"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></input>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold font-serif text-center">Deceased Date of Birth</h1>
          <input
            type="date"
            id="dob"
            placeholder="Deceased Date of Birth"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-pink focus:shadow-outline"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold font-serif text-center">Deceased Date of Death</h1>
          <input
            type="date"
            id="dod"
            placeholder="Deceased Date of Death"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-pink focus:shadow-outline"
            value={dod}
            onChange={(e) => setDod(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold font-serif text-center">Cause of Death</h1>
          <input
            type="text"
            id="deathCause"
            placeholder="What Factors Caused the Project to Fail in Your Opinion"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-pink focus:shadow-outline"
            value={deathCause}
            onChange={(e) => setdeathCause(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 active:bg-red-700 focus:ring focus:ring-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Deceased
        </button>
      </form>
    </div>
  );
}
     {/*
      <div>
      <form onSubmit={imgGenRequest}>
      <div className="mb-4">
        <input
          type="text"
          id="promptInput"
          placeholder="Generate image that decribes your feeling about the Deceased."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={promptInput}
          onChange={(e) => setpromptInput(e.target.value)} />
      </div>
      <input type="submit" value="Generate names" />
    </form><div>{result}</div>
    </div>
    */}


