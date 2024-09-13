import React from 'react'
import logo from '../../assets/shared/logo.svg'

const Header = () => {
  return (
    <>
    <header className='flex py-4 px-4 justify-between'>
        <div className="header-logo">
            <img src={logo} alt="" />
        </div>
        <button className='px-4 py-3 rounded-lg bg-slate-300 text-[var(--dark-heading)] font-bold uppercase text-xs'>Pre-order now</button>
    </header>
    </>
  )
}

export default Header