import projects from '@/src/data/projects.json';

const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '527227978944';
const waText = process.env.NEXT_PUBLIC_WA_TEXT || 'Hola%20Alexandra,%20quiero%20informes%20de%20los%20terrenos.';

export default function ProjectsSection(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2">Proyectos activos</h2>
        <div className="grid" style={{marginTop:16}}>
          {projects.map((p)=> (
            <article key={p.slug} className="card col-6">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                <h3 style={{margin:'0 0 8px 0'}}>{p.name}</h3>
                {p.promoTag ? <span className="badge">{p.promoTag}</span> : null}
              </div>
              <p style={{color:'#cfe5de', margin:'4px 0'}}>{p.location}</p>
              <p className="p">{p.description}</p>
              <ul style={{margin:'8px 0 12px 20px'}}>
                {p.amenities.map((a)=> <li key={a}>{a}</li>)}
              </ul>
              <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                {p.hasVirtualTour && (
                  <a className="btn" href={p.virtualTourUrl} target="_blank" rel="noopener"
                     data-gtm="click_view_3d" data-project={p.name}>
                    Ver recorrido 3D
                  </a>
                )}
                <a className="btn btn-outline" href={`#map`} data-gtm="click_view_map" data-project={p.name}>
                  Ver mapa
                </a>
                <a className="btn btn-primary"
                   href={`https://wa.me/${waNumber}?text=${waText}`}
                   target="_blank" rel="noopener"
                   data-gtm="click_whatsapp_project" data-project={p.name}>
                  Quiero informes
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
