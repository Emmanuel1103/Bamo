import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComments } from 'react-icons/fa';
import './ContactForm.css';
import chulo from "./images/chuloVe.webp"
import send from "./images/send.png"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-rectangle">
      <div className="contact-left">
        <h2>¿Quieres contactarnos?</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              <FaUser className="icon" />
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <FaComments className="icon" />
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                style={{ flexGrow: 1, padding: '12px 16px', fontSize: '1rem', borderRadius: '12px', border: 'none', outline: 'none', fontFamily: "'Poppins', sans-serif", color: '#005f99', background: 'white', transition: 'box-shadow 0.3s ease' }}
              >
                <option value="" disabled>
                  Motivo de contacto
                </option>
                <option value="error">Error en la app</option>
                <option value="rutas">Problemas con rutas o paradas</option>
                <option value="sugerencia">Sugerencia o recomendación</option>
                <option value="horarios">Consulta sobre horarios</option>
                <option value="incidencia">Reporte de incidencia o seguridad</option>
                <option value="nuevaRuta">Solicitud de nueva ruta o parada</option>
                <option value="tarifas">Preguntas sobre tarifas o pagos</option>
                <option value="registro">Problemas con registro o acceso</option>
                <option value="comentarios">Comentarios generales</option>
                <option value="soporte">Solicitud de soporte técnico</option>
              </select>
            </label>

            <label>
              <FaComments className="icon" />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="send-btn">
              <img src={send} alt="Enviar" className="send-icon" />
              Enviar mensaje
            </button>
          </form>
        ) : (
          <div className="thanks-message">
            <img src={chulo} alt="Enviado" className="checkmark" />
            <p>Enviado</p>
            <p>¡Gracias por contactarnos! Te responderemos pronto.</p>
          </div>
        )}
      </div>

      <div className="contact-right">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
          alt="Contacto BAmo"
          className="contact-image"
        />
      </div>
    </div>
  );
}
