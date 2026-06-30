import type { Metadata } from 'next'
import { sanityFetch } from '@/lib/sanity'
import { sectorsPageQuery } from '@/lib/queries'
import { fallbackSectors } from '@/lib/fallback'
import { buildAlternates } from '@/lib/seo'

type SectorsData = typeof fallbackSectors

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const d = await sanityFetch<SectorsData | null>(sectorsPageQuery, { locale })
  const title = d?.seoTitle || 'Sectoren — VitalSail'
  const description = d?.seoDescription || 'VitalSail biedt sectorspecifieke AI-oplossingen voor zorg, zakelijke dienstverlening en vastgoed. Ontdek de AI-kansen in uw branche.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://www.vitalsail.ai/${locale}/sectoren`, siteName: 'VitalSail' },
    alternates: buildAlternates('/sectoren', locale)
  }
}

export default async function SectorenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const raw = await sanityFetch<SectorsData | null>(sectorsPageQuery, { locale })
  const d = raw ?? fallbackSectors

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
        <div className="max-w-7xl mx-auto space-y-16">
          {d.sectors.map((sector, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-gray-100 last:border-0">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">{sector.title}</h2>
                <p className="text-[#009DD9] text-sm font-semibold mb-6">{sector.sub}</p>
                <div className="p-6 bg-[#f8fafc] rounded-xl">
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Pijnpunten</p>
                  <p className="text-gray-700 text-sm">{sector.pain}</p>
                </div>
                {sector.note && <p className="mt-4 text-xs text-gray-500 italic">{sector.note}</p>}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">AI-kansen</p>
                <ul className="space-y-3">
                  {sector.opportunities.map((opp, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#009DD9] shrink-0" />
                      <span className="text-gray-700">{opp.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
