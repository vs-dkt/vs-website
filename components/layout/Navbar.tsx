'use client'

import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

type Nav = {
  home: string; services: string; products: string; sectors: string
  technology: string; about: string; contact: string
}

const localeLabels: Record<string, string> = { nl: 'NL', en: 'EN', de: 'DE' }

export default function Navbar({ locale, nav }: { locale: string; nav: Nav }) {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '', label: nav.home },
    { href: '/diensten', label: nav.services },
    { href: '/producten', label: nav.products },
    { href: '/sectoren', label: nav.sectors },
    { href: '/technologie', label: nav.technology },
    { href: '/over-ons', label: nav.about },
    { href: '/contact', label: nav.contact }
  ]

  function switchLocale(newLocale: string) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity" title="Home">
          <Image src="/images/logo-nieuw.jpg" alt="VitalSail" width={180} height={59} priority />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.href} href={`/${locale}${link.href}`}
              className="text-sm font-semibold text-gray-700 hover:text-[#009DD9] transition-colors tracking-wide uppercase">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-1 ml-8">
          {(['nl', 'en', 'de'] as const).map(l => (
            <button key={l} onClick={() => switchLocale(l)}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors ${locale === l ? 'text-white bg-[#009DD9]' : 'text-gray-500 hover:text-[#009DD9]'}`}>
              {localeLabels[l]}
            </button>
          ))}
        </div>

        <button className="lg:hidden p-2 text-gray-600" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {navLinks.map(link => (
            <Link key={link.href} href={`/${locale}${link.href}`}
              className="block py-3 text-sm font-semibold text-gray-700 border-b border-gray-50 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-4">
            {(['nl', 'en', 'de'] as const).map(l => (
              <button key={l} onClick={() => { switchLocale(l); setMobileOpen(false) }}
                className={`px-3 py-1 text-xs font-bold rounded ${locale === l ? 'text-white bg-[#009DD9]' : 'text-gray-500 border border-gray-200'}`}>
                {localeLabels[l]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
