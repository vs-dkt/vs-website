import { routing } from '@/i18n/routing'

const BASE_URL = 'https://www.vitalsail.ai'

export function buildAlternates(path: string, locale: string) {
  const languages: Record<string, string> = {}
  for (const l of routing.locales) {
    languages[l] = `${BASE_URL}/${l}${path}`
  }
  languages['x-default'] = `${BASE_URL}/${routing.defaultLocale}${path}`

  return {
    canonical: `${BASE_URL}/${locale}${path}`,
    languages
  }
}
