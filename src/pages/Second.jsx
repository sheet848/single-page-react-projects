import React from 'react'
import Footer from '../components/Design/Footer'
import Bookcard from '../components/Design/Bookcard'
import Consult from '../components/Design/Consult'
import Skill from '../components/Design/Skill'
import Hero from '../components/Design/Hero'
import Work from '../components/Design/Work'

const Second = () => {
  return (
    <>
    <div className="page-container bg-[var(--bg-pastel-color)]">
      <div className="cover md:max-w-4xl md:my-0 md:mx-auto">
      <Footer />
      <Hero />
      <Skill />
      <Consult />
      <Work />
      <Bookcard />
      <Footer />
      </div>
    </div>
    </>
  )
}

export default Second