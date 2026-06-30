import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.vitalsail.ai'
const locales = ['nl', 'en', 'de']
const defaultLocale = 'nl'
const pages = ['', '/diensten', '/producten', '/sectoren', '/technologie', '/over-ons', '/vacatures', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  for (const page of pages) {
    const languages: Record<string, string> = {}
    for (const l of locales) {
      languages[l] = `${BASE_URL}/${l}${page}`
    }
    languages['x-default'] = `${BASE_URL}/${defaultLocale}${page}`

    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: { languages }
      })
    }
  }
  return entries
}
