import React from 'react'
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer'
function Contacts() {
  return (
      <>
        <Navbar />
        <div className='pt-20 min-h-screen'>
          <Contact />
          </div>  
        <Footer /> 
      </>
  )
}

export default Contacts
