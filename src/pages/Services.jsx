import React from 'react'
import Nav from '../components/Navigation/Nav'
import { introdata } from '../data/introdata'
import PageIntro from '../components/PageIntro'
import ServiceDescription from '../components/ServiceDescription'
import Nudge from "../components/Nudge"
import QuickDetails from "../components/QuickDetails"
import Footer from "../components/Footer"

const Services = () => {
  return (
    <>
         <section id="intro-section">
                    <Nav />
                    <PageIntro data={introdata} identity="What we do" />
         </section>
         <ServiceDescription />
         <Nudge />
         <QuickDetails />
         <Footer />
    </>
  )
}

export default Services