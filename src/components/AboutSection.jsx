import React, { useState } from 'react'
import { IoRocketOutline } from "react-icons/io5"
import { IoTelescopeOutline } from 'react-icons/io5'
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [move, setMove] = useState('normal')
  const [ active, setActive ] = useState(0)
  const { ref, inView } = useInView({
      triggerOnce: true
  })

  const moveRight = () =>{
        setMove("right")
        setActive(1)
  }
  const moveBack = () =>{
        setMove("normal")
        setActive(0)
  }
  return (
    <div className='about-wrapper'>
            <div className="inner-row">
                    <div className="about-wrapper-content">
                              <div className="description-wrapper">
                                        <h2>Safe, reliable and express logistic & transport solutions that saves your time!</h2>
                                        <div className="description-grid">
                                                  <div className="grid-column-statements">
                                                           <div className="statements-container">
                                                                    <div className={move === "right" ? "statement-drag moved":"statement-drag"}>
                                                                             <div className="statement-box">
                                                                                    <span><IoRocketOutline /></span>
                                                                                    <h3>Our Mission</h3>
                                                                                    <p>Utilize decades of exprerience       to serve our customers better.</p>
                                                                          </div>
                                                                          <div className="statement-box">
                                                                                    <span><IoTelescopeOutline /></span>
                                                                                    <h3>Our Vision</h3>
                                                                                    <p>Providing world class       optimized transportation across       east africa.</p>
                                                                          </div>
                                                                    </div>
                                                           </div>
                                                           <div className="statement-btns">
                                                                   <span className={active === 0 ? 'active': ""} onClick={moveBack}></span>
                                                                   <span className={active === 1 ? 'active': ""} onClick={moveRight}></span>
                                                           </div>
                                                  </div>
                                                  <div className="grid-column-texts">
                                                        <h4>Fastlink Movers is a representative logistics operator providing full range of service in the sphere of relocation and transportation countrywide for any type of cargo.</h4>

                                                        <p>We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience! Through integrated supply chain solutions, Fastlink drives sustainable competitive advantages to some of Kenya’s largest companies.</p>
                                                  </div>
                                        </div>
                              </div>
                              <div className="image-wrapper" data-aos="">
                                        <div className="about-image">
                                                <div ref={ref} className={inView ? "orange-overlay remove": "orange-overlay"}></div>
                                        </div>
                                        <div className="orange-shade" data-aos="zoom-in"></div>
                              </div>
                    </div>
            </div>
    </div>
  )
}

export default AboutSection