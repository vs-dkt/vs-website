import { getPathname } from '@/i18n/navigation'
import { routing, type AppPathname } from '@/i18n/routing'

const BASE_URL = 'https://www.vitalsail.ai'

export function buildAlternates(pathname: AppPathname, locale: string) {
  const languages: Record<string, string> = {}
  for (const l of routing.locales) {
    languages[l] = `${BASE_URL}${getPathname({ locale: l, href: pathname })}`
  }
  languages['x-default'] = `${BASE_URL}${getPathname({ locale: routing.defaultLocale, href: pathname })}`

  return {
    canonical: `${BASE_URL}${getPathname({ locale, href: pathname })}`,
    languages
  }
}
