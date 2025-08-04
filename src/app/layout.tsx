import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flirty.ai - Join the exclusive BETA',
  description: 'The next generation AI companion platform. Get early access to our exclusive BETA.',
  keywords: 'AI companion, AI chat, BETA access, Flirty.ai, AI conversation, AI relationship',
  authors: [{ name: 'Flirty.ai Team' }],
  creator: 'Flirty.ai',
  publisher: 'Flirty.ai',
  openGraph: {
    title: 'Flirty.ai - The Next Generation AI Companion',
    description: 'Join our exclusive BETA program and be one of the first to experience the future of AI communication technology.',
    url: 'https://flirty.ai',
    siteName: 'Flirty.ai',
    images: [
      {
        url: 'https://flirty.ai/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flirty.ai - The Next Generation AI Companion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flirty.ai - The Next Generation AI Companion',
    description: 'Join our exclusive BETA program and be one of the first to experience the future of AI communication technology.',
    images: ['https://flirty.ai/images/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
