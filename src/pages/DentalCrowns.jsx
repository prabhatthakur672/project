import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function DentalCrowns() {
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
       <div className='systembox'>
         <div id='fiximage'> 
         <h4  style={{color:"#548eaf"}}>Dental Crowns & Bridges</h4>
         <p> Crowns and Bridges</p>
         <img src='./Images/dr-morgan-teacher.webp' alt='morgan teacher' id='picclose' />
         </div>
       <div id='fiximage2' style={{lineHeight: "2rem",marginTop:"4vh"}}> <span>Having a missing tooth or multiple missing teeth can make daily functions difficult and cause oral health problems. Dr. Morgan uses crowns to restore a patient’s tooth to full function, preserve its structure, and improve its appearance, and he uses bridges to replace missing teeth.</span><br/>
   
   </div></div><br/>
    <p>"Teeth that are broken, cracked, or severely decayed can cause significant pain and discomfort, and can eventually cause the patient to lose the tooth completely”.</p>
    <h5  style={{color:"#548eaf"}}>Crowns, Inlays, and Onlays</h5>
    <p>A crown is often necessary when a tooth has become severely decayed, to the point where a filling will not be sufficient. A dental crown enables the patient to keep as much tooth structure as possible and restores the strength and function of the tooth.</p>

    <p>Inlays and onlays are restorations that fill portions of a tooth, restoring the tooth’s strength and function. A crown is an onlay that covers the entire tooth.</p>

   
    <h5  style={{color:"#548eaf"}}>Getting a Crown</h5>
    <p>Getting a crown requires two appointments. During the first appointment, the remaining tooth structure is prepared and any decay is removed. Then, Dr. Morgan takes an impression of your mouth and places a temporary crown, which you will wear until your second appointment.</p>
    <p>The impression of your tooth is then sent to our dental lab, where your types of dental crowns will be custom-created using high-quality, safe dental materials.</p>
    <p>During your second appointment, Dr. Morgan will remove your temporary crown and place your permanent crown, cementing it to your remaining tooth structure. The crown will then be sculpted to match your bite and polished for an attractive finish.</p>
    <p>There is a difference between metal-based crowns and all porcelain crowns. Click here to learn more about porcelain crowns.</p>

    <h5  style={{color:"#548eaf"}}>Fixed Bridges</h5>
    <p>What is a dental bridge? A fixed dental bridge acts as a replacement for a missing tooth or multiple missing teeth in the same row. It is a permanent prosthetic appliance that uses crowns to restore the smile.</p>
    <ul>
        <li>
        	Fixed bridges are often the treatment of choice because they have a natural appearance and provide strength and stability, allowing the patient to eat and speak normally.
        </li>
        <li>	If a patient is missing teeth, it is important to replace them in some way, such as with a bridge or dental implants. Spaces in the smile can result in uneven wear on the existing teeth and can cause them to shift out of place.</li>
    </ul>
    <h5  style={{color:"#548eaf"}}>Getting a Fixed Bridge</h5>
    <p>A fixed bridge typically takes two appointments to complete. During the first appointment, the teeth on either side of the gap, called the abutment teeth, are prepared so crowns can be placed on top of them.</p>
    <p>Dr. Morgan will then take an impression of your mouth, which he will send to the lab where the crowns and the pontic (the false tooth to replace the missing tooth) will be created. In the meantime, you will wear a temporary bridge.</p>
    <p>During the second appointment, the temporary bridge is removed and a permanent dental bridge is cemented into place. Click here to learn more about a dental bridge.</p>
    <h5  style={{color:"#548eaf"}}>Restorative Dentistry in Hinsdale, Illinois</h5>
    <p>Dr. Morgan has not only undergone advanced training in restorative and cosmetic dentistry, but he has also lectured on the subjects around the world. If you are looking for a qualified, trustworthy dentist to restore your teeth, visit Dentistry by Design. We proudly serve patients in Hinsdale, Clarendon Hills, La Grange, Oak Brook, Downers Grove, and Westmont.</p>


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
              
  </div></div>
  </div>
</div>

      </div>
      <Dentimage/>
      <Footer/>
    </>
  )
}

export default DentalCrowns;
