import { useState } from 'react';
import styles from './TestimonialCarousel.module.css';
import testimonials from './testimonialData';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.title}>Ruta <br />De Opiniones</h2>

      <div className={styles.carouselContainer}>
        <div className={styles.track}>
          {/* Línea */}
          <div className={styles.line}></div>

          {/* Paradas */}
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.stop} ${activeIndex === idx ? styles.activeStop : ''}`}
              style={{ left: `${(idx / (testimonials.length - 1)) * 100}%` }}
            />
          ))}

          {/* Bus indicador */}
          <div
            className={styles.bus}
            style={{ left: `${(activeIndex / (testimonials.length - 1)) * 100}%` }}
            aria-label={`Bus en parada ${activeIndex + 1}`}
          >
            🚌
          </div>
        </div>

        {/* Opinión */}
        <blockquote className={styles.quote}>
          “{testimonials[activeIndex].opinion}”
        </blockquote>
        <p className={styles.user}>
          👤 {testimonials[activeIndex].name} - {testimonials[activeIndex].city}
        </p>

        {/* Botones */}
        <div className={styles.buttons}>
          <button onClick={prevTestimonial} aria-label="Testimonio anterior">
            ❮
          </button>
          <button onClick={nextTestimonial} aria-label="Testimonio siguiente">
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
