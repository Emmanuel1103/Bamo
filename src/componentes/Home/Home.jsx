import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import Lye from "./Lye.jpg";
import Google from "./Google.png"
import Apple from "./Apple.jpg"
import Descarga from "./AppleYAndroid.png"
import Jose from "./Jose.jpg"

const Home = () => {
  return (

    <div className="home-container">
      {/* Banner */}
      <section className="banner">
        <h1>Bienvenido a Bamos</h1>
        <p>Optimiza tu tiempo y reduce la espera del bus.</p>
        <Link to="/register" className="btn">Regístrate Ahora</Link>
      </section>

      {/* Background Map */}
      <div className="background-wrapper">

        {/* How it works*/}
        <section className="how-it-works">
          <h2>¿Cómo Funciona?</h2>
          <div className="steps">
            <div className="step">
              <h3>📍 Ubica tu Parada</h3>
              <p>Selecciona tu ubicación y destino.</p>
            </div>
            <div className="step">
              <h3>⏳ Revisa Horarios</h3>
              <p>Consulta cuándo llegará el próximo bus.</p>
            </div>
            <div className="step">
              <h3>🚀 Viaja sin Esperas</h3>
              <p>Llega justo a tiempo a la parada y evita robos.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>Lo que dicen nuestros usuarios</h2>
          <div className="testimonials-container">

            {/* Sección de testimonios */}
            <div className="testimonials-left">

              <div className="testimonial">
                <div className="profile-pic">
                  <img src={Lye} alt="Usuaria" />
                </div>
                <div className="testimonial-text">
                  <p>"Me encanta! Me ha salvado la vida varias veces encontrando la ruta más rápida al trabajo."</p>
                  <h4>- Lye Vuk</h4>
                </div>
              </div>

              <div className="testimonial">
                <div className="profile-pic">
                  <img src={Jose} alt="Usuario" />
                </div>
                <div className="testimonial-text">
                  <p>"Me siento más seguro al saber cuánto tiempo tengo que esperar."</p>
                  <h4>- Jose Morales</h4>
                </div>

              </div>
            </div>

            {/* Sección a la derecha */}
            <div className="testimonials-right">
              <h3>¿Por qué elegir Bamo?</h3>
              <p>Bamo es la solución perfecta para quienes buscan optimizar su tiempo y reducir la incertidumbre al esperar el transporte público. Nuestra aplicación te permite conocer en tiempo real los horarios de los buses, las mejores rutas y el tiempo estimado de llegada, para que puedas salir de casa justo a tiempo, sin largas esperas ni preocupaciones.</p>
            </div>
          </div>
        </section>

        {/* Descarga */}
        <section className="download-section">
          <div className="download-left">
            <img src={Descarga} alt="Vista previa de la app" />
          </div>

          <div className="download-right">
            <h2>Descarga la App</h2>
            <p>Optimiza tu tiempo y evita esperas innecesarias. Descarga Bamo y mejora tu experiencia de transporte público.</p>

            <div className="download-buttons">
              <a href="https://play.google.com/store">
                <img src={Google} />
              </a>
              <a href="https://www.apple.com/store">
                <img src={Apple} />
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Rutas y Compatibilidad */}
      <section class="routes-compatibility">
        <h2>Rutas y Compatibilidad</h2>
        <p>Bamo está diseñado para mejorar la movilidad en Barranquilla, ayudándote a optimizar tus tiempos y reducir la espera del transporte público.</p>

        <ul>
          <li>🚍 <strong>Barranquilla</strong> - Buses urbanos y Transmetro</li>
          <li>🚍 <strong>Barranquilla</strong> - Compatible con <strong>buses urbanos y Transmetro</strong>.</li>
          <li>📊 <strong>Datos en tiempo real</strong>: Consulta horarios, tiempos de llegada y posibles retrasos.</li>
          <li>💡 <strong>Rutas recomendadas</strong>: Encuentra la mejor opción para llegar a tu destino de forma rápida y segura.</li>
          <li>🔔 <strong>Alertas y notificaciones</strong>: Recibe avisos sobre cambios en las rutas o problemas en el servicio.</li>

        </ul>
        <p>Pronto estaremos en más ciudades. ¡Mantente atento a nuestras actualizaciones! 🚀</p>
      </section>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Bamo. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="mailto:soporte@apenas.com"><FaEnvelope /></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
