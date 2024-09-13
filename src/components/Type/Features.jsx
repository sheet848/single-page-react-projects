import React from 'react'
import { features } from '../../constant/type'
import orangefilter from '../../assets/mobile/image-phone-and-keyboard.jpg'
import keydesk from '../../assets/mobile/image-glass-and-keyboard.jpg'

const Features = () => {
  return (
    <>
    <div className="show-img flex mt-9">
        <img src={orangefilter} alt="" className='w-2/4 rounded-r-xl rounded-br-xl h-52' />
        <img src={keydesk} alt="" className='w-[56%] h-2/4 px-5 rounded-xl'/>
    </div>
    <div className="quote md:flex">
        <h2 className='md:text-left py-10 px-8 text-[32px] text-[var(--dark-heading)] font-bold text-center uppercase'>Mechanical Wireless Keyboard</h2>
        <p className='md:text-left md:py-16 text-center py-8'>The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
    </div>
    <div className="features">
        <ul className='my-8 md:grid md:grid-cols-2 lg:grid-cols-4'>
            {
                features.map((item, index) => (
                    <li key={index}>
                        <div className="feature-icon bg-[var(--orange)] text-center mx-auto rounded-xl px-4 py-4 w-16 my-4 md:text-left">
                            <img src={item.icon} alt="orange-icon" />
                        </div>
                        <h3 className="feature-heading text-center font-bold text-2xl uppercase px-4 py-4 text-[var(--dark-heading)] md:text-left md:pl-8">{item.heading}</h3>
                        <p className="feature-para text-center px-8 pb-7 md:text-left">{item.description}</p>
                    </li>
                ))
            }
        </ul>
    </div>
    </>
  )
}

export default Features