import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import colombiaFlag from './images/colombia.jpg';
import logo from './images/BamoLogo.png';
import './Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar de escritorio */}
      <header className={`navbar-container ${menuOpen ? 'hidden-on-mobile' : ''}`}>
        <div className="logo-wrapper">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Bamo Logo" />
          </Link>
          <span className="logo-text">BAMO</span>
        </div>
        


        <div className="navbar-right">
          {/* Language selector solo para escritorio */}
          <div className="language-selector">
            <img src={colombiaFlag} alt="Colombia" />
            <span>Es</span>
          </div>

          {/* Menú desplegable solo escritorio */}
          <div className="menu-button desktop-only" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <FiMenu />
          </div>

          <div className={`dropdown-menu ${dropdownOpen ? 'animate-dropdown' : ''}`}>
            <ul>
              <li><Link to="/nosotros">¿Quiénes somos?</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Top bar móvil con idioma y hamburguesa */}
      <div className="mobile-top-bar">
        <div className="language-selector">
          <img src={colombiaFlag} alt="Colombia" />
          <span>Es</span>
        </div>

        <div className="menu-button mobile-only" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <FiMenu />}
        </div>
      </div>

      {/* Menú móvil a pantalla completa */}
      {menuOpen && (
        <div className="side-menu open">
          <img src={logo} alt="Bamo Logo" className="mobile-logo" />

          <div className="language-selector">
            <img src={colombiaFlag} alt="Colombia" />
            <span>Es</span>
          </div>

          <ul>
            <li><Link to="/nosotros" onClick={toggleMenu}>¿Quiénes somos?</Link></li>
            <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};
