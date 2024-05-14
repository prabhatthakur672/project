import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function MercuryFree() {
  return (
    <>
        <Bluehead/>
        <Logonavbar/>
      <Aboutnavbar/>
     
      <Smilehero/>
      <div>

      <div class="container text-center">
  
  <div class="row">
    {/* <div class="col-sm" style={{textAlign:"left",marginTop:"3vh"}}><h4>Meet Dr. Morgan</h4>
        Dr.Morgan in his office at Dentistry by design.<br/>
    <img src='./Images/dr-morgan-teacher.webp' alt='morgan teacher'/>

    </div> */}

    
    <div class="col-sm-8"style={{textAlign:"left",marginTop:"3vh"}}>
    <h4  style={{color:"#548eaf"}}>Mercury-Free Dentist Hinsdale</h4>
    <p>If you’re concerned with your overall health, you are likely concerned with your oral health, too. Many people want a mercury-free dentist like Dr. Michael Morgan. He uses composite filings and biocompatible dental materials.</p>
    <h4  style={{color:"#548eaf"}}>Why the Concern about Mercury?</h4>
    <p>Amalgam fillings, often referred to as silver fillings, contain a variety of metals, including about fifty percent mercury—a higher percentage than silver. The American Dental Association says that this isn’t a safety concern because the amalgam binds the mercury. But many people are still concerned because they have heard reports that mercury vapors may be released during chewing.</p>
       <div className='systembox'>
     
       <div id='fiximage2' style={{lineHeight: "2rem",marginTop:"4vh"}}>
       <h4  style={{color:"#548eaf"}}>Mercury-Free Fillings</h4>
         <span>Dr. Morgan prefers composite fillings for a variety of reasons. The restorations he places are all mercury free. </span><br/>
         <p>Why Dr. Morgan only places composite fillings:</p>
         <ul>
            <li>They bond to your teeth and strengthen them.</li>
            <li>The correct shade of composite is selected to blend with your natural teeth.</li>
            <li>Your teeth will be insulated and less sensitive to heat and cold than with amalgam fillings.</li>
            <li>They do a better job of preserving healthy tooth structure, since the cavity preparation is often much smaller.</li>
         </ul>
         
</div>
    <div id='fiximage'> 
        
    
         <img src='./Images/dr-morgan-teacher.webp' alt='Mercury-Free Fillings' id='picclose' />
         </div>

    </div>
    <p>The photographs on this page show old amalgam fillings replaced by composite fillings. The amalgam filling on the molar is corroded and cracked and openings have developed between the filling and the tooth. Composite fillings, however, won’t corrode and they are bonded to the tooth. When done correctly, the margins are tighter because they are chemically sealed against leakage.</p>

    <h5  style={{color:"#548eaf"}}>Biocompatible Dental Materials</h5>
    <p>Dr. Morgan understands that your oral health can affect your overall health, and he’s concerned. He uses the most biocompatible dental materials available. Patients with metal sensitivities or who are simply concerned about the materials used in their mouth appreciate and benefit from this precaution.</p>
    <p>If you are interested in mercury-free dentistry request an appointment online, or call us to schedule.</p>

    
   

    </div>
   
  
    <div class="col-sm-4">     <div className="servicecontainer" >
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
           
  </div></div>
  </div>
</div>

      </div>
      <Dentimage/>
      <Footer/>
    </>
  )
}

export default MercuryFree;
