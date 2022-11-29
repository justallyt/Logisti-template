import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io"
import { IoIosArrowRoundForward } from "react-icons/io"
import { IoPlay } from "react-icons/io5"

const HeroSection = () => {
  const [slides, setSlides] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  const autoplayRef = useRef()
  const slideRef = useRef([]) //get all slides
  const slidesRef = (el) => slideRef.current.push(el)
   
  useEffect(()=>{
          const array_items = []
          array_items.push(...slideRef.current)
          setSlides(array_items)
  }, [])
  useEffect(() =>{
         autoplayRef.current = nextSlide
  })
  const nextSlide = () =>{
        const nextIndex = activeIndex === slides.length - 1  ?  0 : activeIndex + 1
        setActiveIndex(nextIndex)
  }
  const prevSlide = () =>{
        const prevIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1
        setActiveIndex(prevIndex)
  }

  useEffect(()=>{
         const play = () =>{
                autoplayRef.current()
         }

        // const slideInterval = setInterval(play, 5000)
        const slideInterval = requestAnimationFrame(function autoslide(){
            setTimeout(()=> {
                   play()
                   requestAnimationFrame(autoslide)
            }, 8000)
    })
        return () => window.cancelAnimationFrame(slideInterval)
  }, [])
  


  return (
    <div className='hero-section'>
            <div className="hero-slider">
                      <div className="arr arrow-left" onClick={prevSlide}>
                              <span><IoIosArrowRoundBack/></span>
                      </div>
                     <div className="slides">
                              <div ref={slidesRef} className={activeIndex === 0 ? "hero-slide active" : "hero-slide"}>
                                        <div className="slide-texts">
                                                  <div className="inner-row">
                                                            <h1>Safe & Reliable cargo Solutions</h1>
                                                            <p>Providing flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity.</p>
                                                            <div className="slide-btns">
                                                                     <a href="s">Our Services</a>
                                                                     <div className="video-trigger">
                                                                              <span><IoPlay /></span>
                                                                               <h4>Our Video</h4>
                                                                     </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                              <div ref={slidesRef}  className={activeIndex === 1 ? "hero-slide active" : "hero-slide"}>
                                         <div className="slide-texts">
                                                  <div className="inner-row">
                                                            <h1>Air Freight that saves you time</h1>
                                                            <p>Providing flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity.</p>
                                                            <div className="slide-btns">
                                                                     <a href="s">Our Services</a>
                                                                     <div className="video-trigger">
                                                                              <span><IoPlay /></span>
                                                                               <h4>Our Video</h4>
                                                                     </div>
                                                            </div>
                                                  </div>
                                            </div>
                                </div>
                              <div ref={slidesRef}  className={activeIndex === 2 ? "hero-slide active" : "hero-slide"}>
                                         <div className="slide-texts">
                                                  <div className="inner-row">
                                                            <h1>Directions that Matter</h1>
                                                            <p>Providing flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity.</p>
                                                            <div className="slide-btns">
                                                                     <a href="s">Our Services</a>
                                                                     <div className="video-trigger">
                                                                              <span><IoPlay /></span>
                                                                               <h4>Our Video</h4>
                                                                     </div>
                                                            </div>
                                                  </div>
                                            </div>
                              </div>
                              <div ref={slidesRef}  className={activeIndex === 3 ? "hero-slide active" : "hero-slide"}>
                                             <div className="slide-texts">
                                                  <div className="inner-row">
                                                            <h1>Innovative Sea Transportation</h1>
                                                            <p>Providing flexible, improved service levels, and accelerated delivery. Reduced direct and indirect costs and much less complexity.</p>
                                                            <div className="slide-btns">
                                                                     <a href="s">Our Services</a>
                                                                     <div className="video-trigger">
                                                                              <span><IoPlay /></span>
                                                                               <h4>Our Video</h4>
                                                                     </div>
                                                            </div>
                                                  </div>
                                            </div>
                                </div> 
                     </div>

                     <div className="arr arrow-right" onClick={nextSlide}>
                              <span><IoIosArrowRoundForward /></span>
                     </div>
            </div>
    </div>
  )
}

export default HeroSection