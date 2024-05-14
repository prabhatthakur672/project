
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './Meetdoctor.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Meetdoctor() {
  return (

    <>
    <div className='doctor'>
    <Container>
    <center><h1 id='textgrow'>MEET THE DOCTOR</h1></center>
        
     
      <Row>
        <Col sm><img src='./Images/flower.webp' alt='flower'  className='bottomleft' /></Col>
        <Col sm >    <img src='./Images/dr-morgan-teacher.webp' alt='doctor teacher' style={{marginTop:"2vh"}} id="doctormen"/></Col>
        <Col sm style={{marginTop:"2vh",textAlign:"left"}}><h2>DOWNERS GROVE CONSMETIC DENTIST </h2>
        <p> AS YOU ENTER HIS OFFICE FOR YOUR APPOINTMENT , YOU MAY WELL RUN INTO</p>
        <p>ANOTHER DENTIST COMING OUT. HE IS A DENTIST THAT OTHER DENTISTS</p>
        <p>CHOOSE FOR THEIRE CARE</p>
        <p>He studied dental artistry at the University of Geneva, Switzerland, with some of the most talented dental artists in the world. He has also authored and co-authored numerous articles and lectured nationally and internationally on cosmetic dentistry, implant dentistry, anxiety-free dentistry, and composite bonding techniques.</p>
        <button type="button" class="btn btn-outline-secondary">More about Dr.Morgan <ArrowRightAltIcon/></button>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
}

export default Meetdoctor;
