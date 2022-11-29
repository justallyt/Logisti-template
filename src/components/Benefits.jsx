import React from 'react'
import { GiTeamIdea } from 'react-icons/gi'
import { HiCreditCard } from "react-icons/hi"
import { GiCardboardBoxClosed } from "react-icons/gi"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { FaBlenderPhone } from "react-icons/fa"
import { FaTruck } from "react-icons/fa"
import { MdSecurity } from "react-icons/md"
import { FaChair } from "react-icons/fa"
const Benefits = () => {
  return (
    <div className='benefits-section'>
           <div className="inner-row">
                   <div className="benefits-section-content">
                            <h3>Your Package, Your Rules</h3>
                            <h1>We continue to pursue that same vision in today's complex, uncertain world, working every day to earn our customers. Here are some of the reasons why you should choose us: </h1>

                            <div className="benefits-content-row">
                                     <div className="benefit-moja">
                                             <div className="icon-section">
                                                     <span><GiTeamIdea /></span>
                                             </div>
                                             <h4>Professionally Trained Movers</h4>
                                             <p>You get an able-bodied expert team handling your valuables with the latest skillsets in packaging.</p>
                                     </div>
                                     <div className="benefit-moja">
                                             <div className="icon-section">
                                                     <span><HiCreditCard /></span>
                                             </div>
                                             <h4>Transparent Pricing</h4>
                                             <p>We offer quality services at affordable prices for the amount of package you'd like to be moved.</p>
                                     </div>
                                     <div className="benefit-moja">
                                             <div className="icon-section">
                                                     <span><GiCardboardBoxClosed /></span>
                                             </div>
                                             <h4>Full Packaging</h4>
                                             <p>We offer full service full packing and unpacking to ensure seamless moving experience for you.</p>
                                     </div>
                                     <div className="benefit-moja">
                                             <div className="icon-section">
                                                     <span><AiFillSafetyCertificate /></span>
                                             </div>
                                             <h4>Careful Handling</h4>
                                             <p>Our expert team take great responsibility to ensure your items are carefully handled.</p>
                                     </div>
                                     <div className="benefit-moja">
                                             <div className="icon-section">
                                                     <span><FaBlenderPhone /></span>
                                             </div>
                                             <h4>24/7 Support</h4>
                                             <p>You can get in touch with us at any time for any clarification or questions you may have.</p>
                                     </div>
                                     <div className="benefit-moja">
                                             <div className="icon-section">
                                                     <span><FaTruck /></span>
                                             </div>
                                             <h4>Fast & Efficient Delivery</h4>
                                             <p>We are 100% dedicated to reducing stress throughout our service delivery.</p>
                                     </div>
                                     <div className="benefit-moja">
                                             <div className="icon-section">
                                                     <span><MdSecurity /></span>
                                             </div>
                                             <h4>Guaranteed Security</h4>
                                             <p>We take security of the items we ferry very seriously and responsible for every package.</p>
                                     </div>
                                     <div className="benefit-moja">
                                             <div className="icon-section">
                                                     <span><FaChair /></span>
                                             </div>
                                             <h4>Special Furniture Care</h4>
                                             <p>All furniture are quilt-pad wrapped, and are carefully carried with care to destination.</p>
                                     </div>
                            </div>
                   </div>
           </div>
    </div>
  )
}

export default Benefits