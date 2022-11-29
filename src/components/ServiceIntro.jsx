import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi"
import { useLocation } from "react-router-dom"
const ServiceIntro = ({ data }) => {
   const locator = useLocation()
   const sliced = locator.pathname.slice(1, 8)
   console.log(sliced)
  return (
    <div className='service-page-wrapper'>
            <div className="page-image-background">
                       <img src={`../${data.image}`} alt="" />
                       <div className="bg-overlay"></div>
            </div>
            <div className="page-texts">
                    <div className="inner-row">
                             <h3>Home <span><HiOutlineChevronRight /></span> Service <span><HiOutlineChevronRight /></span> {data.subtext}</h3>
                             <h1>{data.subtext} </h1>
                    </div>
            </div>
    </div>
  )
}

export default ServiceIntro