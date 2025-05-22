import React, { useState, useEffect } from "react";
import "./SabiasQue.css";
import chicaBus from "./images/ChicaBus.png";
import googlePlay from "./images/Google.png";
import appStore from "./images/Apple.png";
import BotonContacto from "./BotonContacto/BotonContacto.jsx";

const frases = [
  "Latinoamérica depende en gran medida del transporte público, pero muchas veces es ineficiente, incierto y estresante.",
  "Más del 60% de los usuarios de transporte público en Colombia no saben con exactitud a qué hora llega su bus.",
  "Muchos estudiantes y trabajadores pierden tiempo por descoordinación entre rutas.",
  "Las rutas cambian y los usuarios no se enteran."
];

const SabiasQue = () => {
  const [fraseActual, setFraseActual] = useState(0);
  const [progreso, setProgreso] = useState(0);

  useEffect(() => {
    const intervaloTexto = setInterval(() => {
      setFraseActual((prev) => (prev + 1) % frases.length);
      setProgreso(0);
    }, 10000);

    const intervaloBarra = setInterval(() => {
      setProgreso((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);

    return () => {
      clearInterval(intervaloTexto);
      clearInterval(intervaloBarra);
    };
  }, []);


  return (
    <section className="sabias-wrapper">
      <div className="sabias-container">
        <h2 className="titulo-superior">¿Sabías que...?</h2>
        <div className="sabias-texto">
          <div className="frase-dinamica">
            {frases[fraseActual].split(" ").map((word, index) => (
              <span
                key={index}
                className={
                  word.toLowerCase().includes("bam") ||
                    word.toLowerCase().includes("depende") ||
                    word.toLowerCase().includes("60%") ||
                    word.toLowerCase().includes("tiempo")
                    ? "resaltado"
                    : ""
                }
              >
                {word + " "}
              </span>
            ))}
          </div>

          <div className="elementos-fijos">
            <div className="barra-tiempo">
              <div
                className="barra-progreso"
                style={{ width: `${progreso}%` }}
              />
            </div>
            <p className="descarga">
              Descarga <span className="resaltado">BAMO’</span> y <br />¡cambia eso!
            </p>
            <div className="botones-store">
              <img src={googlePlay} alt="Google Play" />
              <img src={appStore} alt="App Store" />
            </div>
          </div>
        </div>
        <div className="sabias-imagen">
          <img src={chicaBus} alt="Persona pensando con un bus" />
        </div>
      </div>
    </section>
  );

};

export default SabiasQue;
