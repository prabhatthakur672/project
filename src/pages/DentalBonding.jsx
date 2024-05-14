import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function DentalBonding() {
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
    <h4  style={{color:"#548eaf"}}>Downers Grove Dental Bonding</h4>
       <div className='systembox'>
         <div id='fiximage'> 
      
        
         <img src='./Images/dr-morgan-teacher.webp' alt='morgan teacher' id='picclose' />
         </div>
       <div id='fiximage2' style={{lineHeight: "2rem",marginTop:"3vh"}}> <span>Teeth that are discolored or have chips, minor fractures or small gaps can be aesthetically restored with dental bonding. Downers Grove cosmetic dentist Dr. Michael Morgan is an expert at seamlessly restoring your teeth with bonding so that previous imperfections disappear. It’s our goal to use tooth bonding to help you get the smile you’ve always wanted and deserved.</span><br/>
       <h5  style={{color:"#548eaf"}}>What Is Dental Bonding?</h5>
       <p>Composite dental resin has properties similar to natural teeth. The composite is applied directly to the tooth by the dentist, after which it is shaped, hardened, and polished. This technique is often used for minor defects in teeth. If you take good care </p>
   
   </div></div>
    <span>of it, bonding can last ten years or longer. This makes teeth bonding a highly effective way to help restore your teeth without having to worry about replacing them in the near future.</span>
    <h5  style={{color:"#548eaf"}}>Choose a Cosmetic Dentist</h5>
    <p>Many dentists use dental bonding to restore teeth, but the results vary. A skilled <span  style={{color:"#548eaf"}}>cosmetic dentist</span> is an artist who understands how to work with the material to match the color, characteristics, and translucency of your natural teeth. This is why we ensure our team goes through the right training for effective dental bonding that is more likely to get the results you’re looking for.</p>

    <p>There are different shades of resin. They have to be carefully chosen and mixed to create a natural appearance. Care must also be taken to ensure the gloss and shape of the bonding matches your natural teeth. From the gumline to the edge of the tooth, the material should look completely natural, and an expert cosmetic dentist can produce that look.</p>
    <p>The photos below show how a cosmetic dentist manipulates composite materials to perfectly match the variations in color, translucency, and gloss of natural teeth. The formerly chipped tooth looks completely natural, and no one can tell the tooth was ever damaged.</p>

            
    <img src='./Images/dr-morgan-teacher.webp' alt='morgan teacher' id='picclose' />

   
    <h5  style={{color:"#548eaf"}}>Take Care of It</h5>

    <ul>
      <li>
      	Practice good oral hygiene by daily flossing between your teeth and brushing with a soft toothbrush and non-abrasive toothpaste.
      </li>
      <li>	Limit drinks that can stain bonding, such as coffee, tea, and red wine.</li>
      <li>	Don’t bite or open hard or sharp objects with your teeth.</li>
      <li>	Only have your teeth cleaned and polished by a dental hygienist who knows which techniques and polishing pastes to use on dental bonding. Otherwise, the surface can be damaged and make the bonding more susceptible to stains.</li>
    </ul>


    <h5  style={{color:"#548eaf"}}>Dental Bonding by Dr. Morgan</h5>
    <p><span  style={{color:"#548eaf"}}>Dr. Morgan</span> is an artist. In addition to his talent, his commitment to the art is shown in his ongoing pursuit of advanced training in cosmetic dentistry.He has learned the proper techniques required to produce beautiful results with direct bonding. He is also an instructor of cosmetic dentistry for other dentists.</p>
    <p>Like a true artist, Dr. Morgan has the variety of tools and composite materials needed to produce the correct color, tint, translucency, strength, and gloss for any tooth restoration. He ensures the composite material and natural tooth blend perfectly. After he completes the bonding process, it will be impossible to tell that you ever had discoloration, a fracture, a chip, or a gap between your teeth.</p>
  
    <h5  style={{color:"#548eaf"}}>You Deserve a Beautiful Smile</h5>
    <p>When you turn to us for tooth bonding, you can rest assured you will get the beautiful smile you deserve. We will work with you to go over what needs to be done to give you the smile you’ve been looking for. We then put together a plan that will help you achieve those goals.</p>
    
    
    <h5  style={{color:"#548eaf"}}>Interested in Beautiful Tooth Restoration?</h5>
    <p>If you want natural-looking tooth restoration with dental bonding, Dr. Morgan can help. We invite you to call us to schedule an appointment or request an appointment online. We are proud to serve patients throughout the Hinsdale, Burr Ridge and Downers Grove areas.</p>


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

export default DentalBonding;
