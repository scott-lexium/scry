import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'scrcpy GUI — Mirror your Android device. No terminal required.',
  description:
    'A beautiful desktop app to mirror, control, and manage your Android device. Built on scrcpy. Free and open source.',
  openGraph: {
    title: 'scrcpy GUI',
    description: 'Mirror your Android device without touching a terminal.',
    images: ['/icon.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
