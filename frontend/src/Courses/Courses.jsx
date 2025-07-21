import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'


function Courses() {
    
  return (
      <>
          <Navbar />
          <div className='pt-20 min-h-screen'>
          <Course />
          </div>
          <Footer /> 
      </>
  )
}

export default Courses
