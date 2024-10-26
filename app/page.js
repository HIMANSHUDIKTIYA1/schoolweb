import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Main from '@/components/Main.jsx'
import Album from '@/components/album.jsx'
import Events from '@/components/Events.jsx'
import About from '@/components/About.jsx'
import Footer from '@/components/Footer.jsx'
function page() {
  return (
    <div className=' bg-black ' >
    
     
  
     <Navbar/>
     <Main/>
     <About/>
 <Events/>
 <Album/>
 <Footer/>
    </div>
  )
}

export default page