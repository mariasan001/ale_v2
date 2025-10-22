import promos from '@/src/data/promos.json';

const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '527227978944';
const waText = process.env.NEXT_PUBLIC_WA_TEXT || 'Hola%20Alexandra,%20quiero%20aprovechar%20la%20promoci%C3%B3n.';

export default function PromosSection(){
  return (
    <section id="promos" className="section">
      <div className="container">
        <h2 className="h2">Promociones vigentes</h2>
        <div className="grid" style={{marginTop:16}}>
          {promos.map((p)=> (
            <article key={p.id} className="card col-6">
              <h3 style={{margin:'0 0 8px 0'}}>{p.title}</h3>
              <p className="p" style={{margin:'0 0 8px 0'}}>{p.description}</p>
              <p style={{color:'#9db7b0', fontSize:13}}>Vigente hasta {p.until}</p>
              <div style={{marginTop:8}}>
                <a className="btn btn-primary"
                   href={`https://wa.me/${waNumber}?text=${waText}`}
                   data-gtm="click_promo_whatsapp" data-promo={p.id}
                   target="_blank" rel="noopener">
                  Aprovechar promoción
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
