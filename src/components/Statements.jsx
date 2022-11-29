import React, { useState} from 'react'
import { IoRocketOutline } from "react-icons/io5"
import { IoTelescopeOutline } from 'react-icons/io5'

const Statements = () => {
    const [move, setMove] = useState('normal')
    const [ active, setActive ] = useState(0) 
 const moveRight = () =>{
        setMove("right")
        setActive(1)
  }
  const moveBack = () =>{
        setMove("normal")
        setActive(0)
  }
  return (
    <div className="grid-column-statements">
        <div className="statements-container">
             <div className={move === "right" ? "statement-drag moved":"statement-drag"}>
                      <div className="statement-box">
                             <span><IoRocketOutline /></span>
                             <h3>Our Mission</h3>
                             <p>Utilize decades of exprerience       to serve our customers better.</p>
                   </div>
                   <div className="statement-box">
                             <span><IoTelescopeOutline /></span>
                             <h3>Our Vision</h3>
                             <p>Providing world class       optimized transportation across       east africa.</p>
                   </div>
             </div>
    </div>
    <div className="statement-btns">
            <span className={active === 0 ? 'active': ""} onClick={moveBack}></span>
            <span className={active === 1 ? 'active': ""} onClick={moveRight}></span>
    </div>
</div>
  )
}

export default Statements