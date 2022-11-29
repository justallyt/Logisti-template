import React from 'react'
import Nav from '../components/Navigation/Nav'
import { useParams, NavLink } from "react-router-dom"
import { servicedata } from '../data/servicedata'
import ServiceIntro from '../components/ServiceIntro'
import ServiceNavigation from '../components/ServiceNavigation'
import { BsFileEarmarkPdfFill } from "react-icons/bs"
import  Footer from "../components/Footer"
import QuickDetails from "../components/QuickDetails"
const SingleService = () => {
    const param = useParams()
    const actual_data = servicedata.find(({ ttc }) => ttc === param.id)
  return (
    <>
          <div id="service-intro-section">
                  <Nav />
                  <ServiceIntro data={actual_data} />
          </div>
          <div className="service-body">
                  <div className="inner-row">
                          <div className="service-body-content">
                                  <div className="service-left-column">
                                          <ServiceNavigation lnd={actual_data.ttc} />

                                          <div className="download-resources">
                                                 <h3>Download</h3>
                                                  <div className="download-btn">
                                                           <p>Company Report 2021</p>
                                                           <span><BsFileEarmarkPdfFill /></span>
                                                  </div>
                                                  <div className="download-btn">
                                                           <p>Company Profile</p>
                                                           <span><BsFileEarmarkPdfFill /></span>
                                                  </div>
                                          </div>

                                          <div className="help-box">
                                                    <h2>How can we help you</h2>
                                                    <p>We understand the importance approaching each work integrally and believe in the power of simple and easy communication.</p>

                                                    <div className="btn-contact">
                                                            <NavLink to="/contact/">Contact Us</NavLink>
                                                    </div>
                                          </div>
                                  </div>
                                  <div className="service-right-column">
                                           <h1>Overview</h1>
                                           <p>{actual_data.overview1}</p>
                                           <p>{actual_data.overview2}</p>

                                           <div className="image-box-row">
                                                     <img src={`../${actual_data.image1}`} alt="" />
                                                     <img src={`../${actual_data.image2}`} alt="" />
                                           </div>

                                           <p>{actual_data.overview3}</p>
                                           <p>{actual_data.overview4}</p>
                                  </div>
                          </div>
                  </div>
          </div>
          <QuickDetails />
          <Footer />
    </>
  )
}

export default SingleService