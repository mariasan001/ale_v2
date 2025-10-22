'use client';
import { useEffect } from 'react';
declare global { interface Window { dataLayer: any[] | undefined } }
export default function GTMActionsBinder(){
  useEffect(()=>{
    const clickHandler = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest('a[data-gtm]') as HTMLAnchorElement | null;
      if(!a) return;
      const evt = a.getAttribute('data-gtm'); if(!evt) return;
      const payload: Record<string, any> = { event: evt };
      ['data-project','data-promo','data-section'].forEach(k=>{
        const v = a.getAttribute(k); if(v) payload[k.replace('data-','')] = v;
      });
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
    };
    const scrollHandler = () => {
      const scrolled = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      if(scrolled >= 0.5){
        window.removeEventListener('scroll', scrollHandler);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event:'scroll_50' });
      }
    };
    document.addEventListener('click', clickHandler);
    window.addEventListener('scroll', scrollHandler);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event:'view_content' });
    return ()=>{
      document.removeEventListener('click', clickHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
  },[]);
  return null;
}
