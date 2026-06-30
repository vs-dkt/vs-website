import type { Metadata } from 'next'
import { sanityFetch } from '@/lib/sanity'
import { technologyPageQuery } from '@/lib/queries'
import { fallbackTechnology } from '@/lib/fallback'
import { buildAlternates } from '@/lib/seo'

type TechData = typeof fallbackTechnology

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const d = await sanityFetch<TechData | null>(technologyPageQuery, { locale })
  const title = d?.seoTitle || 'Technologie — VitalSail'
  const description = d?.seoDescription || 'VitalSail heeft expertise in LLM\'s, AI-agents, vector databases, MCP, GPU-hosting en vibe-coding. Ontdek onze technologische propositie.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://www.vitalsail.ai/${locale}/technologie`, siteName: 'VitalSail' },
    alternates: buildAlternates('/technologie', locale)
  }
}

export default async function TechnologiePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const raw = await sanityFetch<TechData | null>(technologyPageQuery, { locale })
  const d = raw ?? fallbackTechnology

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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.areas.map((area, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:border-[#009DD9]/30 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-8 vs-gradient rounded-full shrink-0" />
                  <h3 className="text-xl font-black text-gray-900">{area.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
