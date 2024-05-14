import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function Smilemeet() {
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
         <h4  style={{color:"#548eaf"}}>Meet Dr. Morgan</h4>
         <p> Dr.Morgan in his office at Dentistry by design.</p>
         <img src='./Images/dr-morgan-teacher.webp' alt='morgan teacher' id='picclose' />
         </div>
       <div id='fiximage2' style={{lineHeight: "2rem",marginTop:"4vh"}}> <span>“It’s about more than just beauty and aesthetics. Your smile is crucial to your identity.” – Michael Morgan, DDS</span><br/>
    <span>Dr. Michael Morgan is a world-renowned cosmetic dentist. His patients, many of whom are dentists themselves, often say that Dr. Morgan is more than just their first choice for dental care—he is their only choice for personalized dental care of the highest quality.</span>
    <p>Dr. Morgan graduated from the University of Illinois School of Dentistry in Chicago. He then studied the art of cosmetic dentistry at the University of Geneva, Switzerland with some of the world’s most talented dental artists.</p></div></div><br/>
    <p>Dr. Morgan is a published author and international lecturer on cosmetic dentistry, implant dentistry, and anxiety-free dentistry. He is the only dentist in the state of Illinois to have taught at both the University of the Pacific in San Francisco – Pacific Aesthetic Continuum (PAC~Live) and the Las Vegas Institute for Advanced Dental Studies—two of the most prestigious training institutes in the world.</p>
    <h5  style={{color:"#548eaf"}}>What Do Patients Say About Dr. Morgan?</h5>
    <p><b>Dr. Morgan has many loyal patients, and some of them travel many miles to receive his outstanding care. Consider the comments from some of his patients:</b></p>
    <p>“He has such a calm demeanor and is always open to questions. Dr. Morgan takes his time, doesn’t rush you, and explains every step of the process, so you walk out of the office having no questions. He far exceeded my expectations.” – Carrie</p>
    <p>“Dr. Morgan’s work is wonderful. I would use “perfectionist” when describing him and his work. I’m very happy with the results.” – Eric</p>
    <p>“Being a dentist myself, the decision of which dentist I was going to trust to take care of the extensive dental work I needed was an easy one—Dr. Morgan. Several years ago I had the good fortune to work alongside Dr. Morgan and saw firsthand consistent, amazing dentistry, great passion for his profession and his patients, and an intense devotion to high-quality care.” – Dr. Scott Vlk</p>
    <h5  style={{color:"#548eaf"}}>Dr. Morgan’s Training and Credentials</h5>
    <p><b>Advanced Cosmetic, Implant, and Reconstructive Training</b></p>
    <ul>
        <li> University of Geneva School of Dental Medicine, Geneva, Switzerland</li>
        <li> University of the Pacific (PAC~Live), San Francisco</li>
        <li>The Las Vegas Institute for Advanced Dental Studies, Las Vegas</li>
        <li>Baylor Postgraduate Esthetic Continuum, Dallas</li>
        <li>The Misch Institute for Dental Implants</li>
    </ul>
    <p><b>Teaching</b></p>
    <ul>
        <li>
        Co-Director of PAC~Live, teaching with Dr. Bill Dorfman of ABC’s Extreme Makeover
        </li>
        <li>Las Vegas Institute for Advanced Dental Studies, Advanced Esthetics senior instructor</li>
    </ul>
<p><b>Memberships</b></p>
<ul>
    <li>Academy for Sports Dentistry</li>
    <li>Amara Dental Hall of Fame Inductee</li>
    <li>American Academy of Cosmetic Dentistry (AACD)</li>
    <li>American Dental Association (ADA)</li>
    <li>Chicago Dental Society (CDS)</li>
    <li>Dental Organization of Conscious Sedation (DOCS)</li>
    <li>Illinois State Dental Society (ISDS)</li>
    <li>West Suburban Dental Society</li>
</ul>
<p><b>Presentations and Lectures</b></p>
<ul>
    <li>Lectures and presentations in the United States, Europe, Asia, and Russia on esthetic dentistry, bonding, and digital photography</li>
    <li>Speaker at the Chicago Midwinter Meeting, the world’s largest annual dental conference</li>
    <li>View the complete list on the <span style={{color:"#548eaf"}}>Presentations and Lectures </span> page.</li>
</ul>
<p><b>Published Author</b></p>
<ul>
    <li>Visit the Publications page to see a list of articles Dr. Morgan has published. Some full articles are available.</li></ul>
    <p><b>Recent Press</b></p>
    <ul>
        <li>Review media articles that feature Dr. Morgan on the <span  style={{color:"#548eaf"}}>Recent Press</span> page.</li>
    </ul>
<h5  style={{color:"#548eaf"}}>Dr. Morgan’s Interests</h5>
<p>Dr. Morgan is genuinely interested in you as a patient. He says, “I want to build a relationship with each person.” He will warmly welcome you to the Morgan dental family for the same personalized dental care of the highest quality that has given him so many loyal patients.
Dr. Morgan’s life outside of work reflects the same concern and compassion he has when he is practicing dentistry. He is dedicated to making a positive contribution to the community
</p>

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

export default Smilemeet
