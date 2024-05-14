
import React from 'react';
import './SmileGallery.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Col from 'react-bootstrap/Col';

function SmileGallery() {
  return (
    <>
      <div className='smile-gallery-container' style={{background:"white"}}>
        <h1 >Gallery of Smiles</h1>
        <div className="responsive">
          <div className="gallery-item">
            <a target="_blank" href="img_5terre.jpg">
              <img src="./Images/smile1 (2).webp" alt="Cinque Terre" width="400" height="400" style={{marginTop:"5vh"}} id="image1"/>
            </a>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery-item">
            <a target="_blank" href="img_5terre.jpg">
              <img src="./Images/smaile2.webp" alt="Cinque Terre" width="400" height="400" id="image1"/>
            </a>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery-item">
            <a target="_blank" href="img_forest.jpg">
              <img src="./Images/smile3.webp" alt="Forest" width="400" height="400" style={{marginTop:"5vh" }} id="image2"/>
            </a>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery-item">
            <a target="_blank" href="img_lights.jpg">
              <img src="./Images/smile4.webp" alt="Northern Lights" width="400" height="400"  id="image3"/>
            </a>
          </div>
        </div>
        <div className="responsive">
          <div className="gallery-item">
            <a target="_blank" href="img_mountains.jpg">
              <img src="./Images/smile5.webp" alt="Mountains" width="400" height="400" style={{marginTop:"5vh"}} id="image1"/>
            </a>
          </div>
        </div>
      </div>
      <br/>
      <div>
        <Container>
          <Row className='smile-box'>
            <Col></Col>
            <Col xs={8} >
              <h5>SMILES SO NATURAL. NO ONE WILL EVER KNOW YOU HAD WORK DONE.</h5>
              <p>Welcome to our Smile Gallery! Here you will see before and after photographs of patients at Dentistry by Design. See for yourself the dramatic smile transformations created by Dr. Michael Morgan.</p>
              <button type="button" className="btn btn-outline-secondary">See the smiles he's created<ArrowRightAltIcon/></button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SmileGallery;
