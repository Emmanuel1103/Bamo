import React from 'react';
import './Pasos.css';
import Psalida from "./Images/Planificatusalida.png";
import Atiempo from "./Images/Ahorratiempo.png";
import Vseguro from "./Images/Viajaseguro.png";

const Pasos = () => {
  return (
    <section className="seccion-pasos">
      <div className="contenedor-pasos">
        <p className='parrafo-pasos'>
          Tecnología al alcance de todos, diseñada para conectar, informar y mejorar la experiencia urbana
        </p>
        <div>
          <div className="titulo-pasos">Optimiza tu tiempo en solo</div>
          <div className="titulo-pasos2">3 PASOS</div>
        </div>

        {/* Paso 1 */}
        <div className="paso">
          <div className="texto-paso">
            <div className="numero-paso">1</div>
            <h3 className="titulo-individual">Planifica tu salida</h3>
            <p className="descripcion-paso">
              Consulta las rutas disponibles cerca de ti y encuentra la mejor opción para llegar a tu destino sin demoras.
            </p>
          </div>
          <img src={Psalida} alt="Planifica tu salida" className="imagen-paso" />
        </div>

        {/* Paso 2 */}
        <div className="paso paso-inverso">
          <div className="texto-paso">
            <div className="numero-paso">2</div>
            <h3 className="titulo-individual">Ahorra tiempo</h3>
            <p className="descripcion-paso">
              Activa las notificaciones inteligentes que te indican cuándo es el mejor momento para salir de casa.
            </p>
          </div>
          <img src={Atiempo} alt="Ahorra tiempo" className="imagen-paso" />
        </div>

        {/* Paso 3 */}
        <div className="paso">
          <div className="texto-paso">
            <div className="numero-paso">3</div>
            <h3 className="titulo-individual">Viaja seguro</h3>
            <p className="descripcion-paso">
              Visualiza el trayecto del bus en tiempo real y comparte tu ubicación.
            </p>
          </div>
          <img src={Vseguro} alt="Viaja seguro" className="imagen-paso" />
        </div>
      </div>
    </section>
  );
};

export default Pasos;
