
import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import './About.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'

function Firstvisit() {
  return (
    <>
     <Bluehead/>
        <Logonavbar/>
      <Aboutnavbar/>
     
      <Smilehero/>
    <div>
    <div class="container text-center" >
  <div class="row">
    <div class="col-sm-8" style={{textAlign:"left",lineHeight: "2rem",marginTop:"3vh"}}>
        <h4 style={{color:"#548eaf"}}>What Can I Expect My First Visit?</h4>
        <p>Photo of middle-aged couple smiling for Downers grove cosmetic dentist Dr.Michael Morgan</p>
        <img src='./Images/dr-morgan-teacher.webp' alt='morgan teacher' id='picclose' />
         
      
        <p>We realize that what happens during your first visit can affect whether or not you’ll become a long-term patient with us. We ensure your comfort, offer personalized care, and maintain clear communication with you to help you have a positive dental experience</p>

      
      
      <p>Your first visit can be an appointment for a dental cleaning and exam or a 10-minute complimentary consultation in case you’re not ready yet to commit to an exam. During the consultation, you’ll be able to meet with Dr. Morgan, ask questions, and discuss treatment options.</p>

 
      
      <p>When you arrive, you’ll be warmly welcomed by our staff. We’ll accept your patient registration form, along with your dental insurance information.</p>

      <p>Our environment is comfortable and relaxing. While we review your paperwork and verify your insurance, you can relax and browse through a magazine or brochure.</p>
      <p>If you have an appointment for a dental cleaning and exam, a hygienist will introduce herself, welcome you, and invite you to a treatment room. She will ask if you have any current oral health concerns. Digital x-rays of your teeth will be taken. Your teeth will be gently, but thoroughly cleaned and polished.</p>

      <p>After your dental cleaning, you will meet Dr. Morgan. You will be impressed with his concern for your general well-being, as well as your oral health. He will complete a thorough oral examination and let you know the condition of your oral health. If minor issues are found, he will discuss them at this visit and recommend treatment. Otherwise, we’ll schedule a follow-up appointment for Dr. Morgan to explain your dental needs and treatment options.</p>
      <p>Every staff member you come in contact with is concerned about your comfort and helping you receive dental care of the highest quality. We work hard to help you have a pleasant dental experience during your first visit—and every visit thereafter.</p>
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

export default Firstvisit
