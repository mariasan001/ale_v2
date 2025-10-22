'use client';
import { useState } from 'react';
const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '527227978944';
const enc = (s: string) => encodeURIComponent(s);
export default function ContactForm(){
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'error'>('idle');
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      setStatus('sending');
      const fd = new FormData(e.currentTarget);
      const lines = [
        'Hola Alexandra, me gustaría más información.',
        `Nombre: ${String(fd.get('name')||'')}`,
        `Teléfono: ${String(fd.get('phone')||'')}`,
        `Proyecto: ${String(fd.get('project')||'')}`,
        fd.get('message') ? `Mensaje: ${String(fd.get('message')||'')}` : ''
      ].filter(Boolean);
      const url = `https://wa.me/${waNumber}?text=${enc(lines.join('\n'))}`;
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event:'generate_lead', method:'form_whatsapp', project: String(fd.get('project')||'') });
      window.open(url, '_blank', 'noopener,noreferrer');
      setStatus('ok'); (e.currentTarget as HTMLFormElement).reset();
    }catch{
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event:'form_error', method:'form_whatsapp'});
      setStatus('error');
    }
  };
  return (
    <section id="lead-form" className="section">
      <div className="container">
        <h2 className="h2">¿Prefieres que te contacte?</h2>
        <p className="p">Déjame tus datos y abre WhatsApp para continuar la conversación.</p>
        <form onSubmit={onSubmit} style={{marginTop:16}}>
          <div className="grid">
            <div className="col-6"><label>Nombre</label><input name="name" required placeholder="Tu nombre" style={{width:'100%',padding:'12px',borderRadius:12,background:'#0f1312',border:'1px solid #14201d',color:'white'}}/></div>
            <div className="col-6"><label>Teléfono</label><input name="phone" required placeholder="+52 ..." style={{width:'100%',padding:'12px',borderRadius:12,background:'#0f1312',border:'1px solid #14201d',color:'white'}}/></div>
            <div className="col-12"><label>Proyecto de interés</label><select name="project" required style={{width:'100%',padding:'12px',borderRadius:12,background:'#0f1312',border:'1px solid #14201d',color:'white'}}><option value="Dosha">Dosha (Yucatán)</option><option value="Gran Villa del Mar">Gran Villa del Mar (Puerto Morelos)</option></select></div>
            <div className="col-12"><label>Mensaje</label><textarea name="message" rows={4} placeholder="Cuéntame qué buscas" style={{width:'100%',padding:'12px',borderRadius:12,background:'#0f1312',border:'1px solid #14201d',color:'white'}}/></div>
          </div>
          <div style={{marginTop:12,display:'flex',gap:8,alignItems:'center'}}>
            <button className="btn btn-primary" disabled={status==='sending'}>Continuar en WhatsApp</button>
            {status==='ok' && <span style={{color:'var(--accent)'}}>Abriendo WhatsApp…</span>}
            {status==='error' && <span style={{color:'#ffbaba'}}>Ocurrió un error. Intenta de nuevo.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
