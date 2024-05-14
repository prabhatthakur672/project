import React from 'react'
import Aboutnavbar from '../componantes/navbar/Aboutnavbar'
import Bluehead from '../componantes/navbar/Bluehead'
import Logonavbar from '../componantes/navbar/Logonavbar'
import Smilehero from '../componantes/Smilehero'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import './Smilemeet.css';
import Dentimage from './Dentimage'
import Footer from '../componantes/footer/Footer'
function FacialCollapse() {
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
   
<h4  style={{color:"#548eaf"}}>Facial Collapse</h4>
    <p>When all of your teeth are missing, more than just your smile is affected. Tooth roots stimulate jawbone, so missing teeth are a signal to your body to resorb the bone and use the minerals from it elsewhere. This loss of bone that supports your facial muscles eventually results in facial collapse.</p>
    <h4  style={{color:"#548eaf"}}>Avoiding Facial Collapse</h4>
       <div className='systembox'>
      
       <div id='fiximage2' style={{lineHeight: "2rem"}}>
 
        <p>Facial collapse occurs gradually, over a period of fifteen to twenty years. But it doesn’t have to occur. <span  style={{color:"#548eaf"}}>Dental implants</span> can stop the progression of facial collapse or, if you have just started wearing dentures, prevent it all together. How? A dental implant is an artificial tooth root, usually made of titanium. Like a natural tooth root, it stimulates jawbone and prevents it from shrinking.</p>
        <p>Implants are surgically placed in your jawbone and can be used to support your dentures. In addition to preventing jawbone shrinkage, implants will prevent your <span style={{color:"#548eaf"}}>dentures</span> from slipping around or falling out. As few as two implants can be used to support your dentures, but if you have more, they will increase the stability and more effectively prevent bone shrinkage.</p>
         
</div>
    <div id='fiximage'> 
        
    
         <img src='./Images/dr-morgan-teacher.webp' alt='Mercury-Free Fillings' id='picclose' />
        <p> An endentulous bite (all teeth are missing) eventually leads to facial collapse.</p>
         </div>

    </div>
    <p>If you already wear dentures and have started experiencing jawbone shrinkage and facial collapse, it’s not too late to stop the progression. Supporting your dentures with implants will prevent them from resting on your jawbone and accelerating shrinkage. Lost bone can be built up with bone grafting.</p>

    <p>Dr. Morgan will examine your dentures, gums, and jawbone to properly assess the situation. He will determine if you are a candidate for implants and let you know your options. He has received training in implantology from The Misch International Implant Institute and the WhiteCap Institute. Many of his patients have benefited from implant-supported dentures. In addition to preventing facial collapse, your stabilized dentures will feel more like your natural teeth.</p>
<p>If you would like more information on your options for preventing facial collapse, call us to schedule an appointment, or complete our <span style={{color:"#548eaf"}}>Request an Appointment </span>  form.</p>


    
   

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

export default FacialCollapse;
