import React from "react";
import "./Footer.css";
import Facebook from "./images/Facebook.png";
import Instagram from "./images/Instagram.png";
import X from "./images/X.png";
import Apple from "./images/Apple.png";
import Google from "./images/Google.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <h3>BAMO</h3>
        <h2>Optimiza tu tiempo, transforma tu viaje</h2>
      </div>

      <div className="footer-container">
        <div className="footer-section">
          <h4>COMPAÑÍA</h4>
          <ul>
            <li><a href="/nosotros">¿Quiénes Somos?</a></li>
            <li><a href="/contacto">Centro de ayuda</a></li>
            <li><a href="/contacto">Reportes</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>OFICINAS</h4>
          <p>Calle 58 # 55 – 66, Barranquilla, Atlántico, Colombia.</p>
        </div>

        <div className="footer-section">
          <h4>CONTACTO</h4>
          <div className="social-icons">
            <a href="https://instagram.com/."><img src={Instagram} alt="Instagram" /></a>
            <a href="https://facebook.com/."><img src={Facebook} alt="Facebook" /></a>
            <a href="https://x.com/."><img src={X} alt="X" /></a>
          </div>
          <p>atc@bamomail.co</p>
        </div>

        <div className="footer-section store-section">
          <a href="#"><img className="store-icon" src={Apple} alt="App Store" /></a>
          <a href="#"><img className="store-icon" src={Google} alt="Google Play" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
