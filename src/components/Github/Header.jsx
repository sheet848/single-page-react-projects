import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
    <header className='md:mx-auto md:max-w-2xl flex justify-between py-8 px-5'>
        <h1 className='font-bold text-2xl'>DevFinder</h1>
        <button onClick={toggleDarkMode} className='uppercase'>
            { darkMode ? "Light" : "Dark" }
            <span className='mr-2'></span>
            { darkMode ? 
            <FontAwesomeIcon icon={faSun} /> : 
            <FontAwesomeIcon icon={faMoon} />
            }
        </button>
    </header>
    </>
  )
}

export default Header