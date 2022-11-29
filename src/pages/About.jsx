import React from 'react'
import "../css/about.css"
import Nav from '../components/Navigation/Nav'
import { introdata } from '../data/introdata'
import PageIntro from '../components/PageIntro'
import Description from '../components/Description'
import Process from "../components/Process"
import Benefits from "../components/Benefits"
import Team from '../components/Team'
import QuickDetails from '../components/QuickDetails'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
         <section id="intro-section">
                    <Nav />
                    <PageIntro data={introdata} identity="About" />
         </section>
         <Description />
         <Process />
         <Benefits />
         <Team />
         <QuickDetails />
         <Footer />
    </>
  )
}

export default About