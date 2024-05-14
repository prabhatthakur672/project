import React from 'react'
import './Teacher.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Teacher() {
  return (
    <>
    <div className='teacher'>
        <center><h2><i>Contributing <br/>to Dental Education</i></h2></center>

        <div>
        <div class="container text-center">
  <div class="row">
    {/* <div class="col">col</div> */}
    <div class="col"   style={{marginTop:"4vh"}}><img src='./Images/dr-morgan-teacher.webp' alt='teacher' id="teacherfix"/></div>
    <div class="col-sm" style={{marginTop:"5vh",textAlign:"left"}}><p><b>
FOR THE PAST TWO DECADES, DR. MORGAN HAS TRAVELED WIDELY, PRESENTING HANDS-ON AND LIVE-PATIENT TREATMENT PROGRAMS AS WELL AS LECTURES,TEACHING OTHER DENTISTS AESTHETIC DENTISTRY AND COMPOSITE BONDING

TECHNIQUES</b></p>
<p>He has served as an instructor at the Las Vegas Institute for Advanced Dental Studies as well as Co-Director of the Advanced Posterior Aesthetics Program at the Pacific Aesthetic Continuum, University of the Pacific, 
San Francisco. He has taught in Europe and Asia, at the American Academy of Cosmetic Dentistry, and is a regular presenter at the Chicago 

Midwinter Dental Meeting.</p>
<button type="button" class="btn btn-outline-secondary">
Dr. Morgan's presentations & lectures<ArrowRightAltIcon/></button>
</div>
    {/* <div class="col">col</div> */}
  </div>

</div>
        </div>

    </div>
      
    </>
  )
}

export default Teacher
