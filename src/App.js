import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./componentes/LoginForm/LoginForm.jsx";
import RegisterForm from "./componentes/Register/RegisterForm.jsx";
import { Navbar } from "./componentes/Navbar/Navbar.jsx";
import Home from "./componentes/Home/Home.jsx";  // 🔥 Importa el Home

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* 🔥 Página principal */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
