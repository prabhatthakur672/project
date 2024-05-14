import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import './About.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function DownersGrove() {
  return (
    <>
     <Bluehead/>
        <Logonavbar/>
      <Aboutnavbar/>
     
      <Smilehero/>

      {/* morgan about section */}
      <div>
      <div class="container text-center" >
  <div class="row">
    <div class="col-sm-8" style={{textAlign:"left",lineHeight: "2rem",marginTop:"3vh"}}>
        <h4 style={{color:"#548eaf"}}>Downers Grove Laser Dentistry</h4><br/><br/>
        <p>Dr. Morgan often uses laser dentistry for fillings and for certain gum and aesthetic treatments. The thing many people like about laser dentistry is that there is no drilling involved, no noise, and it is very clean. The laser removes the diseased and weak parts of the tooth. It doesn’t even require you to have novocain, though most patients still choose to be numb during the procedure. Few dentists are using this technique yet, though we imagine that in time many will turn to it because of its tremendous advantages.</p>
        <p>White composite fillings can be placed in your tooth, and it will be restored to look practically the same as it did before it ever had a cavity. White composite fillings are fully hard when you leave the office, and they have very little post-operative sensitivity. So there will be no eating restrictions and in most cases no hot and cold sensitivity as you had with the old-fashioned silver-mercury amalgam fillings.
You’ll be able to laugh and talk without being embarrassed about showing ugly dental work in your mouth. Furthermore, since the fillings will be bonded to your tooth, your teeth will be stronger and less likely to break. Hinsdale laser dentistry—it’s the wave of the future.
</p>
   
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

export default DownersGrove;
