


import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <>
      <div className='footer-container' style={{background: "#f7f7f7"}}>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div className="col footer-col">
              <p><b>Dentistry by Design</b></p>
              <p>Michael Morgan D.D.S.</p>
              <p>28 West Chicago Ave. Hinsdale. IL 60521</p>
              <p>All Calls:(630)325-2525</p>
              <p><b>Downers Grove Lumineers</b></p>
            </div>
            <div className="col footer-col">
              <p><b>Office Hours</b></p>
              <p>Monday: 7 am - 4 pm</p>
              <p>Tuesday: 8 am - 5 pm</p>
              <p>Wednesday: 7 am - 4 pm</p>
              <p>Thursday: 8 am - 5 pm</p>
              <p><b>Holistic Dentist</b></p>
            </div>
            <div className="col footer-col">
              <p><b>Social</b></p>
              <p style={{color: "blue"}}>Facebook</p>
              <p style={{color: "blue"}}>Google</p>
              <p style={{color: "blue"}}>Yelp</p>
              <p><b>Downers Grove Sedation Dentist</b></p>
            </div>
            <div className="col footer-col">
              <img src='./Images/tp.webp' alt='companylogo' className="footer-logo" />
              <p><b>FAQ &nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp;&nbsp; Blog &nbsp;&nbsp;&nbsp; Sitemap</b></p>
            </div>
          </div>
        </div>
        <center><p>2002-2018 Dentistry by Design. All rights reserved</p></center>
      </div>
    </>
  );
}

export default Footer;
