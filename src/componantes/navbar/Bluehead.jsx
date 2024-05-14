import './Bluehead.css';
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Bluehead() {
  return (
    <>
    <div style={{background:"#548eaf"}}>
    <Navbar className="">
        <Container>
          <Navbar.Brand href="#home"  style={{color:"white",marginLeft:"30vw"}}><p id='lofy'><LocalPhoneIcon/>Call Us Today:(630)235-2525</p></Navbar.Brand>
        </Container>
      </Navbar>
      </div>
    </>
  )
}

export default Bluehead
