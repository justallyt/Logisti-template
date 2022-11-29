import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-scroll"
import { GiSofa } from 'react-icons/gi'
import { GiOfficeChair } from 'react-icons/gi'
import { GiBoxUnpacking } from 'react-icons/gi'
import { FaWarehouse } from "react-icons/fa"
import residential from "../assets/residential.jpg"
import commercial from "../assets/commercial.jpg"
import packing from "../assets/packing.jpg"
import storage from "../assets/storage.jpg"
import { NavLink } from "react-router-dom"

const Solutions = () => {
    const [linkageActive, setLinkageActive] = useState(true)
    const linkageRef = useRef()
    

   useEffect(()=>{
        const heightFromTop = (linkageRef.current.offsetHeight + linkageRef.current.offsetTop) - 400;
     
       window.addEventListener("scroll", () =>{
               if(window.scrollY > heightFromTop){
                     setLinkageActive(false)
               }else{
                    setLinkageActive(true)
               }
     })
   }, [])
  return (
    <div className='solutions-wrapper'  ref={linkageRef}>
                     <div className="solutions-content">
                             <div className={linkageActive ? "solutions-linkages" : "solutions-linkages remove" }>
                                      <div className="inner-row">
                                               <ul>
                                                      <li>
                                                             <Link to='residential' spy={true} smooth={true} duration={1000} offset={-300}>
                                                                      <span><GiSofa /></span>
                                                                      <h3>Residential Moving</h3>
                                                             </Link>
                                                     </li>
                                                      <li>
                                                              <Link to='commercial' spy={true} smooth={true} duration={1000} offset={-300}>
                                                                      <span><GiOfficeChair /></span>
                                                                      <h3>Commercial Moving</h3>
                                                              </Link>
                                                       </li>
                                                        <li>
                                                                <Link to='packing' spy={true} smooth={true} duration={1000} offset={-300}>
                                                                        <span><GiBoxUnpacking /></span>
                                                                         <h3>Packing Supplies</h3>
                                                                  </Link>   
                                                        </li>
                                                        <li>
                                                               <Link to='storage' spy={true} smooth={true} duration={1000} offset={-300}>
                                                                       <span><FaWarehouse /></span>
                                                                       <h3>Storage Solutions</h3>
                                                               </Link>
                                                        </li>
                                                </ul>
                                      </div>
                             </div>
                             <div className="linkage-bodies">
                                      <div className="inner-row">
                                               <div className="linkage-body-moja" id='residential'>
                                                         <div className="linkage-description-column">
                                                                <div className="column-inner">
                                                                          <div className="icon-section">
                                                                                    <span><GiSofa /></span>
                                                                           </div>
                                                                           <h2>Residential Moving</h2>
                                                                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae temporibus illum ipsam distinctio pariatur. Eaque illum deserunt dignissimos ex molestiae, ea natus possimus aut in, sit cumque ab suscipit officia?</p>
                                                                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                                                           <div className="linkage-btn">
                                                                                  <NavLink to={"/service/residential-moving/"}>Read More</NavLink>
                                                                                   <div className="overlay"></div>
                                                                           </div>
                                                                </div>
                                                         </div>
                                                         <div className="linkage-image-column">
                                                                   <img src={residential} alt="" />
                                                         </div>
                                               </div>

                                               <div className="linkage-body-moja" id='commercial'>
                                                         <div className="linkage-image-column">
                                                                   <img src={commercial} alt="" />
                                                         </div>
                                                         <div className="linkage-description-column">
                                                                <div className="column-inner">
                                                                          <div className="icon-section">
                                                                                    <span><GiOfficeChair /></span>
                                                                           </div>
                                                                           <h2>Commercial Moving</h2>
                                                                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae temporibus illum ipsam distinctio pariatur. Eaque illum deserunt dignissimos ex molestiae, ea natus possimus aut in, sit cumque ab suscipit officia?</p>
                                                                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                                                           <div className="linkage-btn">
                                                                                   <NavLink to={"/service/commercial-moving/"}>Read More</NavLink>
                                                                                   <div className="overlay"></div>
                                                                           </div>
                                                                </div>
                                                         </div>
                                               </div>

                                               <div className="linkage-body-moja" id='packing'>
                                                         <div className="linkage-description-column">
                                                                <div className="column-inner">
                                                                          <div className="icon-section">
                                                                                    <span><GiBoxUnpacking /></span>
                                                                           </div>
                                                                           <h2>Packing Supplies</h2>
                                                                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae temporibus illum ipsam distinctio pariatur. Eaque illum deserunt dignissimos ex molestiae, ea natus possimus aut in, sit cumque ab suscipit officia?</p>
                                                                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                                                           <div className="linkage-btn">
                                                                                   <NavLink to={"/service/packaging/"}>Read More</NavLink>
                                                                                   <div className="overlay"></div>
                                                                           </div>
                                                                </div>
                                                         </div>
                                                         <div className="linkage-image-column">
                                                                   <img src={packing} alt="" />
                                                         </div>
                                               </div>

                                               <div className="linkage-body-moja" id='storage'>
                                                         <div className="linkage-image-column">
                                                                   <img src={storage} alt="" />
                                                         </div>
                                                         <div className="linkage-description-column">
                                                                <div className="column-inner">
                                                                          <div className="icon-section">
                                                                                    <span><FaWarehouse /></span>
                                                                           </div>
                                                                           <h2>Storage Solutions</h2>
                                                                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae temporibus illum ipsam distinctio pariatur. Eaque illum deserunt dignissimos ex molestiae, ea natus possimus aut in, sit cumque ab suscipit officia?</p>
                                                                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                                                           <div className="linkage-btn">
                                                                                   <NavLink to={"/service/warehousing/"}>Read More</NavLink>
                                                                                   <div className="overlay"></div>
                                                                           </div>
                                                                </div>
                                                         </div>
                                               </div>
                                      </div>
                             </div>
                     </div>
            </div>
  )
}

export default Solutions