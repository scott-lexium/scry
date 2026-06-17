import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const SITE_URL = 'https://scott-lexium.github.io/scry'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#app`,
      name: 'Scry',
      alternateName: ['scrcpy GUI', 'Scry Android Mirror'],
      description:
        'Free, open-source desktop app that mirrors and controls Android devices from macOS, Windows, or Linux. No terminal or ADB knowledge required. Built on scrcpy by Genymobile.',
      operatingSystem: ['macOS', 'Windows', 'Linux'],
      applicationCategory: 'UtilitiesApplication',
      softwareVersion: '1.0.0',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      downloadUrl: 'https://github.com/scott-lexium/scrcpy/releases/latest',
      url: SITE_URL,
      license: 'https://github.com/scott-lexium/scrcpy/blob/master/LICENSE',
      author: { '@id': `${SITE_URL}/#author` },
      sameAs: ['https://github.com/scott-lexium/scrcpy'],
      keywords:
        'Android mirror, screen mirror, scrcpy, ADB GUI, Android control PC, Android desktop app, no terminal, Scott Lexium',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#author`,
      name: 'Scott Lexium',
      alternateName: 'scottlexium',
      url: 'https://github.com/scott-lexium',
      sameAs: ['https://github.com/scott-lexium', 'https://github.com/scottlexium'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Scry',
      description: 'Mirror your Android device. No terminal required.',
      publisher: { '@id': `${SITE_URL}/#author` },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Scry — Mirror your Android device. No terminal required.',
    template: '%s | Scry',
  },
  description:
    'Scry is a free, open-source desktop app by Scott Lexium that mirrors and controls Android devices — no terminal needed. Available for macOS, Windows, and Linux. Built on scrcpy.',
  keywords: [
    'Scry', 'scrcpy GUI', 'Android mirror', 'Android screen mirror', 'Android control PC',
    'ADB GUI', 'scrcpy desktop app', 'mirror Android macOS', 'mirror Android Windows',
    'mirror Android Linux', 'screen cast Android', 'no terminal ADB', 'Android USB mirror',
    'Scott Lexium', 'scottlexium', 'scott-lexium',
  ],
  authors: [{ name: 'Scott Lexium', url: 'https://github.com/scott-lexium' }],
  creator: 'Scott Lexium',
  publisher: 'Scott Lexium',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Scry',
    title: 'Scry — Mirror your Android device. No terminal required.',
    description:
      'Free, open-source desktop app by Scott Lexium. Mirror and control your Android device — no ADB knowledge needed. macOS, Windows, Linux.',
    images: [{ url: '/icon.png', width: 512, height: 512, alt: 'Scry app icon' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scry — Mirror your Android device. No terminal required.',
    description:
      'Free, open-source GUI for scrcpy by Scott Lexium. Mirror and control Android from your desktop.',
    images: ['/icon.png'],
    creator: '@scottlexium',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
