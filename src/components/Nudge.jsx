import React from 'react'
import { NavLink } from "react-router-dom"
const Nudge = () => {
  return (
    <div className='nudgeSection'>
           <div className="inner-row">
                   <div className="nudge-content">
                          <h2>Preparing to Move?</h2>
                          <h2>You've landed in the right place.</h2>
                          <NavLink to={"/contact-us/"}>Get Started</NavLink>
                   </div>
           </div>
    </div>
  )
}

export default Nudge