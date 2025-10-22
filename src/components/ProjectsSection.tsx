'use client';
import { useState } from 'react';
import s from './ProjectsSection.module.css';

import {
  Dog, Dumbbell, Bath, Library, Home, Flame, Baby, 
  MonitorCheck, Waves, Trees, Drill, ShieldCheck, Star, Map as MapIcon, LayoutTemplate,
  LucideYoutube,
  Goal
} from 'lucide-react';

const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '527227978944';
const baseWaText =
  process.env.NEXT_PUBLIC_WA_TEXT ||
  'Hola%20Alexandra,%20quiero%20informes%20de%20los%20terrenos.';

type TabKey = 'dosia' | 'gvdm';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'dosia', label: 'Dosia' },
  { key: 'gvdm', label: 'Gran Villa del Mar' },
];

export default function ProjectsSection() {
  const [tab, setTab] = useState<TabKey>('dosia');

  return (
    <section id="projects" className={s.section} aria-labelledby="projects-heading">
      <div className="container">
        {/* Header */}
        <div className={s.header}>
          <span className={s.badge}>Proyectos activos</span>
          <h2 id="projects-heading" className={s.title}>
            Explora y elige tu inversión ideal
          </h2>
          <p className={s.subtitle}>
            Lotes en zonas de alto crecimiento con planes flexibles. Conoce el
            contexto, el master plan, amenidades y financiamiento.
          </p>
        </div>

        {/* Tabs */}
        <div className={s.tabs} role="tablist" aria-label="Proyectos">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              aria-controls={`panel-${t.key}`}
              id={`tab-${t.key}`}
              className={`${s.tab} ${tab === t.key ? s.active : ''}`}
              onClick={() => setTab(t.key)}
              data-gtm="click_nav"
              data-section="projects"
              data-project={t.key}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={s.panelWrap}>{tab === 'dosia' ? <DosiaPanel /> : <GvdmPanel />}</div>
      </div>
    </section>
  );
}

