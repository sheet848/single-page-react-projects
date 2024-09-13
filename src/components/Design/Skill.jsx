import React from 'react'
import Apps from '../../assets/design-portfolio/pattern-apps.svg'
import Graphic from '../../assets/design-portfolio/pattern-graphic-design.svg'
import Illustration from '../../assets/design-portfolio/pattern-illustrations.svg'
import Motion from '../../assets/design-portfolio/pattern-motion-graphics.svg'
import Photo from '../../assets/design-portfolio/pattern-photography.svg'
import Ui from '../../assets/design-portfolio/pattern-ui-ux.svg'

const Skill = () => {
  return (
    <>
    <div className="skill-banner mx-3 text-2xl font-bold text-white">
        <div className="upper-skill md:grid md:grid-cols-2">
            <div className="sec1 md:mr-4 bg-[var(--skill-1)] py-4 px-4 my-4 rounded-xl">
                <img src={Graphic} alt="graphic-design" className="ml-auto" />
                <p className="md:relative md:top-14 py-3">Graphic Design</p>
            </div>
            <div className="sec2">
                <div className="small grid grid-cols-2">
                    <div className="ui bg-[var(--skill-2)] py-4 px-4 my-4 mr-4 rounded-xl">
                        <img src={Ui} alt="ui-ux" className="ml-auto" />
                        <p className="py-3">UI/UX</p>
                    </div>
                    <div className="app bg-[var(--skill-3)] py-4 px-4 my-4 rounded-xl">
                        <img src={Apps} alt="app" className="ml-auto" />
                        <p className="py-2">Apps</p>
                    </div>
                </div>
                <div className="big bg-[var(--skill-4)] py-4 px-4 my-4 rounded-xl">
                    <img src={Illustration} alt="illustration" className="ml-auto" />
                    <p className="py-3">Illustrations</p>
                </div>
            </div>
        </div>
        <div className="lower-skill md:grid md:grid-cols-2">
            <div className="section1 md:mt-0 md:mr-4 bg-[var(--skill-5)] py-4 px-4 my-4 rounded-xl">
                <img src={Photo} alt="photo" className="ml-auto" />
                <p className="py-3">Photography</p>
            </div>
            <div className="section2 md:mt-0 rounded-xl bg-[var(--skill-6)] py-4 px-4 my-4">
                <img src={Motion} alt="motion-graphics" className="ml-auto" />
                <p className="py-3">Motion Graphics</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Skill