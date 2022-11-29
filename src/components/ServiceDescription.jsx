import React from 'react'
import "../css/services.css"
import Solutions from './Solutions'

const ServiceDescription = () => {
  return (
    <div className='service-description-wrapper'>
              <div className="inner-row">
                      <div className="service-description-content">
                               <div className="intro-service-text">
                                      <h3>We manage lead logistics for world's multinational</h3>
                                      <p>Our countrywide logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies from end to end.</p>
                               </div>
                      </div>
              </div>
              <div className="service-description-extra">
                      <Solutions />
              </div>
    </div>
  )
}

export default ServiceDescription