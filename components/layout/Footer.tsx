import Link from 'next/link'
import Image from 'next/image'

type Nav = {
  services: string; products: string; sectors: string
  technology: string; about: string; vacancies: string; contact: string
  footerTagline: string; footerPrivacy: string
}

export default function Footer({ locale, nav }: { locale: string; nav: Nav }) {
  const year = new Date().getFullYear()

  const links = [
    { href: '/diensten', label: nav.services },
    { href: '/producten', label: nav.products },
    { href: '/sectoren', label: nav.sectors },
    { href: '/technologie', label: nav.technology },
    { href: '/over-ons', label: nav.about },
    { href: '/vacatures', label: nav.vacancies },
    { href: '/contact', label: nav.contact }
  ]

  return (
    <footer className="vs-gradient text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Image src="/images/logo-white.png" alt="VitalSail" width={160} height={42} className="mb-4" />
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">{nav.footerTagline}</p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-white/60">Menu</h4>
            <ul className="space-y-2">
              {links.map(l => (
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
              <li className="pt-3">
                <a
                  href="https://www.linkedin.com/company/vitalsail"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VitalSail op LinkedIn"
                  className="inline-flex items-center justify-center w-8 h-8 rounded bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">© {year} VitalSail BV. Alle rechten voorbehouden.</p>
          <span className="text-xs text-white/50 hover:text-white/80 transition-colors cursor-default">
            {nav.footerPrivacy}
          </span>
        </div>
      </div>
    </footer>
  )
}
