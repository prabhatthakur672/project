import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Aboutnavbar.css';
import { Link } from 'react-router-dom';

function Aboutnavbar() {
  return (

    <>
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        {/* <Navbar.Brand href="#">Your Logo</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{gap:"1vw"}}>
          <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action1"><div class="dropdown">
  <button class="dropbtn">ABOUT</button>
  <div class="dropdown-content">
  <Link to="">rgjirg</Link>
  <Link to="">ggg</Link>
  <Link to="">gv</Link>
  <Link to="">gg</Link>
  <Link to="">ggv</Link>
  </div>
</div></Nav.Link>
            <Nav.Link href="#action2"> <div class="dropdown">
  <button class="dropbtn">DENTISTRY</button>
  <div class="dropdown-content">
  <Link to="/composite">Composite Fillings</Link>
  <Link to="/checkups">Dental Check-Ups and Cleanings</Link>
  <Link to="/crowns">Dental Crowns & Bridges</Link>
  <Link to="/DownersGrove">Downers Grave Laser Dentistry</Link>
  <Link to="/HinsdaleDentures">Hinsdale Dentures</Link>
  <Link to="/MercuryFree">Mercury-Free Dentist Hinsdale</Link>
  <Link to="/OralSurgery">Oral Surgery</Link>
  <Link to="/TMJDentist">TMJ Dentist Hinsdale</Link>
  </div>
</div>
</Nav.Link>
            <Nav.Link href="#">COSMETIC dENTISTRY</Nav.Link>
            <Nav.Link href="#action2">NON-SURGICAL FACIAL AESTHETICS</Nav.Link>
            <Nav.Link href="#action2">SMILE GALLERY</Nav.Link>
            <Nav.Link href="#action1">COVID-19</Nav.Link>
            <Nav.Link href="#action1">CONTACT US</Nav.Link>
          </Nav>

          
        </Navbar.Collapse>

    
        
      </Container>
    
      
    </Navbar>

   
    
      
 

    
</>
  );
}

export default Aboutnavbar;
