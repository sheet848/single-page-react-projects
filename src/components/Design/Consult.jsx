import React from 'react'
import girl from '../../assets/design-portfolio/image-amy.webp'

const Consult = () => {
  return (
    <>
    <div className="consult-banner md:flex mx-3 py-11">
        <div className="section1 md:w-[50%]">
            <img src={girl} alt="" />
        </div>
        <div className="section2 md:w-[50%] md:ml-5 md:text-left text-center">
            <h2 className="md:text-5xl text-[var(--black-color)] text-3xl font-bold py-5">I'm Amy, and I'd love to work on your next project</h2>
            <p className="md:text-2xl py-5">I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera!</p>
            <button className="bg-[var(--button-color)] text-white font-bold py-4 px-5 rounded-full">Free Consultation</button>
        </div>
    </div>
    </>
  )
}

export default Consult