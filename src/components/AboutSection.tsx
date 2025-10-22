'use client';

import Image from 'next/image';
import s from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={s.section} aria-labelledby="about-title">
      <div className={s.container}>
        <header className={s.header}>
          <h2 id="about-title" className={s.title}>Sobre mí</h2>
          <p className={s.subtitle}>
            Trabajo con <strong>Everland</strong>, desarrolladora con proyectos en zonas de alta plusvalía.
            Te asesoro sin compromiso y te acompaño desde la elección del lote hasta la escrituración.
          </p>
        </header>

        {/* Marcas / partners */}
        <div className={s.brands} aria-label="Marcas y aliados">
          {/* Destacado tipo 'pill card' */}
          <div className={`${s.brandCard} ${s.brandFeatured}`} aria-hidden="true">
            <Image
              src="/images/logo_everlan.png"  // coloca aquí tu archivo
              alt="Everland"
              width={116}
              height={28}
              className={s.brandImg}
              priority
            />
          </div>

          {/* Resto de marcas (placeholders, cambia las rutas por tus archivos) */}
       
          
        </div>

        {/* Testimonio breve (opcional, visual) */}
        <figure className={s.testimonial}>
          <Image
            src="/images/perfil.png"  // tu foto; usa un placeholder si no la tienes
            alt="Alexandra, asesora"
            width={64}
            height={64}
            className={s.avatar}
          />
          <figcaption className={s.caption}>
            <h3 className={s.tHeading}>Asesoría rápida y clara</h3>
            <p className={s.tQuote}>
              “Te explico el proceso paso a paso, comparo opciones contigo y te ayudo a decidir con tranquilidad.”
            </p>
            <span className={s.tMeta}>Alexandra • Everland</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
