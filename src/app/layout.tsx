import type { Metadata } from 'next';

import './globals.css';
import React from 'react';
import Footer from './Components/Footer';

export const metadata: Metadata = {
  title: 'Fotografia Klaudia Cichórz',
  description: `Klaudia Cichórz, fotograf ze Skawiny, specjalizuje się w fotografii reportażowej, rodzinnej i sesjach w studio. 
  Zapraszam do współpracy w Skawine, Krakowie, Brzeźnicy i Wadowicach`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        {children} <Footer />
      </body>
    </html>
  );
}
