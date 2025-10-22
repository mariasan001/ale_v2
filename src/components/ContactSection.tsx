import Script from 'next/script';

const phone = process.env.NEXT_PUBLIC_PHONE || '+52 722 797 8944';
const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '527227978944';

export default function ContactSection(){
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alexandra",
    "jobTitle": "Asesora de inversiones",
    "worksFor": { "@type": "Organization", "name": "Everland" },
    "telephone": phone,
    "url": "https://tu-dominio.com/alexandra",
    "areaServed": ["Yucatán","Quintana Roo","México"],
    "contactPoint": [{ "@type": "ContactPoint", "telephone": phone, "contactType": "sales", "availableLanguage": ["es"] }]
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2">Contacto</h2>
        <p className="p">Comunícate conmigo para resolver cualquier duda.</p>
        <div className="grid" style={{marginTop:16}}>
          <div className="card col-6">
            <h3 style={{marginTop:0}}>Datos</h3>
            <p>Teléfono: <a href={`tel:${phone}`} data-gtm="click_call" data-section="contact">{phone}</a></p>
            <p>WhatsApp: <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener" data-gtm="click_whatsapp" data-section="contact">Enviar mensaje</a></p>
            <p>Horario: Lun–Sáb 9:00–18:00 (CDMX)</p>
            <p><a href="/aviso-de-privacidad" target="_blank" rel="noopener">Aviso de privacidad</a></p>
          </div>
          <div className="card col-6" style={{height:280}}>
            <iframe title="Mapa" src="https://www.google.com/maps?q=M%C3%A9rida,+Yucat%C3%A1n&output=embed" width="100%" height="100%" style={{border:0}} loading="lazy"/>
          </div>
        </div>
      </div>
      <Script id="ld-person" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }} />
    </section>
  );
}
