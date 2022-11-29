import React from 'react'
import Statements from './Statements'
import Mover from "../assets/mover.jpg"
import { MdSentimentSatisfiedAlt } from "react-icons/md"
import { ImSteam } from "react-icons/im"
import { GiShakingHands } from "react-icons/gi"
import { FaAward } from "react-icons/fa"

const Description = () => {
  return (
    <div className='about-description-wrapper'>
              <div className="inner-row">
                        <div className="description-wrapper-container">
                                  <div className="main-descript">
                                         <h2>We create memorable moving experiences</h2>
                                  </div>
                                  <div className="description-col">
                                        <p>Cras mattis iudicium purus sit amet fermentum at nos hinc posthac, sitientis piros afros. Lorem ipsum dolor sit amet, consectetur adipisici elit, petierunt uti sibi concilium totius Galliae in diem sed eius mod tempor incidunt ut labore et dolore magna.</p>
                                  </div>
                                  <div className="description-col">
                                        <p>Cras mattis iudicium purus sit amet fermentum at nos hinc posthac, sitientis piros afros. Lorem ipsum dolor sit amet, consectetur adipisici elit, petierunt uti sibi concilium totius Galliae in diem sed eius mod tempor incidunt ut labore et dolore magna.</p>
                                  </div>
                        </div>

                        <div className="more-description">
                                 <h2>What distinguishes us from other moving Companies out there</h2>
                                 <p>Fastlink Movers is a moving company in Nairobi that exists to ensure that our clients move swiftly and with no hassle.
                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos explicabo accusantium ratione a deserunt maxime, quos quaerat eius aliquid expedita rem, consectetur necessitatibus reiciendis dolore voluptatibus non? Porro, minima.   </p>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ea autem architecto iure laudantium ipsam blanditiis suscipit, ullam perspiciatis nihil voluptatum similique unde dolorem excepturi. Laborum sunt repudiandae officia illo, corrupti aspernatur pariatur obcaecati reiciendis illum vero fugit ipsam voluptatum architecto, provident culpa. Eius magnam nihil exercitationem quia tenetur hic!</p>

                                 <div className="more-description-container">
                                           <div className="statements-container">
                                                    <Statements />

                                                    <h2>Our Value System</h2>
                                                    <div className="value-box">
                                                             <div className="value">  
                                                                    <span><MdSentimentSatisfiedAlt /></span>
                                                                    <div className="value-text">
                                                                           <h4>Customer Satisfaction</h4>
                                                                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium!</p>
                                                                    </div>
                                                              </div>
                                                              <div className="value">  
                                                                    <span><ImSteam /></span>
                                                                    <div className="value-text">
                                                                           <h4>Teamwork</h4>
                                                                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium!</p>
                                                                    </div>
                                                              </div>
                                                              <div className="value">  
                                                                    <span><GiShakingHands /></span>
                                                                    <div className="value-text">
                                                                           <h4>Honesty</h4>
                                                                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium!</p>
                                                                    </div>
                                                              </div>
                                                              <div className="value">  
                                                                    <span><FaAward /></span>
                                                                    <div className="value-text">
                                                                           <h4>Expertise</h4>
                                                                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laudantium!</p>
                                                                    </div>
                                                              </div>
                                                    </div>
                                           </div>
                                           <div className="image-side">
                                                     <img src={Mover} alt="" />
                                           </div>
                                 </div>
                        </div>
              </div>
    </div>
  )
}

export default Description