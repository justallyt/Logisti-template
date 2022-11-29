import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi"
const PageIntro = ({ data, identity}) => {
  const real_data = data.filter(item => (item.subtext === identity))
  return (
    <div className='page-wrapper'>
            <div className="page-image-background">
                       <img src={`../${real_data[0].image}`}alt="" />
                       <div className="bg-overlay"></div>
            </div>
            <div className="page-texts">
                    <div className="inner-row">
                             <h3>Home <span><HiOutlineChevronRight /></span> {real_data[0].title }</h3>
                             <h1>{real_data[0].subtext} </h1>
                    </div>
            </div>
    </div>
  )
}

export default PageIntro