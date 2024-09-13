import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import React, { useState, useEffect } from 'react'

const SearchBar = ({ saveUserData }) => {

  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetchUserData(username);
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function fetchUserData(username) {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
      if(data.message === "Not Found") {
        setError(true)
      } else {
        setError(false);
        saveUserData(data);
        setUsername("");
        console.log(username);
      };
    });
  };

  useEffect(() => fetchUserData("octocat"), []);

  return (
    <>
    <form onSubmit={handleSubmit} className='search-form md:mx-auto md:max-w-2xl py-4 mx-4 justify-between text-center rounded-xl bg-white shadow-xl'>
        <FontAwesomeIcon icon={faSearch} />
        <input value={username} onChange={handleChange} type="text" placeholder="Search GitHub username" className='px-2' />
        {
          error && <span className='error'>No results</span>
        }
        <button className='search-btn py-2 px-2 rounded-xl bg-blue-500 text-white font-semibold'>Search</button>
    </form>
    </>
  )
}

export default SearchBar