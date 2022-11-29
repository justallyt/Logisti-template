import React from 'react'
import "../css/portfolio.css"
import Nav from '../components/Navigation/Nav'
import PageIntro from '../components/PageIntro'
import { introdata } from '../data/introdata'
import dummy1 from "../assets/boxes.jpg"
import dummy2 from "../assets/boxes2.webp"
import dummy3 from "../assets/commercial.jpg"
import dummy4 from "../assets/contactbg.jpg"
import dummy5 from "../assets/landing-1.jpg"
import dummy6 from "../assets/landing-2.jpg"
import dummy7 from "../assets/landing-3.jpg"
import dummy8 from "../assets/landing-4.jpg"
import dummy9 from "../assets/mover.jpg"
import dummy10 from "../assets/packing.jpg"
import Nudge from '../components/Nudge'
import QuickDetails from '../components/QuickDetails'
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <>
           <section id="intro-section">
                    <Nav />
                    <PageIntro data={introdata} identity="What We have Done" />
         </section>
         <div className="portfolio-wrapper">
                  <div className="inner-row">
                            <div className="portfolio-wrapper-content">
                                      <h2>We aim to make a difference with every client we take on and aim to create memorable experiences for them.</h2>

                                      <div className="portfolio-image-row">
                                                <div class="grid-image" data-aos="zoom-in">
                                                      <img src={dummy1} alt="" />
                                                </div>
                                                <div class="grid-image vertical" data-aos="zoom-in">
                                                        <img src={dummy2} alt="" />
                                                </div>
                                                <div class="grid-image horizontal" data-aos="zoom-in">
                                                        <img src={dummy3} alt="" />
                                                </div>
                                                 <div class="grid-image" data-aos="zoom-in">
                                                     <img src={dummy4}alt="" />
                                                 </div>
                                                <div class="grid-image" data-aos="zoom-in">
                                                        <img src={dummy5} alt=""  />
                                                </div>
                                                  <div class="grid-image big" data-aos="zoom-in">
                                                          <img src={dummy6} alt="" />
                                                  </div>
                                                 <div class="grid-image" data-aos="zoom-in">
                                                         <img src={dummy7} alt="" />
                                                 </div>
                                                <div class="grid-image vertical" data-aos="zoom-in">
                                                        <img src={dummy8} alt="" />
                                                </div>
                                              <div class="grid-image" data-aos="zoom-in">
                                                      <img src={dummy9} alt="" />
                                              </div>
                                               <div class="grid-image" data-aos="zoom-in">
                                                       <img src={dummy10}  alt="" />
                                               </div>
                                      </div>
                            </div>
                  </div>
         </div>
         <Nudge />
         <QuickDetails />
         <Footer />
    </>
  )
}

export default Portfolio