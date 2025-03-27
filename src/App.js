import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar/Navbar.jsx";
import Home from "./componentes/Home/Home.jsx";  

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* 🔥 Página principal */}
      </Routes>
    </Router>
  );
}

export default App;
