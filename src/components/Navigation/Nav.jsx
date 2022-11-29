import React, { useState } from 'react'
import Navbar from './Navbar'
import ScrolledNavbar from "./ScrolledNavbar"
import Sidebar from './Sidebar'
import { sidebarContext } from './context'
const Nav = () => {
  const [ sidebarStatus, setSidebarStatus] = useState(false)
  return (
    <>
          <sidebarContext.Provider value={[sidebarStatus, setSidebarStatus]}>
                   <Navbar />
                   <ScrolledNavbar />
                   <Sidebar />
          </sidebarContext.Provider>
    </>
  )
}

export default Nav