import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import './About.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function AppointmentForm() {
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
    <div class="col-sm-8" style={{textAlign:"left",lineHeight: "1rem",marginTop:"3vh"}}>
        <h4 style={{color:"#548eaf"}}>Request an Appointment</h4><br/><br/>
        <b>Dentistry by Design</b><br/><br/>
        <b>Dr. Michael Morgan</b><br/><br/>
       <p>28 West Chicago Ave.</p>
       <p>Hindsdale, IL 60521</p>
       <p><b>Phone: </b>(630) 325-2525</p>
       <p>Contact us today to schedule an appointment for an exam or a consultation with Dr. Morgan.</p>
        <p><b>Request an Appointment Form</b></p>
        <ul>
            <li>	We look forward to your visit! Please complete the form below. A staff member will contact you to schedule a date and time convenient for you.</li>
        </ul>
        <p>Click here to view our <span style={{color:"#548eaf"}}>privacy policy.</span> </p>
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

export default AppointmentForm;
