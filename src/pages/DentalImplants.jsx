import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function DentalImplants() {
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
    <h4  style={{color:"#548eaf"}}>Cosmetic Dentistry Hinsdale</h4>
    <p>Top Cosmetic Dentist in Hinsdale, IL</p>
       <div className='systembox'>
         <div id='fiximage'> 
      
        
         <img src='./Images/dr-morgan-teacher.webp' alt='morgan teacher' id='picclose' />
         </div>
       <div id='fiximage2' style={{lineHeight: "2rem",marginTop:"3vh"}}> <span>What is cosmetic dentistry? Tired teeth and dull smiles can make you hide your mouth behind your hand. Transform your smile and end embarrassment with cosmetic dentistry at Dentistry by Design in Illinois. Your Hinsdale cosmetic dentist can create your dream smile whether you need quick teeth whitening or a full mouth reconstruction. We offer a wide range of cosmetic dental services, including <span  style={{color:"#548eaf"}}>veneers, teeth whitening, Invisalign,</span> Six Month Smiles, cosmetic bonding, and smile makeovers.</span>
     
   </div></div>
   <h5  style={{color:"#548eaf"}}>Porcelain Veneers</h5>
   

    <p>Veneers are one of the most popular cosmetic dentistry procedures at our dental practice. Veneers hide major flaws and close gaps between teeth. Our patients love how these thin porcelain facings turn even the most lackluster mouths into Hollywood smiles. Our stunning porcelain veneers are carefully matched to the color and appearance of your natural teeth for a healthy and lifelike result.</p>


            
   

   
    <h5  style={{color:"#548eaf"}}>Teeth Whitening</h5>

 <p>Teeth whitening is another popular procedure that can improve your smile in just one appointment. Dr. Morgan uses a <span style={{color:"#548eaf"}}>laser whitening</span> system to lighten your teeth up to ten shades in a single session! It’s perfect if you want dramatic results quickly. If you would rather whiten your teeth at home, we also offer professional-strength take-home bleaching trays.</p>


    <h5  style={{color:"#548eaf"}}>Invisalign and Six Month Smiles</h5>
    <p>Invisalign and Six Month Smiles are the modern orthodontic solutions you’ve been waiting for. Now you can straighten your teeth in secret and in the shortest time possible. Invisalign uses clear, removable aligners to reposition your teeth gradually, while Six Month Smiles focuses on moving teeth that show when you smile.</p>
   
    <h5  style={{color:"#548eaf"}}>Cosmetic Bonding</h5>
 <p>Cosmetic bonding is the application of tooth-colored resin to the tooth’s surface to hide minor imperfections like cracks, chips, and stains. Unlike veneers, however, bonding is faster and more affordable. Come in the morning and leave a few hours later with a brand new smile!</p>
 <p>Dr. Morgan is one of the leading cosmetic dentist not just in Hinsdale but in the country. Call us now to schedule a consultation.</p>


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

export default DentalImplants;
