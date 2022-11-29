import React, { useState } from 'react'
import { faqs } from '../data/faqs'
import { VscChevronLeft } from "react-icons/vsc"
import { useInView } from 'react-intersection-observer'; 

const Faqs = () => {
  const [selected, setSelected] = useState("0")
  const { ref, inView } = useInView({
       triggerOnce: true
  })
  const toggleAccordion = (i) =>{
         if(selected === i){
               setSelected(null)
         }
         setSelected(i)
  }
  return (
    <div className='faqs-section'>
            <div className="inner-row">
                     <div className="faqs-content">
                                <div className="intro-text special">
                                         <h1>Find answers and general information</h1>
                                         <p>Read through our frequently asked questions to help you understand how Fastlink handles its services..</p>
                                </div>

                                <div className="faqs-content-row">
                                         <div className="faqs-themselfu-image">
                                                 <div className="about-image">
                                                        <div ref={ref} className={inView ? "orange-overlay remove": "orange-overlay"}></div>
                                                  </div>
                                        <div className="orange-shade" data-aos="zoom-in"></div>
                                         </div>
                                         <div className="faqs-themselfu-column">
                                                   { faqs.map((item, i) => 
                                                           <div className="faq-moja" key={i}>
                                                                <div className={selected === i ? "faq-question active": "faq-question" } onClick={ () => toggleAccordion(i)}>
                                                                           <h3>{item.question}</h3>
                                                                           <span><VscChevronLeft /></span>
                                                                   </div>
                                                                   <div className={selected === i ? "faq-answer active": "faq-answer" }>
                                                                          <div className="faq-answer-inner">
                                                                                 <p>{item.answer}</p>
                                                                          </div>
                                                                   </div>
                                                        </div>
                                                   )}
                                         </div>
                                         
                                </div>
                     </div>
            </div>
    </div>
  )
}

export default Faqs