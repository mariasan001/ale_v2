const phone = process.env.NEXT_PUBLIC_PHONE || '+52 722 797 8944';
const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '527227978944';
const waText = process.env.NEXT_PUBLIC_WA_TEXT || 'Hola%20Alexandra,%20quiero%20informes%20de%20los%20terrenos.';

export default function Footer(){
  return (
    <footer id="footer" className="footer">
      <div className="container" style={{display:'flex', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
        <div>
          <h3 style={{margin:'0 0 8px 0'}}>Alexandra — Asesora Everland</h3>
          <p className="p">Terrenos en Yucatán y Puerto Morelos • Asesoría personalizada</p>
        </div>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <a href={`tel:${phone}`} data-gtm="click_call" data-section="footer">Teléfono</a>
          <span>•</span>
          <a href={`https://wa.me/${waNumber}?text=${waText}`} target="_blank" rel="noopener"
             data-gtm="click_whatsapp" data-section="footer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
