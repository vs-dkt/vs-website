import type { Metadata } from 'next'
import { sanityFetch } from '@/lib/sanity'
import { aboutPageQuery } from '@/lib/queries'
import { fallbackAbout } from '@/lib/fallback'
import { buildAlternates } from '@/lib/seo'

type AboutData = typeof fallbackAbout

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const d = await sanityFetch<AboutData | null>(aboutPageQuery, { locale })
  const title = d?.seoTitle || 'Over Ons — VitalSail'
  const description = d?.seoDescription || 'VitalSail is een AI-adoptie consultancy met missie om organisaties hands-on te begeleiden naar een AI-driven toekomst.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://www.vitalsail.ai/${locale}/over-ons`, siteName: 'VitalSail' },
    alternates: buildAlternates('/over-ons', locale)
  }
}

export default async function OverOnsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const raw = await sanityFetch<AboutData | null>(aboutPageQuery, { locale })
  const d = raw ?? fallbackAbout

  return (
    <>
      <section className="vs-gradient text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-white/60 mb-4">VitalSail</p>
          <h1 className="text-5xl font-black mb-6">{d.title}</h1>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#009DD9] mb-3">Missie</p>
              <p className="text-lg text-gray-700 leading-relaxed">{d.mission}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#009DD9] mb-3">Visie</p>
              <p className="text-lg text-gray-700 leading-relaxed">{d.vision}</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[#009DD9] mb-6">Ons verhaal</p>
            {d.story.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
            ))}
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[#009DD9] mb-8">Onderscheidend vermogen</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {d.values.map((val, i) => (
                <div key={i} className="p-6 bg-[#f8fafc] rounded-xl border border-gray-100">
                  <h3 className="font-black text-gray-900 mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
