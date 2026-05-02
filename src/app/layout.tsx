import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import I18nProvider from '@/components/I18nProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://glassbox.id'),
  title: {
    default: 'Glassbox Media Indonesia — Digital Signage & OOH Indonesia',
    template: '%s | Glassbox',
  },
  description:
    'Tingkatkan merek Anda dengan Glassbox: digital signage, OOH transit, dan aktivasi pengalaman di ritel, transportasi, dan perhotelan di Indonesia.',
  keywords: [
    'digital signage',
    'OOH advertising',
    'DOOH',
    'iklan luar ruang',
    'periklanan outdoor',
    'media placement',
    'Jakarta',
    'Indonesia',
    'Glassbox',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    siteName: 'Glassbox Media Indonesia',
    images: [{ url: '/logo.png', width: 512, height: 512, alt: 'Glassbox Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logo.png'],
  },
  other: {
    'google-site-verification': 'WCtE1vFuxxy-JRH2YrsR3llXMkYdfg1kredJN91YbyU',
    'geo.region': 'ID-JK',
    'geo.placename': 'Jakarta',
    'geo.position': '-6.2088;106.8456',
    'ICBM': '-6.2088, 106.8456',
  },
  alternates: {
    languages: {
      'id-ID': 'https://glassbox.id',
      'en-US': 'https://glassbox.id',
      'x-default': 'https://glassbox.id',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0BA6DF" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
