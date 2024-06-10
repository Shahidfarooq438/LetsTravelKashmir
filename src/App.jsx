import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import MainCard from './MainCard.jsx'
import Video from './Video.jsx'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import aharbal from './assets/aharbal.jpg'
import gulmarg from './assets/gulmarg.jpg'
import sonamarg from './assets/sonamarg.jpg'
import pahalgam from './assets/pahalgam.jpg'
import kaisar from './assets/kaisar.jpg'


function App() {

  return (
   <>
    <FloatingWhatsApp phoneNumber='+91 9682658662' accountName="Let's Trip Kashmir" avatar={kaisar}/>
   <Navbar />
   <Video/>
   <MainCard/>
   <h2 className='dest-title'>Recommended & Popular Destinations</h2>
   <div className='card-container'>
    <Card name="Aharbal" image={aharbal}/>
    <Card name="Gulmarg" image={gulmarg}/>
    <Card name="Sonamarg" image={sonamarg}/>
    <Card name="Pahalgam" image={pahalgam}/>
   </div>
   <Footer/>
   </>
  )
}

export default App
