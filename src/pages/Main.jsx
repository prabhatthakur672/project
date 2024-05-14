import React from 'react'
import Navbar from '../componantes/navbar/Logonavbar' ;
import Header from '../componantes/navbar/Header';
import Bluehead from '../componantes/navbar/Bluehead';
import Appointment from './Appointment';
import Meetdoctor from '../componantes/Meetdoctor';
import Smilegallary from './SmileGallery';
import Services from './Services';
import Patient from './Patient';
import Teacher from './Teacher';
import Dentimage from './Dentimage';
import Footer from '../componantes/footer/Footer';
function Main() {
  return (
    <>
        <div>
        <Bluehead/>
       <Navbar/>
      <Header/>
    
      <Appointment/>

 <Meetdoctor/>
        <Smilegallary/>
        <Services/>
        <Patient/>
        <Teacher/>
        <Dentimage/>
        <Footer/>
  </div>
     
    </>
  )
}

export default Main
