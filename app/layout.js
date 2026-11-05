import './globals.css';

import Menu from '../shared/menu';

import MenuButton from '../shared/menuButton';

import { MenuProvider } from '../shared/MenuContext';

import { Amiri_Quran } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';

import { SpeedInsights } from '@vercel/speed-insights/next';

import SharePage from '../shared/sharePage';

import Date from '../shared/date';

const amiriQuran = Amiri_Quran({
  subsets: ['arabic'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-amiri',
});

export const metadata = {
  title: 'أورادي',
  description:
    'موقع لتجميع اكثر من عباده في مكان واحد لتسهيل العباده و التشجيع عليها',
};

export default async function RootLayout({ children }) {
  return (
    <html lang='ar' dir='rtl' className='h-full antialiased' style={{ fontFamily: 'var(--font-amiri), "Noto Sans Arabic", system-ui, sans-serif' }}>
      <head>
        <meta
          name='google-site-verification'
          content='EEKXSeqqrv7iJHEuT9fhceyVa2LhEJQ6q0UHcLgvVi0'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://awradi.vercel.app/' />
        <meta property='og:title' content='أورادي' />
        <meta
          property='og:description'
          content='موقع لتجميع اكثر من عباده في مكان واحد لتسهيل العباده و التشجيع عليها'
        />
        <meta
          property='og:image'
          content='https://awradi.vercel.app/favicon.ico'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='أورادي' />
        <meta
          name='twitter:description'
          content='موقع لتجميع اكثر من عباده في مكان واحد لتسهيل العباده و التشجيع عليها'
        />
        <meta
          name='twitter:image'
          content='https://awradi.vercel.app/favicon.ico'
        />
      </head>
      <body
        className={`min-h-full flex flex-col text-center text-xl ${amiriQuran.variable} ${amiriQuran.className}`}
      >
        <Analytics />
        <SpeedInsights />
        <MenuProvider>
          <header className='sticky top-3 z-30 p-3 mx-3 mb-3 bg-linear-to-r from-primary-700 via-primary-500 to-primary-400 rounded-2xl shadow-elevated border border-primary-300/50 backdrop-blur-sm transition-all duration-300'>
            <div className='flex justify-between items-center'>
              <MenuButton />
              <h1 className='font-bold text-2xl tracking-tight text-white drop-shadow-sm'>أورادي</h1>
              <SharePage />
            </div>
          </header>
          <Menu />
        </MenuProvider>
        <Date />
        {children}
      </body>
    </html>
  );
}
