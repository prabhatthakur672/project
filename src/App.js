// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Logonavbar from './componantes/navbar/Logonavbar'
import Header from './componantes/navbar/Header'
import Home from './pages/Home'
import Appointment from './pages/Appointment';
import Meetdacter from './componantes/Meetdoctor';
// import  SmileGallery from './pages/SmileGallery';

import Services from './pages/Services';
import Main from './pages/Main';
import SmileGallery from './pages/SmileGallery';
import Patient from './pages/Patient';
import Teacher from './pages/Teacher';
import Dentimage from './pages/Dentimage';
import Footer from './componantes/footer/Footer';
import About from './pages/About';
import Aboutnavbar from './componantes/navbar/Aboutnavbar';
import Smilehero from './componantes/Smilehero';
import Smilemeet from './pages/Smilemeet';
import Firstvisit from './pages/Firstvisit';
import Patientreviews from './pages/Patientreviews';
import Contactus from './pages/Contactus';
import Newpatient from './pages/Newpatient';
import AppointmentForm from './pages/AppointmentForm';
import CompositeFillings from './pages/CompositeFillings';
import DentalCheckUps from './pages/DentalCheckUps';
import DentalCrowns from './pages/DentalCrowns';
import DownersGrove from './pages/DownersGrove';    
import HinsdaleDentures from './pages/HinsdaleDentures'; 
import MercuryFree from './pages/MercuryFree';   
import OralSurgery from './pages/OralSurgery' ;   
import TMJDentist from './pages/TMJDentist' ; 
import DentalBonding from './pages/DentalBonding'; 
import DentalImplants from './pages/DentalImplants';
import FacialCollapse from './pages/FacialCollapse';
import Invisalign from './pages/Invisalign';
import LagerTeeth from './pages/LagerTeeth';
import PorcelainVeneers from './pages/PorcelainVeneers';
import TeethWhitening from './pages/TeethWhitening';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main/>}/>

      <Route path="/home" element={<Home/>}/>
        <Route path="/navbar" element={<Logonavbar/>}/>

        <Route path="/header" element={<Header/>}/>
        
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/meetdoctor" element={<Meetdacter/>}/>
        <Route path="/smile" element={<SmileGallery/>}/>
     
        <Route path="/sesvices" element={<Services/>}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/dental" element={<Dentimage/>}/>
        
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/aboutnavbar" element={<Aboutnavbar/>}/>
        <Route path="/smilehero" element={<Smilehero/>}/>
        <Route path="/smilemeet" element={<Smilemeet/>}/>
        <Route path="/firstvisit" element={<Firstvisit/>}/>
        <Route path="/Patientreviews" element={<Patientreviews/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/Newpatient" element={<Newpatient/>}/>
        <Route path="/appointForm" element={<AppointmentForm/>}/>
        <Route path="/composite" element={<CompositeFillings/>}/>
        <Route path="/checkups" element={<DentalCheckUps/>}/>
        <Route path="/crowns" element={<DentalCrowns/>}/>
        <Route path="/DownersGrove" element={<DownersGrove/>}/>
        <Route path="/HinsdaleDentures" element={<HinsdaleDentures/>}/>
        <Route path="/MercuryFree" element={<MercuryFree/>}/>
        <Route path="/OralSurgery" element={<OralSurgery/>}/>
        <Route path="/TMJDentist" element={<TMJDentist/>}/>
        <Route path="/DentalBonding" element={<DentalBonding/>}/>
        <Route path="/DentalImplants" element={<DentalImplants/>}/>
        <Route path="/FacialCollapse" element={<FacialCollapse/>}/>
        <Route path="/Invisalign" element={<Invisalign/>}/>
        <Route path="/LagerTeeth" element={<LagerTeeth/>}/>
        <Route path="/PorcelainVeneers" element={<PorcelainVeneers/>}/>
        <Route path="/TeethWhitening" element={<TeethWhitening/>}/>
        
        
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
