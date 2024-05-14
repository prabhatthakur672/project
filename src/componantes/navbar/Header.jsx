

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    // <Navbar expand="lg" className=""  style={{background:"#f8f8f8",height:"6vh"}} >
    //   <Container fluid>
    //     <div style={{background:"#f8f8f8",height:"6vh"}}> 
    //       {/* <Navbar.Brand href="#">HOME</Navbar.Brand> */}
    //       <Navbar.Toggle aria-controls="navbarScroll" />
    //     </div>
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav
    //         className="me-auto my-2 my-lg-0 justify-content-center w-100"
    //         style={{ maxHeight: '100px',gap:"5vw" }}
    //         navbarScroll
    //       >
    //          <Nav.Link href="#action1">HOME</Nav.Link>
    //         <Nav.Link href="#action1">ABOUT US</Nav.Link>
    //         <Nav.Link href="#action2">AESTHETIC dENTISTRY</Nav.Link>
    //         <Nav.Link href="#">IMPLANTS</Nav.Link>
    //         <Nav.Link href="#action2">OTHER SERVICES</Nav.Link>
    //         <Nav.Link href="#action2">SMILE GALLERY</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar expand="lg" bg="#f8f8f8" variant="light" style={{background:"#f8f8f8"}}>
    <Container>
      {/* <Navbar.Brand href="#">Your Logo</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{gap:"5vw",marginLeft:"4vw"}}>
        <Nav.Link href="#action1">HOME</Nav.Link>
          <Nav.Link ><Link to="/about" style={{textDecoration:"none",color:"black"}}>ABOUT US</Link></Nav.Link>
          <Nav.Link href="#action2">AESTHETIC dENTISTRY</Nav.Link>
          <Nav.Link href="#">IMPLANTS</Nav.Link>
          <Nav.Link href="#action2">OTHER SERVICES</Nav.Link>
          <Nav.Link href="#action2">SMILE GALLERY</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;
