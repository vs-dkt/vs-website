import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vitalsail.ai'),
  title: {
    default: 'VitalSail — AI-adoptie & strategie',
    template: '%s | VitalSail'
  },
  description: 'VitalSail begeleidt organisaties bij de praktische adoptie en strategische inzet van Artificial Intelligence.',
  openGraph: {
    siteName: 'VitalSail',
    images: [{ url: '/images/logo-nieuw.jpg', width: 1200, height: 630, alt: 'VitalSail' }]
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
