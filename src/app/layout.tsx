import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ISFPS LEADER - Institut Supérieur de Formations des Paramédicaux et Sciences de la Société',
  description: 'Institut Supérieur de Formations des Paramédicaux et Sciences de la Société. Formations reconnues par la FOP et habilitées par le MESUPRES. 5 filières d\'excellence.',
  keywords: 'ISFPS, Institut Supérieur, Formations Paramédicales, Sciences de la Société, FOP, MESUPRES, formations Madagascar, paramédical, gestion, droit, communication, informatique',
  authors: [{ name: 'ISFPS LEADER Team' }],
  creator: 'ISFPS LEADER',
  publisher: 'ISFPS LEADER',
  openGraph: {
    title: 'ISFPS LEADER - Le leader reste toujours le premier',
    description: 'Institut Supérieur de Formations des Paramédicaux et Sciences de la Société. Diplômes reconnus par la FOP et formations habilitées par le MESUPRES.',
    url: 'https://isfps-leader.mg',
    siteName: 'ISFPS LEADER',
    images: [
      {
        url: 'https://isfps-leader.mg/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ISFPS LEADER - Institut Supérieur de Formations des Paramédicaux et Sciences de la Société',
      },
    ],
    locale: 'fr_MG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISFPS LEADER - Le leader reste toujours le premier',
    description: 'Institut Supérieur de Formations des Paramédicaux et Sciences de la Société. Diplômes reconnus par la FOP et formations habilitées par le MESUPRES.',
    images: ['https://isfps-leader.mg/images/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen">
          <div className="flex-grow">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
