import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar/Navbar.jsx";
import Banner from "./componentes/Banner/Banner.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import Pasos from "./componentes/Pasos/Pasos.jsx";
import Bene from "./componentes/BeneComple/BeneComple.jsx";
import SabiasQue from "./componentes/Sabiasque/SabiasQue.jsx";
import TestimonialCarousel from "./componentes/TestimonialCarousel/TestimonialCarousel.jsx";
import ContactForm from "./componentes/ContactForm/ContactForm.jsx";



function App() {
  return (
    <Router>
      <Navbar />  
      <Banner />
      <Pasos/>
      <Bene/>
      <TestimonialCarousel/>
      <ContactForm/>
      <SabiasQue/>
      <Footer />

      <Routes>
        <Route path="/hola" element={<Banner />} />
      </Routes>
    </Router>
  );
}

export default App;
