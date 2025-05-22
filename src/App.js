import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Contactanos from "./Contactanos.js";
import Nosotros from "./Nosotros.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contactanos />} />
        <Route path="/nosotros" element={<Nosotros/>} />
      </Routes>
    </Router>
  );
}

export default App;
