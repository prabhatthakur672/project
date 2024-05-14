import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import './About.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function About() {
  return (
    <>
     <Bluehead/>
        <Logonavbar/>
      <Aboutnavbar/>
     
      <Smilehero/>

      {/* morgan about section */}
      <div>
      <div class="container text-center" >
  <div class="row">
    <div class="col-sm-8" style={{textAlign:"left",lineHeight: "2.5rem",marginTop:"3vh"}}>
        <h4 style={{color:"#548eaf"}}>About Us</h4>
        <h6>Expert Dentist in Hinsdale</h6>
     
        <p>Dentistry by Design is a dental practice like no other. We provide the highest level of care with compassionate attention in a place where you are treated like family. We have the skills and equipment to handle issues that range from toothaches to complex mouth restorations. You are our number one priority, and we make sure that you always have a pleasant experience at the dentist.</p>

        <h4 style={{color:"#548eaf"}}>Our Team</h4>
      
        <p>Dr. Michael Morgan is the “doctor to the doctors.” He has completed advanced training at the University of Geneva School of Dental Medicine, and he is an international dental speaker and lecturer. He has also been recognized by his peers as one of the top dentists and cosmetic dentists in Chicago. Many of his patients travel long distances to seek his expertise and experience in cosmetic dentistry, complex restorations, and implant dentistry. Dr. Morgan works with a talented team of professionals who are not only great at what they do, but also care genuinely about their patients.</p>

        <h4 style={{color:"#548eaf"}}>Our Approach</h4>
      
      <p>Dentistry by Design is a stress-free clinic. Our friendly team makes sure that you are comfortable whenever you visit. The consultation is a friendly conversation between you and Dr. Morgan. It’s all about you: what you want to achieve with your smile, and how you want it to be done. Dr. Morgan will explain the pros and cons of each procedure and offer alternatives to help you make an informed decision.</p>

      <h4 style={{color:"#548eaf"}}>Our Technology</h4>
      
      <p>Dr. Morgan has invested in the latest technology and state-of-the equipment for accurate diagnosis and virtually painless treatments. Our low-radiation digital X-rays are a safe alternative to traditional X-rays. We use minimally-invasive laser dentistry for gum disease treatment and cosmetic dentistry preparation.</p>

      <p>Schedule a consultation today with your Hinsdale dentist. Call us or<span style={{color:"#548eaf"}}> request an appointment online</span>.</p>
    </div>

    <div class="col-sm-4">  
       <div className="servicecontainer" >
                <div className="servcard">
                    <div className="icon-container">
                       
                    </div>
                   
         <h3 id="littlecontent" ><i>Gallery<br/> of Smiles</i></h3><br/>
                    < p id='contenthide'>
                    D.R MORGAN CREATES SMILES SO NATURAL NO ONE WILL EVER KNOW YOU HAD WORK DONE .
                    </p>
                    <button type="button" class="btn btn-outline-secondary">See the smiles he's created<ArrowRightAltIcon/></button>
                </div>

                <div className="servcard">
                    <div className="icon-container">
                  
                    </div>
                   
      
      <h4 id="littlecontent" >Beautifully nutural work that <span  style={{color:"#548eaf"}}>blends art and science</span></h4><br/>
                    <p id='contenthide'>
              CALL TODAY:(630)325-2525
                    </p>
                    <button type="button" class="btn btn-outline-secondary">Request an appointment<ArrowRightAltIcon/></button>
                </div>
                <div className="servcard">
                    <div className="icon-container">
                       
                    </div>
                
        <img src='./Images/DDDDDDD.webp' alt='boximagi' style={{height:"200px",width:"250px"}}/>
                 
                </div>
           
  </div>
  </div>
 
</div>
</div>
      </div>
      <Dentimage/>
      <Footer/>

    </>
  )
}

export default About
