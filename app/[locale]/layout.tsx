import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { sanityFetch } from '@/lib/sanity'
import { navigationQuery } from '@/lib/queries'
import { fallbackNavigation } from '@/lib/fallback'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'VitalSail — Van AI-adoptie naar AI-driven organisatie',
    template: '%s | VitalSail'
  },
  description: 'VitalSail begeleidt organisaties bij de praktische adoptie en strategische inzet van Artificial Intelligence.',
  openGraph: { siteName: 'VitalSail', type: 'website' }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'nl' | 'en' | 'de')) {
    notFound()
  }

  const raw = await sanityFetch<typeof fallbackNavigation | null>(navigationQuery, { locale })
  const nav = raw ?? fallbackNavigation

  return (
    <html lang={locale} className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">
        <Navbar locale={locale} nav={nav} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} nav={nav} />
      </body>
    </html>
  )
}
