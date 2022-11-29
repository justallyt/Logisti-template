import React from 'react'
import AboutSection from '../components/AboutSection'
import Benefits from '../components/Benefits'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Nav from '../components/Navigation/Nav'
import Nudge from '../components/Nudge'
import Process from '../components/Process'
import QuickDetails from '../components/QuickDetails'
import Solutions from '../components/Solutions'
import Testimonials from '../components/Testimonials'
import "../css/home.css"
const Home = () => {
  return (
    <> 
           <section id="landing">
                    <Nav />
                    <HeroSection />
           </section>
           <AboutSection />
           <Solutions />
           <Process />
           <Benefits />
           <Testimonials />
           <Faqs />
           <Nudge />
           <QuickDetails />
           <Footer />
    </>
  )
}

export default Home