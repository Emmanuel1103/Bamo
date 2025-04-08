import React, { useEffect, useRef, useState } from 'react';
import Beneficios from "./Beneficios/Beneficios.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import './BeneComple.css';

const BeneComple = () => {
  const sectionRef = useRef(null);
  const [animar, setAnimar] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;

        // Detecta si el scroll es hacia abajo
        const scrollingDown = currentScrollY > lastScrollY.current;

        if (entry.isIntersecting && scrollingDown) {
          setAnimar(false); // reinicia animación
          setTimeout(() => setAnimar(true), 50);
        }

        lastScrollY.current = currentScrollY;
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`seccion-beneficios-completa ${animar ? 'mostrar-fondo' : ''}`}
    >
      <Beneficios />
      <Carousel />
    </section>
  );
};

export default BeneComple;
