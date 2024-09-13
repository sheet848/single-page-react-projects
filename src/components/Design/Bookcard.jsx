import React from 'react'

const Bookcard = () => {
  return (
    <>
    <div className="card mx-3 py-8 rounded-2xl bg-[var(--black-color)] text-white text-center ">
        <h3 className='md:text-5xl text-3xl font-bold'>Book a call with me</h3>
        <p className="md:text-2xl md:mx-14 px-8 py-5">
          I'd love to have a chat to see how I can help you. The best first step is for us to discuss your project during a 
          free consultation. Then we can move forward from there.
        </p>
        <button className="bg-[var(--button-color)] text-white font-bold py-4 px-5 rounded-full">Free Consultation</button>
    </div>
    </>
  )
}

export default Bookcard