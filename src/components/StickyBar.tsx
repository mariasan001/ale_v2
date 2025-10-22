const phone = process.env.NEXT_PUBLIC_PHONE || '+52 722 797 8944';
const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '527227978944';
const waText = process.env.NEXT_PUBLIC_WA_TEXT || 'Hola%20Alexandra,%20quiero%20informes%20de%20los%20terrenos.';

export default function StickyBar(){
  return (
    <div className="stickyBar">
      <a className="call" href={`tel:${phone}`} data-gtm="click_call" data-section="sticky">Llamar</a>
      <a className="wa" target="_blank" rel="noopener"
         href={`https://wa.me/${waNumber}?text=${waText}`}
         data-gtm="click_whatsapp" data-section="sticky">
        WhatsApp
      </a>
    </div>
  );
}
