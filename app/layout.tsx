import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';

export const metadata: Metadata = {
  metadataBase: new URL('https://sujal.vercel.app'),
  title: {
    default: 'Sujal Shah',
    template: '%s | Sujal Shah',
  },
  description:
    'Interactive design meets technical expertise. Sujal Shah builds user-friendly web experiences.',
  openGraph: {
    title: 'Sujal Shah',
    description:
      'Interactive design meets technical expertise. Sujal Shah builds user-friendly web experiences.',
    url: 'https://sujal.vercel.app',
    siteName: 'Sujal Shah',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Sujal Shah',
    card: 'summary_large_image',
  },
  verification: {
    google: 'emXNaAu1bB-dJ_oYwAJZSHD-sjn-n__6Zb70R-8Ffn4',
    yandex: 'b18e8e714a783eac',
  },
};

const cx = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-white bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <div className="noise" />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
