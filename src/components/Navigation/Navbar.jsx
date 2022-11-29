import React, { useContext } from 'react'
import Topbar from '../Topbar'
import logo from "../../assets/logo-dark.png"
import { sidebarContext } from './context'
import { NavLink , useLocation } from "react-router-dom"

const Navbar = () => {
  const [status, setStatus] = useContext(sidebarContext)

  const handleToggle = () =>{
          setStatus(!status)
  }

  const locator = useLocation()
  const slicedLocator =  locator.pathname.slice(1, 8)
  return (
    <>
        <div className="navbar-container">
              <Topbar />
              <div className="menu-nav">
                  <div className="inner-row">
                          <div className="menu-nav-content">
                                  <div className="logo">
                                           <a href="s">
                                                   <img src={logo} alt="Logo" />
                                           </a>
                                 </div>
                                 <nav>
                                         <ul>
                                               <li><NavLink activeclassname="active" to="/" end>Home</NavLink></li>
                                               <li><NavLink activeclassname="active" to="/about-us/">About</NavLink></li>
                                               <li><NavLink activeclassname="active" to="/services/" className={slicedLocator === "service" ? "active": ""}>Services</NavLink></li>
                                               <li><NavLink activeclassname="active" to="/portfolio/">Portfolio</NavLink></li>
                                               <li><NavLink activeclassname="active" to="/contact-us/">Contact Us</NavLink></li>
                                         </ul>

                                         <div className="quote-btn">
                                                  <a href="s">Get a Quote</a>
                                         </div>
                                 </nav>

                                 <div className="sidebar-trigger" onClick={handleToggle}>
                                           <span></span>
                                           <span></span>
                                           <span></span>
                                 </div>
                          </div>
                  </div>
               </div>
           </div>
    </>
  )
}

export default Navbar