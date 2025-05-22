import React from "react";
import { Navbar } from "./componentes/Navbar/Navbar.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import Banner from "./componentes/Banner/Banner.jsx";
import Pasos from "./componentes/Pasos/Pasos.jsx";
import Bene from "./componentes/BeneComple/BeneComple.jsx";
import SabiasQue from "./componentes/Sabiasque/SabiasQue.jsx";
import TestimonialCarousel from "./componentes/TestimonialCarousel/TestimonialCarousel.jsx";
import Premium from "./componentes/Premium/Premium.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Pasos />
      <Bene />
      <TestimonialCarousel />
      <Premium />
      <SabiasQue />

      <Footer />
    </>
  );
}

export default Home;
