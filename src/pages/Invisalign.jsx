import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function Invisalign() {
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
   
<h4  style={{color:"#548eaf"}}>Invisalign in Hinsdale,IL</h4><br/>
    <p>Teeth that are misaligned or crowded, or that have gaps between them can be precisely aligned without people even noticing you’re wearing braces. Invisalign— <span style={{color:"#548eaf"}}>invisible braces straighten your teeth without brackets, metal, or wire </span> —and in half the time of traditional braces. This gives you the opportunity to get the straight teeth you’ve always wanted without worrying about the negative impact traditional braces would have on your appearance.</p>
    <h4  style={{color:"#548eaf"}}>The Invisalign Process</h4>
    <p>X-rays, photos, and impressions of your teeth will be taken. A 3-D model of your teeth is also taken to help Dr. Morgan develop a treatment plan for the exact movement of your teeth. The x-rays, 3-D model, and pictures of your teeth are sent to the Invisalign laboratory to make a series of clear, customized aligners designed to move your teeth to the correct position.</p>
    
       <div className='systembox'>
      
       <div id='fiximage2' style={{lineHeight: "2rem"}}>
 
        <p>When you first put the clear braces over your teeth, you’ll find them to be somewhat uncomfortable. The aligners will gently move your teeth into a new position. They will feel more comfortable in a few days but continue to wear them for two weeks before switching to the next set. This allows time for your teeth to adjust to the new position. After you’ve worn all of the aligners, you’ll have the beautiful smile you want.</p>
         
</div>
    <div id='fiximage'> 
        
    
         <img src='./Images/dr-morgan-teacher.webp' alt='Mercury-Free Fillings' id='picclose' />

         </div>

    </div>
   

   <p>Many people choose Invisalign because it is an easy way to get the straight teeth they want without the unpleasant side effects most people associate with traditional metal braces. Once you have a consultation with our experienced team, you will be able to make an informed decision whether this treatment option is best for you. While Invisalign works for most people, it isn’t the right solution for all.</p>
   <h4  style={{color:"#548eaf"}}>Invisalign Advantages</h4>
   <ul>
    <li>	The aligners are made of medical-grade plastic, so they are much more comfortable than traditional braces.</li>
    <li>	They straighten your teeth in half the time of metal braces.</li>
    <li>	It’s easier to maintain good oral hygiene, because you take them off when you eat, and when you brush and floss your teeth</li>
    <li>	They are clear, so from a conversational distance, people won’t be able to tell you’re wearing them.</li>
    <li>	They move your teeth more precisely than traditional braces.</li>
   </ul>
<p>Dr. Morgan is a cosmetic dentist and an experienced Invisalign provider. You can be confident that he will prove the best treatment to give you a beautifully aligned smile. We want to make sure you have access to the quality dental services like Invisalign so you can flash your beautiful smile with pride and without worry over what other people may think.</p>
<p>If you would like to find out if you are a candidate for this treatment, contact our office to request a complimentary consultation. Call us or complete our <span  style={{color:"#548eaf"}}>Request an Appointment</span>  form. We are ready to provide Invisalign treatments to residents throughout the Hinsdale, Burr Ridge and Downers Grove areas.</p>

    
   

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

export default Invisalign;
