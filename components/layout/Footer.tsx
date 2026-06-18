import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="vs-gradient text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Image src="/images/logo-white.png" alt="VitalSail" width={160} height={42} className="mb-4" />
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white/60">Menu</h4>
            <ul className="space-y-2">
              {[
                { href: '/diensten', label: t('nav.services') },
                { href: '/producten', label: t('nav.products') },
                { href: '/sectoren', label: t('nav.sectors') },
                { href: '/technologie', label: t('nav.technology') },
                { href: '/over-ons', label: t('nav.about') },
                { href: '/contact', label: t('nav.contact') }
              ].map(l => (
                <li key={l.href}>
                  <Link href={`/${locale}${l.href}`} className="text-sm text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white/60">Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="mailto:info@vitalsail.ai" className="hover:text-white transition-colors">info@vitalsail.ai</a></li>
              <li><a href="https://www.vitalsail.ai" className="hover:text-white transition-colors">www.vitalsail.ai</a></li>
              <li className="pt-2 text-white/50 text-xs">KvK 42007328</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            {t('footer.copyright').replace('{year}', year.toString())}
          </p>
          <Link href={`/${locale}/privacy`} className="text-xs text-white/50 hover:text-white/80 transition-colors">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
