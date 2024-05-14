import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function TeethWhitening() {
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
    <h4  style={{color:"#548eaf"}}>Downers Grove Teeth Whitening</h4>
    <p>A brilliantly white smile is just one dental appointment away. Teeth whitening from Downers Grove cosmetic dentist <span style={{color:"#548eaf"}}>Dr. Michael Morgan</span>  will get give you an amazing smile in less than two hours! Our teeth whitening treatments are far more effective than the other tooth whitening options you can buy from your local store and complete in your home. You will get much whiter teeth that will last longer.</p>
   
    
       <div className='systembox'>
     
       <div id='fiximage2' style={{lineHeight: "2rem"}}>
    
       <h4  style={{color:"#548eaf"}}>Why Get Teeth Whitening from a Dentist?</h4>


<p>Whitening toothpaste, strips, and mouthwash have limited results, if any. Surface stains on your teeth may lighten, but many people don’t see any improvement at all. The bleaching gel provided by a dentist is about four times stronger than over-the-counter products. It penetrates your teeth to break down deeply embedded stains and brighten the natural pigmentation of your teeth. They will be whiter than they have ever been.</p>
<p>Bleaching gel isn’t always the best way to whiten teeth. Depending on the cause of the stains, it may make them more noticeable. Dr. Morgan will determine the cause of the stains in your teeth and the best way to whiten them.</p>
         
         
</div>
    <div id='fiximage'> 
        
    
         <img src='./Images/dr-morgan-teacher.webp' alt='Mercury-Free Fillings' id='picclose' />
         </div>

    </div>
   


    <h5  style={{color:"#548eaf"}}>In-Office Whitening</h5>
    <p>Biolase™ laser whitening will get your teeth up to nine shades brighter in less than two hours. You will get great results with very little to no sensitivity in your teeth. Our patients love being able to achieve the whiter smile they’ve always wanted without having to wait weeks or months in order to see any noticeable results.</p>
    <p>Before you receive the treatment, Dr. Morgan will examine your teeth and gums to ensure they are healthy, clean, and ready for whitening. The rest is fast and easy:</p>
    <ul>
        <li>	We will use a cheek retractor to keep your teeth exposed for the whitening process. Your lips and gums will be protected to keep them free of bleaching gel.</li>
        <li>	After we dry your teeth, we’ll brush on a thin layer of whitening gel.</li>
        <li>	A handheld laser will be used to activate the gel and give your teeth an extra blast of whitening. You will feel warmth in your teeth from the laser, but it is not uncomfortable.</li>
        <li>	We’ll wait about five minutes for your teeth to absorb the bleaching gel. The gel will be removed with high-speed suction.</li>
        <li>	We will rinse your mouth and repeat the process twice. After the three 15-minute sessions are complete, we’ll apply desensitizing gel to your teeth. Most patients feel very little sensitivity—or none at all.</li>
    </ul>
    <p>When you look at your smile in a mirror, the luster will amaze you. We’ll show you a comparison of your former tooth shade to the new results. After you get used to your dazzling smile, you can decide if you want it even whiter. Another whitening session can be scheduled. You will do periodic at-home touch-ups with customized trays to keep your smile bright.</p>
    <h5  style={{color:"#548eaf"}}>Take-Home Whitening</h5>
    <p>If you prefer take-home teeth whitening to in-office sessions, we will take impressions of your teeth for customized bleaching trays to be made. These take-home teeth whitening kits are more effective than the kits you could purchase from the store. The results will be more significant and will last longer.</p>
    <p>Each night, you will put a small amount of bleaching gel the trays. Wear them for the time instructed by Dr. Morgan. In about two weeks, your smile will sparkle. If you want them even whiter, just keep on bleaching until they’re the shade you want.</p>
    <h5  style={{color:"#548eaf"}}>Interested in Teeth Whitening?</h5>
    <p>If you are interested in an amazingly white smile, call us to schedule an appointment, or <span style={{color:"#548eaf"}}>request an appointment online</span>. Are you ready to get started on your teeth whitening? We provide these and other services to our patients residing throughout Hinsdale, Burr Ridge and Downers Grove.</p>


    
   

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

export default TeethWhitening;
