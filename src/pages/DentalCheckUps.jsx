import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function DentalCheckUps() {
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

    <h4  style={{color:"#548eaf"}}>Dental Check-Ups and Cleanings</h4><br/>
    <article>The key to obtaining and maintaining a high level of oral health is to stay vigilant about regular examinations and professional teeth cleanings. Children and adults need to <span style={{color:"#548eaf"}}>visit the dentist</span> every six months for exams and cleanings. Dentistry by Design serves patients of all ages in the Hinsdale, Illinois area, offering superior dental treatments and world-renowned dentist <span  style={{color:"#548eaf"}}>Dr. Michael Morgan’s</span> extensive experience and skill.</article><br/>


    <h4  style={{color:"#548eaf"}}>Regular Checkups for a Healthy Smile</h4><br/>
       <div className='systembox'>
       
         <div id='fiximage'> 
    
         <p  style={{color:"#548eaf"}}> Dental Checkup Hindale,Burr Ridge.</p>
         <img src='./Images/dr-morgan-teacher.webp' alt='morgan teacher' id='picclose' />
         </div>
       <div id='fiximage2' style={{lineHeight: "2rem",marginTop:"4vh"}}> <span> 
A regular dental checkup is essential to diagnose potential problems before they become serious conditions. Going in for regular visits to the dentist should become routine to ensure your teeth and gums remain healthy.
</span><br/>
   
   </div></div><br/>
    <p>During your comprehensive exam, Dr. Morgan will examine your teeth, soft tissues, head, neck, and bite, so he can be sure there are no underlying conditions. If he does find an issue, he can create a plan for your treatment promptly.</p>
    <ul>
        <li>	Your exam will also include screenings for periodontal disease, oral cancer, and temporomandibular joint dysfunction. Regular screenings for these issues can be lifesaving.</li>
        <li>	Detecting gum disease or oral cancer in its beginning stages gives Dr. Morgan the opportunity to provide the best treatment and outcome possible.</li>
    </ul>
    <p>Regular exams give patients the opportunity to discuss any concerns they may have. Any pain or discomfort you are feeling should be discussed during your appointment so Dr. Morgan can find a solution and provide you with fast relief.</p>
    <h5  style={{color:"#548eaf"}}>Professional Teeth Cleaning</h5>
    <p>Having your teeth professionally cleaned on a regular basis is necessary to prevent the problems that result from plaque and tartar buildup.</p>
    <p>Plaque is a clear, sticky, bacterial substance that develops on the teeth naturally. Plaque sits on the teeth and releases acids that ultimately cause tooth decay.</p>
    <p>"Dr. Morgan received advanced training in several areas of cosmetic dentistry in addition to restorative and general treatments. During your exam, he can recommend procedures and treatments to improve the appearance of your smile."</p>
    <p>Plaque eventually hardens to become tartar, which can lead to gingivitis and eventually periodontal disease. Regular brushing and flossing removes plaque and prevents cavities, but it is not always enough, as plaque often develops in hard-to-reach areas. Tartar must be removed by a dentist.</p>
    <p><b>Professional dental cleaning</b> removes plaque and tartar to prevent conditions that threaten the patient’s oral health.</p>
    <p>During your professional teeth cleaning, our dental hygienists will teach you proper brushing and flossing techniques so you can keep your teeth as healthy and clean and possible between cleanings.</p>
    <h5  style={{color:"#548eaf"}}>A Trusted General Dentist</h5>
    <p>Dr. Morgan has been practicing general dentistry for more than a decade. A graduate of the University of Illinois School of Dentistry, Dr. Morgan has also completed advanced training programs at the University of Geneva in Switzerland, the Las Vegas Institute for Advanced Dental Studies, and the University of the Pacific, among many others.</p>
    <p>An international lecturer and instructor, Dr. Morgan is a respected leader in the dental industry who has the skill and experience to provide patients with top quality dental care. If you are looking for a trustworthy dentist in the Hinsdale area, visit Dr. Morgan.</p>


   

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

export default DentalCheckUps;
