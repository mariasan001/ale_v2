'use client';

import { useMemo, useState } from 'react';
import s from './PromosSection.module.css';
import promos from '@/src/data/promos.json';

const waNumber =
  process.env.NEXT_PUBLIC_WA_NUMBER || '527227978944';
const baseWaText =
  process.env.NEXT_PUBLIC_WA_TEXT ||
  'Hola%20Alexandra,%20quiero%20aprovechar%20la%20promoci%C3%B3n.';

type FilterKey = 'all' | 'yucatan' | 'puerto_morelos';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'Todas' },
  { key: 'yucatan', label: 'Yucatán' },
  { key: 'puerto_morelos', label: 'Puerto Morelos' },
];

export default function PromosSection() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const list = useMemo(() => {
    if (filter === 'all') return promos;
    return promos.filter(
      (p: any) =>
        (p.location || '').toLowerCase().replace(/\s+/g, '_') === filter
    );
  }, [filter]);

  const waHref = (id: string | number) =>
    `https://wa.me/${waNumber}?text=${baseWaText}%20(%20Promo:%20${encodeURIComponent(
      String(id)
    )}%20)`;

  return (
    <section id="promos" className={s.section} aria-labelledby="promos-heading">
      <div className="container">
        {/* Header */}
        <div className={s.header}>
          <span className={s.badge}>Promociones</span>
          <h2 id="promos-heading" className={s.title}>
            Promociones vigentes
          </h2>
          <p className={s.subtitle}>
            Ofertas actuales en Yucatán y Puerto Morelos. Elige tu opción
            y solicita los detalles por WhatsApp.
          </p>
        </div>

        {/* Filtros */}
        <div className={s.filters} role="tablist" aria-label="Filtrar promociones">
          {FILTERS.map(f => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={`${s.filter} ${filter === f.key ? s.active : ''}`}
              onClick={() => setFilter(f.key)}
              data-gtm="click_nav"
              data-section="promos"
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid de promos */}
        <div className={s.grid}>
          {list.map((p: any) => (
            <article key={p.id} className={s.card}>
              <button
                className={s.media}
                onClick={() => p.image && setLightboxSrc(p.image)}
                aria-label={`Ver imagen de ${p.title}`}
              >
                {/* Usamos <img> para que funcione con rutas locales o URLs */}
                <img src={p.image} alt={p.title} loading="lazy" />
                {p.location && (
                  <span className={s.locChip}>
                    {p.location}
                  </span>
                )}
              </button>

              <div className={s.body}>
                <h3 className={s.h3}>{p.title}</h3>
                {p.description && (
                  <p className={s.desc}>{p.description}</p>
                )}

                <div className={s.meta}>
                  {p.until && (
                    <span className={s.until}>
                      Vigente hasta {p.until}
                    </span>
                  )}
                </div>

                <div className={s.ctaRow}>
                  <a
                    className={`${s.btn} ${s.btnPrimary}`}
                    href={waHref(p.id)}
                    target="_blank"
                    rel="noopener"
                    data-gtm="click_promo_whatsapp"
                    data-promo={p.id}
                  >
                    Aprovechar promoción
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox simple */}
      {lightboxSrc && (
        <div className={s.lightbox} onClick={() => setLightboxSrc(null)} role="dialog" aria-modal="true">
          <div className={s.lightboxInner}>
            <img src={lightboxSrc} alt="Promoción" />
          </div>
          <button className={s.lightboxClose} aria-label="Cerrar" onClick={() => setLightboxSrc(null)}>×</button>
        </div>
      )}
    </section>
  );
}
