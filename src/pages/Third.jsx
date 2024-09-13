import React, {useState, useEffect} from 'react'
import Header from '../components/Github/Header'
import SearchBar from '../components/Github/SearchBar'
import UserData from '../components/Github/UserData'

const Third = () => {
  //implement dark mode
  const isDarkMode = JSON.parse(localStorage.getItem("dark-mode"));
  const [darkMode, setDarkMode] = useState(isDarkMode);

  //searching user data
  const [userData, setUserData] = useState({});

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  useEffect(()=> {
      localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  function saveUserData(user) {
    setUserData(user);
  }
  
  return (
    <>
    <div className={`md:h-[100vh] pb-[6px] ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SearchBar saveUserData={saveUserData} />
      <UserData user={userData} />
    </div>
    </>
  )
}

export default Third