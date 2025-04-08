import React from "react";
import "./Footer.css"; // Archivo de estilos
import Facebook from "./images/Facebook.png";
import Instagram from "./images/Instagram.png";
import X from "./images/X.png";
import Apple from "./images/Apple.png";
import Google from "./images/Google.png";


const Footer = () => {
  return (
    <footer className="footer">
      {/* Encabezado del Footer */}
      <div className="footer-header">
        <h3>BAMO</h3>
        <h2>Optimiza tu tiempo, transforma tu viaje</h2>
      </div>

      {/* Contenedor con las secciones del footer */}
      <div className="footer-container">
        {/* Sección de enlaces de compañía */}
        <div className="footer-section">
          <h4>COMPAÑÍA</h4>
          <ul>
            <li><a href="#">¿Quiénes Somos?</a></li>
            <li><a href="#">Centro de ayuda</a></li>
            <li><a href="#">Reportes</a></li>
          </ul>
        </div>

        {/* Sección de oficinas */}
        <div className="footer-section">
          <h4>OFICINAS</h4>
          <p>Calle El príncipe 253, Málaga, CP 2345</p>
        </div>

        {/* Sección de contacto */}
        <div className="footer-section">
          <h4>CONTACTO</h4>
          <div className="social-icons">
            <a href="https://instagram.com/."><img src={Instagram} alt="Instagram" /></a>
            <a href="https://facebook.com/."><img src={Facebook} alt="Facebook" /></a>
            <a href="https://x.com/."><img src={X}alt="X" /></a>
          </div>
          <p>atc@bamomail.co</p>
        </div>

        {/* Sección de botones de descarga */}
        <div className="footer-section store-section">
          <a href="#"><img className="store-icon" src={Apple} alt="App Store" /></a>
          <a href="#"><img className="store-icon" src={Google} alt="Google Play" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
