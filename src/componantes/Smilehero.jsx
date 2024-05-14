
import './Smilehero.css';
import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Smilehero() {
  return (
    <>
    <div className='heroimg'>
       
    <Container>
    
      <Row>
        <Col xs={12} md={8}>
        <div style={{backgroundImage: "url('../Images/Untitled.webp')", backgroundRepeat:"no-repeat",height:"30vh",marginTop:"3vh"}} id='novihide'> 

   
  </div>
        </Col>
        <Col xs={6} md={4}>
         
        </Col>
      </Row>

    </Container>

    </div>
      
    </>
  )
}

export default Smilehero
