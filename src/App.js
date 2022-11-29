import React, { useEffect } from "react"
import "./css/fonts.css"
import './App.css';
import "./css/navbar.css"
import Aos from 'aos';
import 'aos/dist/aos.css'
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom"
import About from "./pages/About";
import Services from './pages/Services'
import SingleService from "./pages/SingleService";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

function App() {
     const location = useLocation()

     const alwaysOnTopPage = () =>{
          window.scrollTo(0, 0);
     }
     useEffect(()=>{
            alwaysOnTopPage()
     },[location])
  Aos.init({
     duration: 1500,
     offset: 100,
     once: true,
})
  return (
       <>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us/" element={<About />} />
                    <Route path="/services/" element={<Services />} />
                    <Route path="/service/:id/" element={<SingleService />} /> 
                    <Route path="/portfolio/" element={<Portfolio /> } />
                    <Route path="/contact-us/" element={<Contact />} />
            </Routes>
       </>
  );
}

export default App;
