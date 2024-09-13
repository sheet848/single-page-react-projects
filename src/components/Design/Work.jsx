import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import leftarrow from '../../assets/design-portfolio/icon-arrow-left.svg'
import rightarrow from '../../assets/design-portfolio/icon-arrow-right.svg'

import image1 from '../../assets/design-portfolio/image-slide-1.jpg'
import image2 from '../../assets/design-portfolio/image-slide-2.jpg'
import image3 from '../../assets/design-portfolio/image-slide-3.jpg'
import image4 from '../../assets/design-portfolio/image-slide-4.jpg'
import image5 from '../../assets/design-portfolio/image-slide-5.jpg'

const Work = () => {

    const work = [image1, image2, image3, image4, image5];

  return (
    <>
    <div className="text-center heading text-[var(--black-color)] text-3xl font-bold py-5">My Work</div>
    <CarouselProvider
     naturalSlideWidth={100}
     naturalSlideHeight={60}
     totalSlides={5}
    >

    <Slider className='mx-3'>
        {
            work.map((item, index) => (
                <Slide index={index} className="">
                    <img src={item} alt="work" className="md:my-0 md:mx-auto rounded-xl" />
                </Slide>
            ))
        }
    </Slider>

    <div className="button-section text-center mb-11">
    <ButtonBack className='bg-[var(--black-color)] w-14 h-14 py-5 px-5 rounded-full mr-3'>
        <img src={leftarrow} alt="left-arrow-button" />
    </ButtonBack>
    <ButtonNext className='bg-[var(--black-color)] w-14 h-14 py-5 px-5 rounded-full'>
        <img src={rightarrow} alt="right-arrow-button" />
    </ButtonNext>
    </div>
    </CarouselProvider>
    </>
  )
}

export default Work