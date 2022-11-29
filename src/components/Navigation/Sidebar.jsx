import React, { useContext } from 'react'
import logo from "../../assets/logo-dark.png"
import { IoCloseOutline } from "react-icons/io5"
import { sidebarContext } from './context'

const Sidebar = () => {
    const [status, setStatus] = useContext(sidebarContext)

    const toggleSidebar = () => {
          setStatus(!status)
    }
  return (
    <div className={status ? 'sidebar-section active' : 'sidebar-section'}>
           <div className="sidebar-inner-row">
                   <div className="sidebar-content">
                            <div className="side-logo">
                                    <img src={logo} alt="" />
                            </div>
                            <span className='close-btn' onClick={toggleSidebar}><IoCloseOutline /></span>

                            <nav>
                                    <ul>
                                            <li><a className='active' href="s">Home</a></li>
                                            <li><a href="s">About</a></li>
                                            <li><a href="s">Services</a></li>
                                            <li><a href="s">Portfolio</a></li>
                                            <li><a href="s">Contact Us</a></li>
                                    </ul>

                                     <div className="quote-btn">
                                             <a href="s">Get a Quote</a>
                                     </div>
                            </nav>
                   </div>
           </div>
    </div>
  )
}

export default Sidebar