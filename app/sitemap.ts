import type { MetadataRoute } from 'next'
import { getPathname } from '@/i18n/navigation'
import { routing, type AppPathname } from '@/i18n/routing'

const BASE_URL = 'https://www.vitalsail.ai'
const pages: AppPathname[] = ['/', '/diensten', '/producten', '/sectoren', '/technologie', '/over-ons', '/vacatures', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  for (const page of pages) {
    const languages: Record<string, string> = {}
    for (const l of routing.locales) {
      languages[l] = `${BASE_URL}${getPathname({ locale: l, href: page })}`
    }
    languages['x-default'] = `${BASE_URL}${getPathname({ locale: routing.defaultLocale, href: page })}`

    for (const locale of routing.locales) {
      entries.push({
        url: `${BASE_URL}${getPathname({ locale, href: page })}`,
        lastModified: new Date(),
        changeFrequency: page === '/' ? 'weekly' : 'monthly',
        priority: page === '/' ? 1.0 : 0.8,
        alternates: { languages }
      })
    }
  }
  return entries
}
