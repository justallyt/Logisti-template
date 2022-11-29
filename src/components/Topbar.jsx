import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { FaPhoneAlt } from "react-icons/fa"
import { HiOutlineMailOpen } from "react-icons/hi"
import { TfiAlarmClock } from "react-icons/tfi"
const Topbar = () => {
  return (
    <div className='topbar-section'>
            <div className="inner-row">
                     <div className="topbar-content">
                              <div className="social-links">
                                      <ul>
                                             <li><a href="s"><FaFacebookF /></a></li>
                                             <li><a href="s"><FaTwitter /></a></li>
                                             <li><a href="s"><AiFillInstagram /></a></li>
                                      </ul>
                              </div>
                              <div className="other-details">
                                     <div className="phone">
                                             <FaPhoneAlt />
                                             <h2>+254 712345678</h2>
                                     </div>
                                     <div className="email">
                                            <HiOutlineMailOpen />
                                            <h2>care@fastlinkmovers.co.ke</h2>
                                     </div>
                                     <div className="hours">
                                             <TfiAlarmClock />
                                             <h2>Mon - Sat: 08:00 - 20:00</h2>
                                     </div>
                              </div>
                     </div>
            </div>
    </div>
  )
}

export default Topbar