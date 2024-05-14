import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Appointment.css";

function Appointment() {
  return (

<>
<div className='appoint'>

<div className='hero'>

 

    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
        <div style={{backgroundImage: "url('../Images/your-smile.webp')", backgroundRepeat:"no-repeat" }}> 
  <h2 >

     
<pre >  No one will know <br/> that it's a <b> <i>smile <br/>
 makeover</i></b> </pre> 
</h2>

<pre>  <p>BEAUTIFULLY NATURAL WORK THAT BLENDS<br/>ART AND SCIENCE</p></pre>
<br/>

     
    <button type="button" class="btn btn-outline-secondary">Request an Appointment<ArrowRightAltIcon/></button>
  </div>
        </Col>
        <Col xs={6} md={4}>
         
        </Col>
      </Row>

    </Container>


   </div>
  
</div>





</>

 
  )
}

export default Appointment
