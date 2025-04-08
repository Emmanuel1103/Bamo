import React from 'react';
import './Beneficios.css';
import { FaClock, FaShieldAlt, FaMoneyBillWave, FaMobileAlt } from 'react-icons/fa'; // usando react-icons

const Beneficios = () => {
  return (
    <section className="seccion-beneficios">
      <h2 className="titulo-beneficios">
        Todo lo que necesitas en una sola <span>APP</span>
      </h2>

      <div className="contenedor-tarjetas">
        <div className="tarjeta">
          <FaClock className="icono-tarjeta" />
          <h3 className="titulo-tarjeta">Llega justo a tiempo</h3>
          <p className="descripcion-tarjeta">
            Calculamos la mejor hora para salir según tu ruta y horario, para que no tengas que esperar el bus ni correr.
          </p>
        </div>

        <div className="tarjeta">
          <FaShieldAlt className="icono-tarjeta" />
          <h3 className="titulo-tarjeta">Mayor seguridad en tus trayectos</h3>
          <p className="descripcion-tarjeta">
            Minimiza el tiempo en la calle. Sal justo cuando es necesario y evita riesgos innecesarios.
          </p>
        </div>

        <div className="tarjeta">
          <FaMoneyBillWave className="icono-tarjeta" />
          <h3 className="titulo-tarjeta">Ahorra tiempo y dinero</h3>
          <p className="descripcion-tarjeta">
            Llega puntual a clases o al trabajo. Más control, menos estrés.
          </p>
        </div>

        <div className="tarjeta">
          <FaMobileAlt className="icono-tarjeta" />
          <h3 className="titulo-tarjeta">App simple y útil</h3>
          <p className="descripcion-tarjeta">
            BAMO' te da solo lo que necesitas: rutas, horarios y alertas claras. Sin enredos, sin complicaciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
