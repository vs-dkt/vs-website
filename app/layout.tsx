import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalsail.ai'),
  title: {
    default: 'VitalSail — AI-adoptie & strategie',
    template: '%s | VitalSail'
  },
  description: 'VitalSail begeleidt organisaties bij de praktische adoptie en strategische inzet van Artificial Intelligence.',
  openGraph: {
    siteName: 'VitalSail',
    images: [{ url: '/images/logo-nieuw.jpg', width: 1200, height: 630, alt: 'VitalSail' }]
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
