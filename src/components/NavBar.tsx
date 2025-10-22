'use client';
import Link from 'next/link';
import s from './NavBar.module.css';

export default function NavBar(){
  return (
    <header className={s.nav} role="banner">
      <div className={s.inner}>
        {/* Marca */}
        <Link href="#hero" className={s.brand}>Alexandra • Everland</Link>

        {/* Toggle mobile (solo CSS) */}
        <input id="nav-toggle" type="checkbox" className={s.toggle} aria-hidden="true" />
        <label htmlFor="nav-toggle" className={s.burger} aria-label="Abrir menú" aria-controls="primary-nav"></label>

        {/* Menú “pill” */}
        <nav id="primary-nav" className={s.links} aria-label="Secciones del sitio">
          <a className={s.link} href="#about" data-gtm="click_nav" data-section="about">Sobre mí</a>
          <a className={s.link} href="#projects" data-gtm="click_nav" data-section="projects">Proyectos</a>
          <a className={s.link} href="#promos" data-gtm="click_nav" data-section="promos">Promos</a>
          <a className={s.link} href="#virtual-tour" data-gtm="click_nav" data-section="virtual">Recorrido 3D</a>
          <a className={s.link} href="#map" data-gtm="click_nav" data-section="map">Ubicación</a>
          <a className={s.link} href="#lead-form" data-gtm="click_nav" data-section="form">Formulario</a>
          {/* Último link = CTA oscuro (sin cambiar tu href) */}
          <a className={`${s.link} ${s.cta}`} href="#contact" data-gtm="click_nav" data-section="contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
