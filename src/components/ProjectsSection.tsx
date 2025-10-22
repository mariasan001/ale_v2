'use client';
import { useState } from 'react';
import s from './ProjectsSection.module.css';

import {
  Dog, Dumbbell, Bath, Library, Home, Flame, Baby, 
  MonitorCheck, Waves, Trees, Drill, ShieldCheck, Star, Map as MapIcon,
  LayoutTemplate, Building2,
  BabyIcon,
  NutIcon,
  AxeIcon,
  BedIcon, 
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

/* ---------- DOSIA (se mantiene refinado) ---------- */
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
            <div className={s.stat}><span className={s.statNum}>220</span><span className={s.statLabel}>Lotes</span></div>
            <div className={s.stat}><span className={s.statNum}>15+</span><span className={s.statLabel}>Amenidades</span></div>
            <div className={s.stat}><span className={s.statNum}>~24 km</span><span className={s.statLabel}>De la costa</span></div>
          </div>
          <div className={s.ctaRow}>
            <a className={`${s.btn} ${s.btnPrimary}`} target="_blank" rel="noopener"
               href={`https://wa.me/${waNumber}?text=${waText}`}
               data-gtm="click_whatsapp_project" data-project="dosia">
              Saber más por WhatsApp
            </a>
            <a className={s.linkGhost} href="#map" data-gtm="click_nav" data-section="map">Ver ubicación</a>
          </div>
        </div>
        <div className={s.heroMedia}>
          <figure className={s.mediaCard}>
            <img src="/images/dosia/hero.png" alt="Dosia — vista conceptual" />
            <figcaption className={s.figcap}>Imagen ilustrativa</figcaption>
          </figure>
        </div>
      </div>

      {/* MASTER PLAN */}
      <div className={s.sectionBlock}>
        <div className={s.sectionHeading}>
          <div className={s.headingIcon}><LayoutTemplate size={18} strokeWidth={1.6} /></div>
          <div>
            <h4 className={s.h2Section}>Master Plan</h4>
            <p className={s.h2Desc}>Distribución del desarrollo, ejes verdes y amenidades principales.</p>
          </div>
        </div>
        <div className={s.split}>
          <div className={s.block}>
            <div className={s.mediaFrame}><img src="/images/dosia/masterplan.png" alt="Master plan de Dosia" /></div>
          </div>
          <div className={s.block}>
            <div className={s.kvGrid}>
              <div className={s.kvItem}><div className={s.kvKey}>Ubicación</div><div className={s.kvVal}>Norponiente de Yucatán (~24 km de la costa)</div></div>
              <div className={s.kvItem}><div className={s.kvKey}>Lotes</div><div className={s.kvVal}>220 · 250–600 m² (régimen condominal)</div></div>
              <div className={s.kvItem}><div className={s.kvKey}>Concepto</div><div className={s.kvVal}>20,000 m² orgánicos y senderos interconectados</div></div>
              <div className={s.kvItem}><div className={s.kvKey}>Amenidades</div><div className={s.kvVal}>15+ (ver detalle)</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* AMENIDADES */}
      <div className={s.sectionBlock}>
        <div className={s.sectionHeadingCenter}>
          <div className={s.headingIconLg}><Home size={22} strokeWidth={1.6} /></div>
          <h4 className={s.h2SectionCenter}>Amenidades destacadas</h4>
          <p className={s.h2DescCenter}>Espacios pensados para disfrutar, convivir y conectar con la naturaleza.</p>
        </div>
        <div className={s.cardGridAlt}>
          {[
            { label: 'Parques infantiles', Icon: Baby }, { label: 'Pet park', Icon: Dog },
            { label: 'Gimnasio exterior', Icon: Dumbbell }, { label: 'Gimnasio interior', Icon: MonitorCheck },
            { label: 'Alberca', Icon: Waves }, { label: 'Ludoteca', Icon: Library },
            { label: 'Casa club', Icon: Home }, { label: 'Terraza / Bar / Grill', Icon: Flame },
            { label: 'Junior club', Icon: Baby }, { label: 'Área de yoga', Icon: BabyIcon },
            { label: 'Cancha de fútbol', Icon: NutIcon }, { label: 'Canchas de básquet', Icon: MonitorCheck },
          ].map(({ label, Icon }, i) => (
            <div key={label} className={`${s.cardV} ${i % 2 ? s.cardSharp : s.cardRound}`}>
              <div className={s.cardVIcon}><Icon size={22} strokeWidth={1.6} /></div>
              <div className={s.cardVTitle}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <div className={s.sectionBlock}>
        <div className={s.sectionHeadingCenter}>
          <div className={s.headingIconLg}><ShieldCheck size={22} strokeWidth={1.6} /></div>
          <h4 className={s.h2SectionCenter}>Servicios urbanizados</h4>
          <p className={s.h2DescCenter}>Infraestructura lista para construir y habitar con calidad y seguridad.</p>
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
    </div>
  );
}

/* ---------- GRAN VILLA DEL MAR (con mejoras específicas) ---------- */
function GvdmPanel() {
  const project = 'Gran Villa del Mar';
  const waText = `${baseWaText}%20(%20Proyecto:%20${encodeURIComponent(project)}%20)`;

  type SubKey = 'formentera' | 'tenerife';
  const [sub, setSub] = useState<SubKey>('formentera');

  return (
    <div id="panel-gvdm" role="tabpanel" aria-labelledby="tab-gvdm" className={s.panel}>
      {/* HERO */}
      <div className={s.heroGrid}>
        <div className={s.heroText}>
          <span className={s.eyebrow}>Proyecto activo · Puerto Morelos</span>
          <h3 className={s.h3XL}>Gran Villa del Mar — Comunidad integral</h3>
          <p className={s.pLead}>
            La primera comunidad planteada para Puerto Morelos: integración de privadas
            residenciales y una gran avenida comercial llamada <strong>Gran Villa del Mar</strong>,
            en un entorno de gran riqueza natural dentro de la zona residencial del norte.
          </p>
          <div className={s.chips}>
            <span className={s.chip}>Puerto Morelos</span>
            <span className={s.chip}>Avenida comercial</span>
            <span className={s.chip}>Riqueza natural</span>
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
            <img src="/images/gvdm/hero.png" alt="Gran Villa del Mar — vista conceptual" />
          </div>
        </div>
      </div>

      {/* NUESTRAS PRIVADAS */}
      <div className={s.sectionBlock}>
        <div className={s.sectionHeadingCenter}>
          <div className={s.headingIconLg}><Building2 size={22} strokeWidth={1.6} /></div>
          <h4 className={s.h2SectionCenter}>Nuestras privadas</h4>
          <p className={s.h2DescCenter}>Explora <strong>Formentera</strong> y <strong>Tenerife</strong>.</p>
        </div>

        {/* sub-tabs */}
        <div className={s.subtabs} role="tablist" aria-label="Privadas">
          <button role="tab" aria-selected={sub === 'formentera'}
            className={`${s.subtab} ${sub === 'formentera' ? s.subActive : ''}`}
            onClick={() => setSub('formentera')}>Formentera</button>
          <button role="tab" aria-selected={sub === 'tenerife'}
            className={`${s.subtab} ${sub === 'tenerife' ? s.subActive : ''}`}
            onClick={() => setSub('tenerife')}>Tenerife</button>
        </div>

        {sub === 'formentera' ? <Formentera /> : <Tenerife />}
      </div>

      {/* FINANCIAMIENTO GLOBAL */}
      <div className={s.sectionBlock}>
        <div className={s.splitXL}>
          <div className={s.block}>
            <div className={s.sectionHeading}>
              <div className={s.headingIcon}><ShieldCheck size={18} strokeWidth={1.6} /></div>
              <h4 className={s.h2Section}>Financiamiento</h4>
            </div>

            <div className={s.financeStats}>
              <div className={s.financeStat}>
                <span className={s.financeNum}>5%</span>
                <span className={s.financeLabel}>Enganche</span>
              </div>
              <div className={s.financeStat}>
                <span className={s.financeNum}>5%</span>
                <span className={s.financeLabel}>Mensualidad</span>
              </div>
            </div>

            <div className={s.cardList}>
              <div className={s.checkItem}><span>●</span> Financiamiento directo al desarrollador</div>
              <div className={s.checkItem}><span>●</span> Financiamiento sin interés</div>
              <div className={s.checkItem}><span>●</span> Sin revisión de buro</div>
              <div className={s.checkItem}><span>●</span> Avalado por fideicomiso Banregio</div>
            </div>

            <a
              className={`${s.btn} ${s.btnPrimary} ${s.btnWide}`}
              target="_blank" rel="noopener"
              href={`https://wa.me/${waNumber}?text=${waText}`}
              data-gtm="click_whatsapp_project"
              data-project="gran-villa-del-mar"
            >
              Pídeme tu plan por WhatsApp
            </a>
          </div>

          <div className={s.block}>
            <div className={s.sectionHeading}>
              <div className={s.headingIcon}><MapIcon size={18} strokeWidth={1.6} /></div>
              <h4 className={s.h2Section}>Mapa de contexto</h4>
            </div>
            <div className={s.mediaFrame}>
              <img src="/images/gvdm/context-map.png" alt="Mapa de contexto Gran Villa del Mar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Subcomponentes de privadas con mejoras: imagen wide + tags compactos --- */
function Formentera() {
  return (
    <div className={s.privateWrap}>
      <div className={s.privateHero}>
        <h5 className={s.privateTitle}>Formentera</h5>
        <p className={s.privateDesc}>
          Número limitado de terrenos (desde 400 m²). Privacidad, áreas verdes y amenidades de primera:
          ideal para vivir con tranquilidad y estilo.
        </p>
      </div>

      <div className={s.split}>
        {/* Imagen ancha controlada */}
        <div className={s.block}>
          <div className={s.sectionHeading}>
            <div className={s.headingIcon}><LayoutTemplate size={18} strokeWidth={1.6} /></div>
            <h6 className={s.h3Section}>Distribución de lotes</h6>
          </div>
          <div className={s.mediaFrameWide}>
            <img src="/images/gvdm/formentera-map.png" alt="Mapa de lotes — Formentera" />
          </div>
        </div>

        {/* Amenidades en etiquetas compactas */}
        <div className={s.block}>
          <div className={s.sectionHeading}>
            <div className={s.headingIcon}><Home size={18} strokeWidth={1.6} /></div>
            <h6 className={s.h3Section}>Amenidades</h6>
          </div>
          <div className={s.amenityTags}>
            {[
              { label: 'Acceso principal', Icon: ShieldCheck },
              { label: 'Caseta de seguridad', Icon: ShieldCheck },
              { label: 'Albercas', Icon: Waves },
              { label: 'Casa club', Icon: Home },
              { label: 'Gimnasio interior', Icon: MonitorCheck },
              { label: 'Gimnasio exterior', Icon: Dumbbell },
              { label: 'Parque infantil', Icon: Baby },
              { label: 'Cowork con Wi-Fi', Icon: MonitorCheck },
              { label: 'Canchas uso múltiple', Icon: MonitorCheck },
              { label: 'Pet park', Icon: Dog },
              { label: 'Área de yoga', Icon: AxeIcon },
              { label: 'Free fit & Grill zone', Icon: Flame },
              { label: 'Senderos', Icon: Trees },
            ].map(({ label, Icon }) => (
              <span key={label} className={s.amenityTag}>
                <Icon size={16} strokeWidth={1.6} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Servicios urbanizados (etiquetas + descripciones cortas) */}
      <div className={s.sectionHeading}>
        <div className={s.headingIcon}><ShieldCheck size={18} strokeWidth={1.6} /></div>
        <h6 className={s.h3Section}>Servicios urbanizados</h6>
      </div>
      <div className={s.cardGridSm}>
        {[
          { label: 'Drenaje pluvial y sanitario', Icon: Bath, text: 'Desalojo para lluvia y sanitario.' },
          { label: 'Red eléctrica a pie de lote', Icon: Drill, text: 'Acometidas y muretes.' },
          { label: 'Alumbrado público', Icon: MonitorCheck, text: 'Iluminación vial y peatonal.' },
          { label: 'Suministro de agua', Icon: Waves, text: 'Toma a pie de lote.' },
          { label: 'Calles y avenidas pavimentadas', Icon: MonitorCheck, text: 'Vialidades principales y secundarias.' },
          { label: 'Barda perimetral', Icon: ShieldCheck, text: 'Delimitación y seguridad.' },
          { label: 'Banquetas y vegetación', Icon: Trees, text: 'Andadores y especies nativas.' },
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
  );
}

function Tenerife() {
  return (
    <div className={s.privateWrap}>
      <div className={s.privateHero}>
        <h5 className={s.privateTitle}>Tenerife</h5>
        <p className={s.privateDesc}>
          Lotes desde 252 m² para un estilo de vida dinámico y conectado, con acceso a diversas amenidades.
        </p>
      </div>

      <div className={s.split}>
        <div className={s.block}>
          <div className={s.sectionHeading}>
            <div className={s.headingIcon}><LayoutTemplate size={18} strokeWidth={1.6} /></div>
            <h6 className={s.h3Section}>Distribución de lotes</h6>
          </div>
          <div className={s.mediaFrameWide}>
            <img src="/images/gvdm/tenerife-map.png" alt="Mapa de lotes — Tenerife" />
          </div>
        </div>

        <div className={s.block}>
          <div className={s.sectionHeading}>
            <div className={s.headingIcon}><Home size={18} strokeWidth={1.6} /></div>
            <h6 className={s.h3Section}>Amenidades</h6>
          </div>
          <div className={s.amenityTags}>
            {[
              { label: 'Acceso principal', Icon: ShieldCheck },
              { label: 'Caseta de seguridad', Icon: ShieldCheck },
              { label: 'Albercas', Icon: Waves },
              { label: 'Casa club', Icon: Home },
              { label: 'Gimnasio interior', Icon: MonitorCheck },
              { label: 'Gimnasio exterior', Icon: Dumbbell },
              { label: 'Parque infantil', Icon: Baby },
              { label: 'Cowork con Wi-Fi', Icon: MonitorCheck },
              { label: 'Canchas uso múltiple', Icon: MonitorCheck },
              { label: 'Pet park', Icon: Dog },
              { label: 'Área de yoga', Icon: BedIcon },
              { label: 'Free fit & Grill zone', Icon: Flame },
              { label: 'Senderos', Icon: Trees },
            ].map(({ label, Icon }) => (
              <span key={label} className={s.amenityTag}>
                <Icon size={16} strokeWidth={1.6} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={s.sectionHeading}>
        <div className={s.headingIcon}><ShieldCheck size={18} strokeWidth={1.6} /></div>
        <h6 className={s.h3Section}>Servicios urbanizados</h6>
      </div>
      <div className={s.cardGridSm}>
        {[
          { label: 'Drenaje pluvial y sanitario', Icon: Bath, text: 'Desalojo para lluvia y sanitario.' },
          { label: 'Red eléctrica a pie de lote', Icon: Drill, text: 'Acometidas y muretes.' },
          { label: 'Alumbrado público', Icon: MonitorCheck, text: 'Iluminación vial y peatonal.' },
          { label: 'Suministro de agua', Icon: Waves, text: 'Toma a pie de lote.' },
          { label: 'Calles y avenidas pavimentadas', Icon: MonitorCheck, text: 'Vialidades principales y secundarias.' },
          { label: 'Barda perimetral', Icon: ShieldCheck, text: 'Delimitación y seguridad.' },
          { label: 'Banquetas y vegetación', Icon: Trees, text: 'Andadores y especies nativas.' },
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
  );
}
