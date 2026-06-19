import type { Metadata } from 'next'
import Link from 'next/link'
import { sanityFetch } from '@/lib/sanity'
import { servicesPageQuery } from '@/lib/queries'
import { fallbackServices } from '@/lib/fallback'

type ServicesData = typeof fallbackServices

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const d = await sanityFetch<ServicesData | null>(servicesPageQuery, { locale })
  const title = d?.seoTitle || 'Diensten — VitalSail'
  const description = d?.seoDescription || 'Ontdek hoe VitalSail organisaties begeleidt met AI-workshops, strategische sessies, implementatie en coaching.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://www.vitalsail.ai/${locale}/diensten`, siteName: 'VitalSail' },
    alternates: { canonical: `https://www.vitalsail.ai/${locale}/diensten` }
  }
}

export default async function DienstenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const raw = await sanityFetch<ServicesData | null>(servicesPageQuery, { locale })
  const d = raw ?? fallbackServices

  return (
    <>
      <section className="vs-gradient text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-white/60 mb-4">VitalSail</p>
          <h1 className="text-5xl font-black mb-6">{d.title}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{d.subtitle}</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {d.services.map((service, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-2xl border border-gray-100 hover:border-[#009DD9]/20 hover:shadow-lg transition-all">
              <div className="lg:col-span-1">
                <div className="text-5xl font-black vs-gradient-text mb-3">{service.nr}</div>
                <h2 className="text-2xl font-black text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-600">{service.desc}</p>
              </div>
              <div className="lg:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#009DD9] shrink-0" />
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0F6FC6] text-white text-center">
        <h2 className="text-3xl font-black mb-6">Klaar voor de volgende stap?</h2>
        <Link href={`/${locale}/contact`} className="inline-block px-8 py-4 bg-white text-[#0F6FC6] font-black rounded-lg text-sm uppercase tracking-wide hover:bg-white/90 transition-colors">
          Neem contact op
        </Link>
      </section>
    </>
  )
}