/* ---------- DOSIA PANEL ---------- */
function DosiaPanel() {
  const project = 'Dosia';
  const waText = `${baseWaText}%20(%20Proyecto:%20${encodeURIComponent(project)}%20)`;

  return (
    <div id="panel-dosia" role="tabpanel" aria-labelledby="tab-dosia" className={s.panel}>
      {/* HERO */}
      <div className={s.heroGrid}>
        <div className={s.heroText}>
          <span className={s.eyebrow}>Proyecto activo · Yucatán</span>
          <h3 className={s.h3XL}>Dosia — Inversión Natural</h3>

          <p className={s.pLead}>
            Desarrollado en la zona de mayor crecimiento de Yucatán. Urbanismo
            orgánico, áreas verdes y proyección de plusvalía. Ideal para pasear
            con mascotas o hacer caminatas largas; una apuesta sólida para
            quienes buscan descanso y futuro.
          </p>

          <div className={s.chips}>
            <span className={s.chip} data-tip="Estado">Yucatán</span>
            <span className={s.chip} data-tip="Contexto">Crecimiento inmobiliario</span>
            <span className={s.chip} data-tip="Entorno">Naturaleza endémica</span>
          </div>

          <div className={s.stats}>
            <div className={s.stat}>
              <span className={s.statNum}>220</span>
              <span className={s.statLabel}>Lotes</span>
            </div>
            <div className={s.stat}>
              <span className={s.statNum}>15+</span>
              <span className={s.statLabel}>Amenidades</span>
            </div>
            <div className={s.stat}>
              <span className={s.statNum}>~24 km</span>
              <span className={s.statLabel}>De la costa</span>
            </div>
          </div>

          <div className={s.ctaRow}>
            <a
              className={`${s.btn} ${s.btnPrimary}`}
              target="_blank"
              rel="noopener"
              href={`https://wa.me/${waNumber}?text=${waText}`}
              data-gtm="click_whatsapp_project"
              data-project="dosia"
            >
              Saber más por WhatsApp
            </a>
            <a className={s.linkGhost} href="#map" data-gtm="click_nav" data-section="map">
              Ver ubicación
            </a>
          </div>
        </div>

        <div className={s.heroMedia}>
          <figure className={s.mediaCard}>
            <img src="/images/dosia/hero.png" alt="Dosia — vista conceptual" />
            <figcaption className={s.figcap}>Imagen ilustrativa</figcaption>
          </figure>
        </div>
      </div>

      {/* SECCIÓN: MASTER PLAN */}
      <div className={s.sectionBlock}>
        <div className={s.sectionHeading}>
          <div className={s.headingIcon}><LayoutTemplate size={18} strokeWidth={1.6} /></div>
          <div>
            <h4 className={s.h2Section}>Master Plan</h4>
            <p className={s.h2Desc}>
              Distribución del desarrollo, ejes verdes y amenidades principales.
            </p>
          </div>
        </div>

        <div className={s.split}>
          <div className={s.block}>
            <div className={s.mediaFrame}>
              <img src="/images/dosia/masterplan.png" alt="Master plan de Dosia" />
            </div>
          </div>

          <div className={s.block}>
            <div className={s.kvGrid}>
              <div className={s.kvItem}>
                <div className={s.kvKey}>Ubicación</div>
                <div className={s.kvVal}>Norponiente de Yucatán (~24 km de la costa)</div>
              </div>
              <div className={s.kvItem}>
                <div className={s.kvKey}>Lotes</div>
                <div className={s.kvVal}>220 · 250–600 m² (régimen condominal)</div>
              </div>
              <div className={s.kvItem}>
                <div className={s.kvKey}>Concepto</div>
                <div className={s.kvVal}>20,000 m² orgánicos y senderos interconectados</div>
              </div>
              <div className={s.kvItem}>
                <div className={s.kvKey}>Amenidades</div>
                <div className={s.kvVal}>15+ (ver detalle)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN: AMENIDADES */}
      <div className={s.sectionBlock}>
        <div className={s.sectionHeadingCenter}>
          <div className={s.headingIconLg}><Home size={22} strokeWidth={1.6} /></div>
          <h4 className={s.h2SectionCenter}>Amenidades destacadas</h4>
          <p className={s.h2DescCenter}>
            Espacios pensados para disfrutar, convivir y conectar con la naturaleza.
          </p>
        </div>

        <div className={s.cardGridAlt}>
          {[
            { label: 'Parques infantiles', Icon: Baby },
            { label: 'Pet park', Icon: Dog },
            { label: 'Gimnasio exterior', Icon: Dumbbell },
            { label: 'Gimnasio interior', Icon: MonitorCheck },
            { label: 'Alberca', Icon: Waves },
            { label: 'Ludoteca', Icon: Library },
            { label: 'Casa club', Icon: Home },
            { label: 'Terraza / Bar / Grill', Icon: Flame },
            { label: 'Junior club', Icon: Baby },
            { label: 'Área de yoga', Icon: LucideYoutube },
            { label: 'Cancha de fútbol', Icon: Goal },
            { label: 'Canchas de básquet', Icon: MonitorCheck },
          ].map(({ label, Icon }, i) => (
            <div key={label} className={`${s.cardV} ${i % 2 ? s.cardSharp : s.cardRound}`}>
              <div className={s.cardVIcon}><Icon size={22} strokeWidth={1.6} /></div>
              <div className={s.cardVTitle}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN: SERVICIOS URBANIZADOS */}
      <div className={s.sectionBlock}>
        <div className={s.sectionHeadingCenter}>
          <div className={s.headingIconLg}><ShieldCheck size={22} strokeWidth={1.6} /></div>
          <h4 className={s.h2SectionCenter}>Servicios urbanizados</h4>
          <p className={s.h2DescCenter}>
            Infraestructura lista para construir y habitar con calidad y seguridad.
          </p>
        </div>

        <div className={s.cardGridSm}>
          {[
            { label: 'Drenaje pluvial', Icon: Bath, text: 'Canalización y desfogue para lluvia.' },
            { label: 'Red eléctrica a pie de lote', Icon: Drill, text: 'Acometidas preparadas.' },
            { label: 'Suministro de agua', Icon: Waves, text: 'Toma a pie de lote.' },
            { label: 'Banquetas y vegetación', Icon: Trees, text: 'Andadores con especies locales.' },
            { label: 'Alumbrado público', Icon: MonitorCheck, text: 'Iluminación vial y peatonal.' },
            { label: 'Calles pavimentadas', Icon: MonitorCheck, text: 'Vialidades de acceso.' },
            { label: 'Barda perimetral', Icon: ShieldCheck, text: 'Delimitación del conjunto.' },
            { label: 'Accesos controlados', Icon: ShieldCheck, text: 'Control de entrada/salida.' },
          ].map(({ label, Icon, text }) => (
            <div key={label} className={s.featureCard}>
              <div className={s.cardIcon}><Icon size={18} strokeWidth={1.6} /></div>
              <div className={s.featureBody}>
                <div className={s.cardTitle}>{label}</div>
                <div className={s.cardText}>{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN: TIPOS DE LOTE */}
      <div className={s.sectionBlock}>
        <div className={s.sectionHeadingCenter}>
          <div className={s.headingIconLg}><MapIcon size={22} strokeWidth={1.6} /></div>
          <h4 className={s.h2SectionCenter}>Tipos de lote</h4>
          <p className={s.h2DescCenter}>Opciones para distintas metas y ubicaciones dentro del plan maestro.</p>
        </div>

        <div className={s.lotWrap}>
          {[
            { label: 'Premium', Icon: Star },
            { label: 'Esquina', Icon: Drill },
            { label: 'Casa club', Icon: Home },
            { label: 'Multifamiliar', Icon: Library },
            { label: 'Mixto', Icon: MonitorCheck },
            { label: 'Avenida', Icon: MonitorCheck },
          ].map(({ label, Icon }) => (
            <span key={label} className={s.lotChip}>
              <Icon size={16} strokeWidth={1.6} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* SECCIÓN: FINANCIAMIENTO + RECORRIDO */}
      <div className={s.sectionBlock}>
        <div className={s.splitXL}>
          <div className={s.block}>
            <div className={s.sectionHeading}>
              <div className={s.headingIcon}><ShieldCheck size={18} strokeWidth={1.6} /></div>
              <h4 className={s.h2Section}>Financiamiento</h4>
            </div>

            <div className={s.cardList}>
              <div className={s.checkItem}><span>●</span> Planes hasta <strong>10 años</strong></div>
              <div className={s.checkItem}><span>●</span> Descuentos por <strong>pronto pago</strong></div>
              <div className={s.checkItem}><span>●</span> Propiedad <strong>privada</strong></div>
              <div className={s.checkItem}><span>●</span> Sin revisión de buro</div>
            </div>

            <a
              className={`${s.btn} ${s.btnPrimary} ${s.btnWide}`}
              target="_blank"
              rel="noopener"
              href={`https://wa.me/${waNumber}?text=${baseWaText}%20(%20Proyecto:%20Dosia%20)`}
              data-gtm="click_whatsapp_project"
              data-project="dosia"
            >
              Quiero mi plan por WhatsApp
            </a>
          </div>

          <div className={s.block}>
            <div className={s.sectionHeading}>
              <div className={s.headingIcon}><LayoutTemplate size={18} strokeWidth={1.6} /></div>
              <h4 className={s.h2Section}>Recorrido virtual</h4>
            </div>

            <div className={s.qrCardXL}>
              <img src="/images/dosia/qr.png" alt="QR del recorrido virtual de Dosia" />
              <small className={s.pSmall}>Escanéalo para ver el recorrido</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- GRAN VILLA DEL MAR PANEL (ajustado al nuevo ritmo) ---------- */
function GvdmPanel() {
  const project = 'Gran Villa del Mar';
  const waText = `${baseWaText}%20(%20Proyecto:%20${encodeURIComponent(project)}%20)`;

  return (
    <div id="panel-gvdm" role="tabpanel" aria-labelledby="tab-gvdm" className={s.panel}>
      <div className={s.heroGrid}>
        <div className={s.heroText}>
          <span className={s.eyebrow}>Proyecto activo · Puerto Morelos</span>
          <h3 className={s.h3XL}>Gran Villa del Mar — Puerto Morelos</h3>
          <p className={s.pLead}>
            Proyecto estratégico cerca del Caribe mexicano. Conecta con playa,
            servicios y crecimiento turístico.
          </p>
          <div className={s.chips}>
            <span className={s.chip}>Puerto Morelos</span>
            <span className={s.chip}>Crecimiento turístico</span>
            <span className={s.chip}>Conexión a playa</span>
          </div>
          <div className={s.ctaRow}>
            <a
              className={`${s.btn} ${s.btnOutline}`}
              target="_blank"
              rel="noopener"
              href={`https://wa.me/${waNumber}?text=${waText}`}
              data-gtm="click_whatsapp_project"
              data-project="gran-villa-del-mar"
            >
              Solicitar info por WhatsApp
            </a>
          </div>
        </div>

        <div className={s.heroMedia}>
          <div className={s.mediaCard}>
            <img src="/images/gvdm/hero.jpg" alt="Gran Villa del Mar — vista conceptual" />
          </div>
        </div>
      </div>

      <div className={s.sectionBlock}>
        <div className={s.sectionHeading}>
          <div className={s.headingIcon}><LayoutTemplate size={18} strokeWidth={1.6} /></div>
          <div>
            <h4 className={s.h2Section}>Master Plan</h4>
            <p className={s.h2Desc}>Distribución y áreas clave del desarrollo.</p>
          </div>
        </div>

        <div className={s.mediaFrame}>
          <img src="/images/gvdm/masterplan.jpg" alt="Master plan de Gran Villa del Mar" />
        </div>
      </div>
    </div>
  );
}
