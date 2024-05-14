import React from 'react'
import Navbar from '../componantes/navbar/Logonavbar' ;
import Header from '../componantes/navbar/Header';
import Bluehead from '../componantes/navbar/Bluehead';
import Appointment from './Appointment';





function Home() {
  return (
  
      <>
      <Navbar/>
      <Header/>
      <Bluehead/>
      
      <Appointment/>
      
      
      
    
      </>
   
  )
}

export default Home
