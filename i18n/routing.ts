import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['nl', 'en', 'de'],
  defaultLocale: 'nl',
  localePrefix: 'always',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/diensten': { nl: '/diensten', en: '/services', de: '/leistungen' },
    '/producten': { nl: '/producten', en: '/products', de: '/produkte' },
    '/sectoren': { nl: '/sectoren', en: '/sectors', de: '/branchen' },
    '/technologie': { nl: '/technologie', en: '/technology', de: '/technologie' },
    '/over-ons': { nl: '/over-ons', en: '/about-us', de: '/ueber-uns' },
    '/vacatures': { nl: '/vacatures', en: '/vacancies', de: '/stellenangebote' },
    '/contact': { nl: '/contact', en: '/contact', de: '/kontakt' }
  }
})

export type AppPathname = keyof typeof routing.pathnames
