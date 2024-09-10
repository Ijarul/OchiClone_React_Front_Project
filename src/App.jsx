import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Featured2 from './components/Featured2';
import Client from './components/Client';
import Client2 from './components/Client2';
import Eyes2 from './components/Eyes2';


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
       <div className='w-full h-screen text-black'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About />
        <Eyes />
        <Featured />
        <Featured2/>
        <Client />
        <Client2 />
        <Cards />
        <Eyes2/>
      
        <Footer />

       </div>
  )
}

export default App
