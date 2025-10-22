'use client';
import Link from 'next/link';
import s from './HeroSection.module.css';

const phone = process.env.NEXT_PUBLIC_PHONE || '+52 722 797 8944';
const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '527227978944';
const waText =
  process.env.NEXT_PUBLIC_WA_TEXT ||
  'Hola%20Alexandra,%20quiero%20informes%20de%20los%20terrenos.';

export default function HeroSection() {
  return (
    <section id="hero" className={s.hero}>
      <video className={s.video} autoPlay muted loop playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className={s.overlay} />

      <div className={s.container}>
        <span className={s.badge}>Alexandra • Asesora de inversiones Everland</span>

        <h1 className={s.title}>
          Terrenos en Yucatán y Puerto Morelos
          <br />
          con asesoría personalizada
        </h1>

        <p className={s.subtitle}>
          Te acompaño a elegir el mejor lote según tus metas, con planes de pago
          flexibles y promociones vigentes.
        </p>

        <div className={s.ctaRow}>
          <a
            className={`${s.btn} ${s.btnPrimary}`}
            href={`tel:${phone}`}
            data-gtm="click_call"
            data-section="hero"
          >
            Llamar ahora
          </a>

          <a
            className={`${s.btn} ${s.btnOutline} ${s.pulse}`}
            target="_blank"
            rel="noopener"
            data-gtm="click_whatsapp"
            data-section="hero"
            href={`https://wa.me/${waNumber}?text=${waText}`}
            aria-label="Abrir WhatsApp de Alexandra"
          >
            Hablar por WhatsApp
          </a>

          <Link href="#projects" className={s.btn}>
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
