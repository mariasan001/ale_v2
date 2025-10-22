// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
// import './globals.v4.design.css'; // <- si ya la usas, déjala activa

import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600','700','800'],
  display: 'swap',
  variable: '--font-poppins', // expone la var CSS
});

export const metadata: Metadata = {
  title: 'Alexandra — Asesora Everland',
  description: 'Terrenos en Yucatán y Puerto Morelos con asesoría personalizada.',
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=${GTM_ID}'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <noscript
          dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}
        />
        {children}
      </body>
    </html>
  );
}
