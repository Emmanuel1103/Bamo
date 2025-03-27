import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 650);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled || menuOpen ? "scrolled" : ""} ${menuOpen ? "open" : ""}`}>
      <Link to="/" className="logo">BAMO</Link>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="#">Contactanos</a>
        <a href="#">¿Quiénes somos?</a>
        {/* <Link to="/register">Registrate</Link>
            <Link to="/login">Iniciar sesión</Link> */}
        <a href="#"><TbWorld className='language-icon' /></a>
      </nav>
    </header>
  );
}
