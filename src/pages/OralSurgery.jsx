import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import './About.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function OralSurgery() {
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
        <h4 style={{color:"#548eaf"}}>Oral Surgery</h4><br/><br/>
        <p>Coming soon!</p>
       
        
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

export default OralSurgery
