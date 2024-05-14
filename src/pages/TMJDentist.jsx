import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function TMJDentist() {
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

    
    <div class="col-sm-8"style={{textAlign:"left",marginTop:"5vh"}}>
    <h4  style={{color:"#548eaf"}}>TMJ Dentist Hinsdale</h4>
    <p>The temporomandibular joint (TMJ) connects your lower jaw, or mandible, to the temporal bone on the side of your head. This joint is involved in the movement needed to speak, chew, and yawn.</p>
    <h4  style={{color:"#548eaf"}}>TMJ Symptoms</h4>


    <p>What are some symptoms of a TMJ disorder?</p>
    <ul>
        <li>Headaches</li>
        <li>A change in the way your upper and lower teeth fit together</li>
        <li>Radiating pain in your face, jaw, or neck</li>
        <li>Jaw clicking, popping, locking, or stiffness</li>
    </ul>
    <p>TMJ disorder can cause a lot of discomfort and pain. Trauma and grinding or clenching your teeth can make the disorder worse. Sometimes the cause is unknown.</p>

       <div className='systembox'>
     
       <div id='fiximage2' style={{lineHeight: "2rem"}}>
    
         <span>At times, self-care can help resolve minor TMJ issues. It may be recommended that you alternate applying heat and ice in the joint area. Sometimes jaw exercises and over-the-counter, anti-inflammatory medication provide relief. But the problem should not be self-diagnosed and treated without an examination by a <span  style={{color:"#548eaf"}}>dentist</span>. If you try to treat it yourself without professional supervision, it can linger or get worse. </span><br/>
         
         
</div>
    <div id='fiximage'> 
        
    
         <img src='./Images/dr-morgan-teacher.webp' alt='Mercury-Free Fillings' id='picclose' />
         </div>

    </div>
    <p>We can’t call Dr. Morgan a TMJ dentist because there is no recognized specialty in dentistry for the disorder. But he does have the advanced training and experience required to examine and test the joint, and to diagnose and treat the disorder.</p>


    <h5  style={{color:"#548eaf"}}>A Dentist with TMJ-Specific Training</h5>
    <p>Dr. Morgan received his TMJ training from the Pankey Institute for Advanced Dental Studies and The Dawson Academy. These institutes are well known for high-quality, advanced dental training.</p>
    <p>Dr. Morgan understands how your jaw and the joints and muscles associated with it should function. You will receive a thorough examination to provide accurate diagnosis and treatment.</p>
    <h5  style={{color:"#548eaf"}}>Getting Relief for Your TMJ Pain and Discomfort</h5>
    <p>Many patients who suffer with TMJ disorder have experienced relief after receiving treatment from Dr. Morgan. He uses an oral appliance—the NTI-tss. First, impressions of your teeth are taken to make a custom appliance for you. If you wear the appliance each night, it will stabilize your teeth, help your muscles move the joint to its normal position, and reduce teeth grinding and clenching. The relaxed muscles can alleviate head, facial, and neck pain.</p>
    <p>If you think you have TMJ disorder, Dr. Morgan can help. Call to schedule an appointment for an examination or <span style={{color:"#548eaf"}}>request an appointment online.</span> </p>

    
   

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

export default TMJDentist;
