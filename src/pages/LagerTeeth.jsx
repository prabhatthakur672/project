import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function LagerTeeth() {
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
   
<h4  style={{color:"#548eaf"}}>Laser Teeth Whitening Services Hinsdale</h4><br/>
    <p>Laser teeth whitening from Downers Grove cosmetic dentist Dr. Morgan is a laser-fast way to get the most brilliant smile you’ve ever had. In a single appointment, a dull smile can quickly be made to sparkle. We understand how important the impression your smile leaves you can be, which is why we work hard to stay on top of the latest technology, so you can smile with pride and not worry about stained or discolored teeth.</p>
    <h4  style={{color:"#548eaf"}}>The Difference with Teeth Whitening from a Dentist</h4>
    <p>Many people find that do-it-yourself whitening kits really don’t produce noticeable results. Whitening gel from a dentist is strong enough to penetrate your teeth and get rid of stains. Dr. Morgan supervises the treatment and makes adjustments as needed. In advance, he will determine the cause of your teeth stains, the correct strength of bleaching gel for you, and even whether or not bleaching your teeth is the right way to treat the stains.</p>
    <h4  style={{color:"#548eaf"}}>Why Choose Laser Whitening?</h4>
    <p>Most of Dr. Morgan’s patients choose laser teeth whitening because in three 15-minute sessions, your teeth can become amazingly white—up to nine shades lighter. The natural pigmentation in your teeth will lighten to give you the whitest smile you’ve ever had.</p>
    <p>This is a great option to quickly whiten your teeth for special occasions. Many people prefer it to take-home treatment, which takes about two weeks to complete.</p>

    <h4  style={{color:"#548eaf"}}>How Does It Work?</h4>
    <p> <span style={{color:"#548eaf"}}>Teeth whitening</span> works best shortly after your teeth have been cleaned. The cleaning removes plaque and tartar on your teeth and helps maximize the benefits of whitening them. This is why we recommend scheduling an appointment at our dental office prior to getting your laser teeth whitening so we can make sure your teeth will be as receptive to the treatment as possible.</p>

       <div className='systembox'>
      
       <div id='fiximage2' style={{lineHeight: "2rem"}}>
 
        <p>Before your teeth are whitened, we will insert a cheek retractor to ensure your teeth are completely exposed. Your lips and gums will be protected to keep the bleaching gel on your teeth only. We will dry your teeth and put gel on them.</p>
        <p>After a few minutes, a laser will be used to boost the gel and help it break down stains. The laser will make your teeth feel warm, but it won’t be uncomfortable. We will rinse off the gel and repeat the process twice. The three 15-minute sessions will give you a brilliant smile. We’ll show you the difference between your former tooth color and your super-bright smile.</p>
         
</div>
    <div id='fiximage'> 
        
    
         <img src='./Images/dr-morgan-teacher.webp' alt='Mercury-Free Fillings' id='picclose' />
         <p>Your gums are protected, and bleaching gel is put on your teeth.</p>

         </div>

    </div>
   

  <p>As your tooth color settles over the next few weeks, you can decide if you want to schedule another whitening session. Follow Dr. Morgan’s recommendations for at-home touch-ups to keep your smile bright. You will receive customized whitening trays, made from impressions of your teeth that we have taken.</p>
  <h4  style={{color:"#548eaf"}}>Your Smile Is Important to Us</h4>
  <p>We understand how important a beautiful smile is to you, which is why we offer reliable laser teeth whitening to local residents. We will help you give the right impression when you smile, whether you want to meet people in your personal or professional life.</p>
  <h4  style={{color:"#548eaf"}}>Interested in Laser Teeth Whitening?</h4>
  <p>If you want to quickly get your teeth brilliantly white, this option may be right for you. Call us to schedule an appointment or request an appointment online. We take great pride in providing these and other <span style={{color:"#548eaf"}}>dental services</span> to patients throughout Hinsdale, Burr Ridge and Downers Grove.</p>

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

export default LagerTeeth;
