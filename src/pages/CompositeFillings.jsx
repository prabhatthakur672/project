import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function CompositeFillings() {
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
    <h4  style={{color:"#548eaf"}}>Composite Fillings</h4>
       <div className='systembox'>
     
       <div id='fiximage2' style={{lineHeight: "2rem",marginTop:"4vh"}}>
      
         <span>Metal and amalgam used to be the only materials available for filling cavities. </span><br/>
    <span>Today, dental composites that look and function like real enamel are the popular alternatives. Downers Grove dentist Dr. Morgan </span>
    <p>offers dental composites to fill cavities and hide cracks, chips, and stains on the tooth’s surface.  Unlike amalgam fillings and metal restorations, </p></div>
    <div id='fiximage'> 
        
       
         <img src='./Images/dr-morgan-teacher.webp' alt='morgan teacher' id='picclose' />
         </div>

    </div>
    <p>composites match the color and appearance of your natural teeth. They’re safe for the body and the environment and can withstand heavy chewing forces.</p>
    <h5  style={{color:"#548eaf"}}>How Cavities Form</h5>
    <p>Cavities form when bacteria from plaque produce acids that attack the tooth enamel. Initially, the hole may be tiny and invisible to the naked eye, but it may expand and extend into the dentin and pulp if left untreated. You may feel no pain unless the infection has spread to the tooth nerve and surrounding tissues. Dr. Morgan recommends good oral hygiene, regular <span  style={{color:"#548eaf"}}>dental checkups, and cleanings</span> to prevent oral problems. If you do get a cavity, Dr. Morgan recommends tooth-colored composite fillings as a better-looking alternative to amalgam fillings.</p>

    <h5  style={{color:"#548eaf"}}>Placing Composite Fillings</h5>
    <p>Composite fillings are typically placed under local anesthetic, but relaxation techniques and sedatives can be used for anxious and fearful patients. After preparing the tooth, Dr. Morgan will gently remove the decayed structure and sanitize the area. Next, he will sculpt the composite resin over the tooth, harden it with a curing light, and shape it to match the bite. Finally, the resin is polished to match the sheen of your natural teeth.<br/><br/>
If there is severe decay and the tooth is too weak to support a composite filling, Dr. Morgan may use an inlay, onlay, or crown. These are more extensive restorations that cover most or all of the tooth’s surfaces.<br/><br/>
Don’t skip regular checkups or endure a painful toothache. See Dr. Morgan right away for pain relief as well as dental fillings and other tooth-colored restorations. Call us <span style={{color:"#548eaf"}}>orrequest an appointment online.</span>
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

export default CompositeFillings;
