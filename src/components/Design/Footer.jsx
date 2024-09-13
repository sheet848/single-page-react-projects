import React from 'react'
import logo from '../../assets/design-portfolio/logo.svg'

const Footer = () => {
  return (
    <>
    <div className="flex justify-between mx-3 py-9">
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>
        <div className="footer-button">
            <button className="bg-[var(--black-color)] text-white font-bold py-4 px-5 rounded-full">Free Consultation</button>
        </div>
    </div>
    </>
  )
}

export default Footer