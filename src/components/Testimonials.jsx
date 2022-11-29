import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

const Testimonials = () => {
  const nextRef = useRef()
  const prevRef = useRef()
  return (
    <div className='testimonials-section'>
           <div className="inner-row">
                   <div className="testimonials-content">
                            <div className="intro-text">
                                      <h1>Hear from our customers</h1>
                                      <p>We are proud of the service we provide and stand by every product we carry. Read our testimonials from our customers.</p>
                            </div>

                            <div className="testimonials-row">
                                     <div ref={nextRef} className="btn next-btn">
                                                 <span><HiOutlineArrowNarrowRight /></span>
                                     </div>
                                     <div ref={prevRef} className="btn prev-btn">
                                               <span> <HiOutlineArrowNarrowLeft /> </span>
                                     </div>
                                     <Swiper
                                                slidesPerView={1}
                                                pagination={{
                                                        clickable: true,
                                                 }}
                                                 navigation={{
                                                    prevEl: prevRef.current ? prevRef.current : undefined,
                                                    nextEl: nextRef.current ? nextRef.current : undefined,
                                                  }}
                                                  onInit={(swiper) => {
                                                    swiper.params.navigation.prevEl = prevRef.current;
                                                    swiper.params.navigation.nextEl = nextRef.current;
                                                    swiper.navigation.init();
                                                    swiper.navigation.update();
                                                  }}
                                                  breakpoints={{
                                                    1100: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 30,
                                                    },
                                                    768: {
                                                      slidesPerView: 2,
                                                      spaceBetween: 30,
                                                    },
                                                    
                                                  }}
                                                modules={[Pagination, Navigation]}
                                                 className="mySwiper"
                                    >
                                            <SwiperSlide>
                                                     <div className="slide-moja">
                                                              <p>Fastlink is the best of the best, and expertly trained team members who take the extra step and go the extra mile, all to fulfill our dedicated promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment.</p>

                                                              <div className="details">
                                                                      <h5>MaryAnne Angisa</h5>
                                                                      <p>Kileleshwa,Nairobi</p>
                                                              </div>
                                                     </div>

                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="slide-moja">
                                                              <p>Fastlink is the best of the best, and expertly trained team members who take the extra step and go the extra mile, all to fulfill our dedicated promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment.</p>

                                                              <div className="details">
                                                                      <h5>Sandra Paul</h5>
                                                                      <p>Kilimani,Nairobi</p>
                                                              </div>
                                                     </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="slide-moja">
                                                              <p>Fastlink is the best of the best, and expertly trained team members who take the extra step and go the extra mile, all to fulfill our dedicated promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment.</p>

                                                              <div className="details">
                                                                      <h5>Paul Tierney</h5>
                                                                      <p>Umoja, Nairobi</p>
                                                              </div>
                                                     </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="slide-moja">
                                                              <p>Fastlink is the best of the best, and expertly trained team members who take the extra step and go the extra mile, all to fulfill our dedicated promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment.</p>

                                                              <div className="details">
                                                                      <h5>Aswito Nyamama</h5>
                                                                      <p>Kitengela,Nairobi</p>
                                                              </div>
                                                     </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="slide-moja">
                                                              <p>Fastlink is the best of the best, and expertly trained team members who take the extra step and go the extra mile, all to fulfill our dedicated promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment.</p>

                                                              <div className="details">
                                                                      <h5>Simba Arati</h5>
                                                                      <p>Karen,Nairobi</p>
                                                              </div>
                                                     </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <div className="slide-moja">
                                                              <p>Fastlink is the best of the best, and expertly trained team members who take the extra step and go the extra mile, all to fulfill our dedicated promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment.</p>

                                                              <div className="details">
                                                                      <h5>Paul Otuoma</h5>
                                                                      <p>Riuru,Membley</p>
                                                              </div>
                                                     </div>
                                            </SwiperSlide>
                                           
                                      </Swiper>
                            </div>
                   </div>
           </div>
    </div>
  )
}

export default Testimonials