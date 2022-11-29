import React from 'react'
import Nav from '../components/Navigation/Nav'
import PageIntro from '../components/PageIntro'
import { introdata } from '../data/introdata'
import "../css/contact.css"
import Footer from "../components/Footer"
const Contact = () => {
  return (
    <>
          <section id="intro-section">
                    <Nav />
                    <PageIntro data={introdata} identity="Contact Us" />
         </section>

         <div className="contact-wrapper">
                 <div className="inner-row">
                          <div className="contact-intro">
                                    <h3>Get in Touch</h3>
                                    <h1>Contact Us</h1>
                                    <p>We understand the importance of approaching each work integrally and believe in the power of simple and easy communication. Therefore feel free to reach out to us for any questions you might have.</p>
                          </div>
                          <div className="form-section">
                                      <form action="">
                                            <div className="form-row">
                                                     <div className="form-column">
                                                             <label htmlFor="name">Name</label>
                                                             <input type="text" name="" className='form-control' placeholder='Name'/>
                                                     </div>
                                                     <div className="form-column">
                                                             <label htmlFor="name">Email</label>
                                                             <input type="email" name="" className='form-control' placeholder='Email' />
                                                     </div>
                                            </div>
                                            <div className="form-row">
                                                     <div className="form-column">
                                                             <label htmlFor="Phone">Phone</label>
                                                             <input type="text" name="" className='form-control' placeholder='Phone' />
                                                     </div>
                                                     <div className="form-column">
                                                             <label htmlFor="residence">Residence</label>
                                                             <input type="textl" name="" className='form-control' placeholder='Residence'/>
                                                     </div>
                                            </div>
                                            <label htmlFor="Message">Message</label>
                                            <textarea name="" id="" cols="30" rows="10"></textarea>

                                            <button type="submit">Submit Request</button>
                                      </form>
                          </div>
                 </div>

                 
         </div>
         <div className="map-marker">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6855.228991342961!2d36.78325234898286!3d-1.2944072808551454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a1f526880b%3A0x6888136c7fdda1ac!2sAdlife%20Plaza!5e0!3m2!1sen!2sus!4v1669687994686!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
         </div>
         <Footer />
    </>
  )
}

export default Contact