import { useState } from "react";

export default function UserUploadForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState("");
  const [dod, setDod] = useState("");
  const [lessons, setLessons] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like sending it to a server
    console.log({ name, bio, dob, dod });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
          Bio
        </label>
        <textarea
          id="bio"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dod" className="block text-gray-700 font-bold mb-2">
          Date of Death
        </label>
        <input
          type="date"
          id="dod"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={dod}
          onChange={(e) => setDod(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lessons" className="block text-gray-700 font-bold mb-2">
          Lesson 1
        </label>
        <input
          type="text"
          id="lessons"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={lessons}
          onChange={(e) => setLessons(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lessons" className="block text-gray-700 font-bold mb-2">
          Lesson 2
        </label>
        <input
          type="text"
          id="lessons"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={lessons}
          onChange={(e) => setLessons(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lessons" className="block text-gray-700 font-bold mb-2">
          Lesson 3
        </label>
        <input
          type="text"
          id="lessons"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={lessons}
          onChange={(e) => setLessons(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}
