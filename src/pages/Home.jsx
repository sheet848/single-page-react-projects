import React from 'react'
import Footer from '../components/Type/Footer'
import Features from '../components/Type/Features'
import Hero from '../components/Type/Hero'
import Header from '../components/Type/Header'

const Home = () => {
  return (
    <>
    <div className="page-container max-w-[1000px] w-full mx-auto my-0">
    <Header />
    <Hero />
    <Features />
    <Footer />
    </div>
    </>
  )
}

export default Home