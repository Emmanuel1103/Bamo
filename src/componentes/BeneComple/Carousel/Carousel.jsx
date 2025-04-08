import React, { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import './Carousel.css';
import UbiTimeReal from "./images/Ubt.png";
import AsisVir from "./images/Avi2.png";
import TJustoTime from "./images/Tjt.png";

const slides = [
  {
    titulo: 'Ubicación en tiempo real',
    intro: 'Conoce en qué parte de la ruta va el bus en cualquier momento.',
    destacado: ['Olvídate de esperar sin saber'],
    beneficios: ['Ahorra tiempo al salir justo a tiempo', 'Evita esperas innecesarias'],
    imagen: UbiTimeReal,
  },
  {
    titulo: 'Asistente virtual al instante',
    intro: '¿Tienes dudas? Pregunta lo que necesites.',
    destacado: ['Nuestro ChatBox está disponible 24/7 para ayudarte.'],
    beneficios: ['Atención inmediata sin necesidad de llamar', 'Sin filas, sin llamadas, sin estrés'],
    imagen: AsisVir,
  },
  {
    titulo: 'Te avisamos justo a tiempo',
    intro: 'Recibe avisos precisos cuando tu bus se acerca',
    destacado: ['Organiza mejor tu salida y ahorra tiempo'],
    beneficios: ['Sal en el momento exacto, sin estrés ni prisas', 'Evita exponerte innecesariamente en la calle'],
    imagen: TJustoTime,
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const interval = 50;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setProgress(0);
          }, 100);
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [index]);

  const { titulo, intro, destacado, beneficios, imagen } = slides[index];

  return (
    <div className="carousel-container">
      <div className="carousel-card">

        {/* Título y subtítulo */}
        <div className="carousel-header">
          <h2 className="carousel-title">{titulo}</h2>
          <p className="carousel-subtitle">{intro}</p>
        </div>

        <div className="carousel-content">
          <div className="text">
            {destacado.map((frase, i) => (
              <p key={i} className="destacado">
                <span className="resaltado">{frase}</span>
              </p>
            ))}

            <ul>
              {beneficios.map((item, i) => (
                <li key={i}>
                  <span className="icono"><FiMapPin /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="image">
            <img src={imagen} alt="slide" />
          </div>
        </div>

        <div className="progress-indicator">
          {slides.map((_, i) => (
            <div key={i} className="bar">
              <div
                className="fill"
                style={{
                  width: i === index ? `${progress}%` : '0%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
