import React from 'react'
import "../css/footer.css"
import footerlogo from "../assets/logo-dark.png"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
const Footer = () => {
  return (
          <>
                     <div className='footer-section'>
            <div className="inner-row">
                      <div className="footer-content">
                                <div className="description-column">
                                         <div className="footer-logo">
                                                <img src={footerlogo} alt="" />
                                         </div>
                                         <p>Our countrywide logistics expertise, advanced supply chain technology & customized logistics solutions will help you develop and implement successful supply.</p>

                                         <div className="footer-social-links">
                                                 <ul>
                                                     <li><a href="s"><FaFacebookF /></a></li>
                                                     <li><a href="s"><FaTwitter /></a></li>
                                                     <li><a href="s"><AiFillInstagram /></a></li>
                                                </ul>
                                         </div>
                                </div>
                                <div className="links-column">
                                       <h3>Who we are</h3>
                                        <ul>
                                             <li><a href="s">About Us</a></li>
                                                <li><a href="s">Meet Our Team</a></li>
                                                <li><a href="s">Work with Us</a></li>
                                             <li><a href="s">Case studies</a></li>
                                              <li><a href="s">Get in Touch</a></li>
                                        </ul>
                                </div>
                                <div className="links-column">
                                        <h3>What we Do</h3>
                                          <ul>
                                                  <li><a href="s">Residential Moving</a></li>
                                                  <li><a href="s">Office Moving</a></li>
                                                  <li><a href="s">Packaging</a></li>
                                                  <li><a href="s">Warehousing</a></li>
                                                  <li><a href="s">Supply Chain</a></li>
                                          </ul>
                                </div>
                                <div className="contact-column">
                                           <h3>Contact Details</h3>
                                           <p>Phone: 0712345678</p>
                                           <p>Email: logistics@fastlinkmovers.co.ke</p>
                                           <p>Address: 2308 Adlife Plaza, Kilimani</p>
                                           <p>Hours: Mon - Fri: 8am - 7pm</p>
                                </div>
                      </div>
            </div>
    </div>

                  <div className="copyright-content">
                        <div className="inner-row">
                               <div className="extra-details">
                                         <a href="s">Terms & Conditions</a> <span>|</span>
                                         <a href="s">Privacy Policy</a> <span>|</span>
                                         <a href="s">Sitemap</a> 
                               </div>
                               <p>&copy; {new Date().getFullYear()} Fastlink Movers Ltd</p>
                        </div>
                 </div>
          </>
  )
}

export default Footer