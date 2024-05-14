// import React from 'react';
// import "./Navbar.css";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

// function Logonavbar() {
//   return (

//       <>
//         {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid"style={{background:"white"}}>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item" style={{marginLeft:"35vw"}}>
//                   <img src='/Images/tp.webp' alt='namemorgan' style={{background:"white"}} />
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav> */}

//         <div>
//           <Navbar className="bg-body-tertiary"  style={{borderTop:"1px solid black"}}>
//         <Container>
//           <Navbar.Brand href="#home">
//            <center> <img
//               src="./Images/tp.webp"
//               // width="500"
//               // height="150"
//               className="d-inline-block align-top"
//               alt="React Bootstrap logo"
//               style={{marginLeft:"20vw"}}
//             />
//             </center>
//           </Navbar.Brand>
//         </Container>
//       </Navbar></div>
//       </>
    
//   )
// }

// export default Logonavbar;

import React from 'react';
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Logonavbar() {
  return (
    <>
      <div>
        <Navbar className="" style={{borderTop: "1px solid black"}}>
          <Container>
            <Navbar.Brand href="#home">
              <center>
                <img
                  src="./Images/secondlogo.png"
                  className="d-inline-block align-top img-responsive"
                  alt="React Bootstrap logo"
                  
                  style={{width:"30vw"}} // Center the image horizontally
                />
              </center>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Logonavbar;
