import React from 'react'
import { NavLink, useParams } from "react-router-dom"

const ServiceNavigation = ({lnd}) => {
 const param = useParams()
  return (
    <div className='service-navigation'>
           <ul>
                 <li><NavLink to="/service/residential-moving/" className={param.id === "residential-moving" ? "activelink": ""}>Residential Moving</NavLink></li>
                 <li><NavLink className={param.id === "commercial-moving" ? "activelink": ""} to={"/service/commercial-moving/"}>Commercial Moving</NavLink></li>
                 <li><NavLink className={param.id === "packaging" ? "activelink": ""} to={"/service/packaging/"}>Packaging</NavLink></li>
                 <li><NavLink className={param.id === "warehousing" ? "activelink": ""} to={"/service/warehousing/"}>Warehousing</NavLink></li>
                 <li><NavLink className={param.id === "relocation" ? "activelink": ""} to={"/service/relocation/"}>Relocation</NavLink></li>
           </ul>
    </div>
  )
}

export default ServiceNavigation