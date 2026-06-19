import type { MetadataRoute } from 'next'

const locales = ['nl', 'en', 'de']
const pages = ['', '/diensten', '/producten', '/sectoren', '/technologie', '/over-ons', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `https://vitalsail.ai/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8
      })
    }
  }
  return entries
}
