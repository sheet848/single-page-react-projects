import React from 'react'
import heroimg from '../../assets/mobile/image-keyboard.jpg'
import dheroimg from '../../assets/tablet/image-keyboard.jpg'

const Hero = () => {
  return (
    <>
    <div className="hero-section md:flex">
      <div className="hero-text">
      <h1 className='uppercase px-4 py-4 text-4xl font-bold text-[var(--dark-heading)]'>Typemaster keyboard</h1>
        <p className='px-4 py-4'>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.</p>
        <div className="flex py-4 px-4 button-section text-center">
            <button className='px-4 py-3 rounded-lg bg-[var(--orange)] text-white font-bold uppercase text-xs'>Pre-order now</button>
            <span className='py-4 px-4 text-xs uppercase'>Release on 5/27</span>
        </div>
      </div>
        <div className="hero-img mx-4 my-4">
            <img className="rounded-lg" src={heroimg} alt="" />
        </div>
    </div>
    </>
  )
}

export default Hero