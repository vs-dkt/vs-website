'use client'

import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const localeLabels: Record<string, string> = { nl: 'NL', en: 'EN', de: 'DE' }

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/diensten', label: t('services') },
    { href: '/producten', label: t('products') },
    { href: '/sectoren', label: t('sectors') },
    { href: '/technologie', label: t('technology') },
    { href: '/over-ons', label: t('about') },
    { href: '/contact', label: t('contact') }
  ]

  function switchLocale(newLocale: string) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
          <Image src="/images/icon.png" alt="VitalSail" width={36} height={36} priority />
          <span className="font-black text-xl" style={{ fontFamily: 'Lato, sans-serif' }}>
            <span style={{ color: '#3EC288' }}>Vital</span><span style={{ color: '#0F6FC6' }}>Sail</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-sm font-semibold text-gray-700 hover:text-[#009DD9] transition-colors tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-1 ml-8">
          {(['nl', 'en', 'de'] as const).map(l => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors ${
                locale === l
                  ? 'text-white bg-[#009DD9]'
                  : 'text-gray-500 hover:text-[#009DD9]'
              }`}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>

        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="block py-3 text-sm font-semibold text-gray-700 border-b border-gray-50 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-4">
            {(['nl', 'en', 'de'] as const).map(l => (
              <button
                key={l}
                onClick={() => { switchLocale(l); setMobileOpen(false) }}
                className={`px-3 py-1 text-xs font-bold rounded ${
                  locale === l ? 'text-white bg-[#009DD9]' : 'text-gray-500 border border-gray-200'
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
