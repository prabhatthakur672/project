import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function HinsdaleDentures() {
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
         <h4  style={{color:"#548eaf"}}>Hinsdale Dentures</h4><br/>
      
         <img src='./Images/dr-morgan-teacher.webp' alt='Dentures Hindale,IL' id='picclose' />
         </div>
       <div id='fiximage2' style={{lineHeight: "2rem",marginTop:"4vh"}}> <span>If you need dentures, you probably share some of the same concerns that many people have. Will the dentures look fake, be uncomfortable, or slip around and fall out? Relax. Dr. Michael Morgan is a cosmetic dentist who gives special attention to provide you with comfortable dentures that fit well, are natural-looking, and give you a beautiful smile.</span><br/>

    </div></div><br/>
    <p>Dr. Morgan has an artistic approach to creating beautiful dentures. He also has extensive training in <span  style={{color:"#548eaf"}}>cosmetic dentistry</span> Dr. Morgan has even been an instructor at two of the top training institutes in world—the Las Vegas Institute for Advanced Dental Studies and the University of the Pacific in San Francisco – Pacific Aesthetic Continuum (PAC~Live). He understands the concerns you have about wearing dentures, and he loves giving you a personalized, beautiful smile with them.</p>
    <p>When you get dentures from Dr. Morgan, he takes your smile makeover as seriously as he does a smile makeover with porcelain veneers. Your smile is designed. He listens closely to your preferences for the shape, color, and size of your teeth. Your smile is a reflection of your personality. Dr. Morgan has the artistic talent to accurately reflect it with dentures. Most dentists don’t have that kind of talent. Your new smile will complement your facial features, too.</p>

    <h5  style={{color:"#548eaf"}}>Dr. Morgan’s Unique Approach to Dentures</h5>
    <p>No shortcuts are taken when Dr. Morgan provides you with dentures. He carefully takes a series of steps to ensure they will look beautiful and fit well.</p>
    <ul>
        <li>
        	He takes preliminary impressions of your mouth to capture the details of your arch. These impressions are used to provide a customized tray for your final impressions. This step is important for denture retention and stability.
        </li><br/>
        <li>	Impression material is placed in the customized tray to provide a highly accurate mold of your mouth.</li><br/>
        <li>	A wax model of your dentures will be made. You will be able to closely examine it and try it in. It will give you a preview of how your new smile will look and feel. If you have any hesitancy about the look or feel of your new smile, Dr. Morgan will change or completely remake the wax model. You have to love the new look before he proceeds</li><br/>
        <li>When your denture base is made, Dr. Morgan sets the six front teeth himself. This special attention he gives to your dentures is rare—the vast majority of dentists don’t do this. This technique emphasizes Dr. Morgan’s deft craftsmanship and his commitment to giving you the most beautiful smile possible. The laboratory technician will set the remaining teeth.</li>
    </ul>



    <h5  style={{color:"#548eaf"}}>What Are Your Options?</h5>
    <p><b>Complete removable dentures</b></p>
   <p>Complete removable dentures can be made for your upper arch, lower arch, or both. Suction keeps the upper denture in place. The lower denture rests on your gums.</p>
    <p><b>Implant-supported dentures</b></p>
    <p>Dental implants can be surgically placed in your jawbone, and your dentures will be secured to them. Implant-supported dentures provide stability. You won’t have to worry about your dentures slipping around or falling out. The stability makes it easier for you to eat and speak with dentures. They will feel much more comfortable than complete removable dentures.</p>

    <p>When all of your teeth are missing, your body resorbs the jawbone. Implants prevent your dentures from resting on your jawbone, and they stimulate the bone to prevent shrinkage and facial collapse. As few as two implants can be used to support your dentures, but more implants increase stability.</p>

    <h5  style={{color:"#548eaf"}}>Interested in Cosmetic Dentures?</h5>
    <p>If you are interested in receiving cosmetic dentures that look like your beautiful, natural smile, call us to schedule an appointment with Dr. Morgan. If you prefer, complete our <span style={{color:"#548eaf"}}>Request an Appointment</span> form.</p>


  

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

export default HinsdaleDentures;
