import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { sanityFetch } from '@/lib/sanity'
import { homePageQuery } from '@/lib/queries'
import { fallbackHome } from '@/lib/fallback'
import { buildAlternates } from '@/lib/seo'

type HomeData = typeof fallbackHome

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const d = await sanityFetch<HomeData | null>(homePageQuery, { locale })
  const title = d?.seoTitle || 'VitalSail — AI-adoptie & strategie'
  const description = d?.seoDescription || 'VitalSail begeleidt organisaties bij de praktische adoptie en strategische inzet van AI. Hands-on, sectorspecifiek en gericht op duurzame resultaten.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://www.vitalsail.ai/${locale}`, siteName: 'VitalSail', locale },
    alternates: buildAlternates('/', locale)
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const raw = await sanityFetch<HomeData | null>(homePageQuery, { locale })
  const d = raw ?? fallbackHome

  return (
    <>
      <section className="vs-gradient text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-6">VitalSail</p>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">{d.heroTagline}</h1>
          <p className="text-lg lg:text-xl text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed">{d.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-[#0F6FC6] font-bold rounded-lg hover:bg-white/90 transition-colors text-sm uppercase tracking-wide">
              {d.heroCTAPrimary}
            </Link>
            <Link href="/diensten" className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-lg hover:border-white hover:bg-white/10 transition-colors text-sm uppercase tracking-wide">
              {d.heroCTASecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 text-gray-900">{d.propositionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {d.propositionItems.map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-gray-100 hover:border-[#009DD9]/30 hover:shadow-lg transition-all">
                <h3 className="text-lg font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{d.maturityTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{d.maturitySubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {d.maturityPhases.map((phase, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl font-black mb-3 vs-gradient-text">{phase.nr}</div>
                <h3 className="text-sm font-black text-gray-900 mb-2 uppercase tracking-wide">{phase.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">{d.sectorsTitle}</h2>
            <p className="text-lg text-gray-600">{d.sectorsSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Zorg', 'Zakelijke Dienstverlening', 'Real Estate'].map((sector, i) => (
              <Link key={i} href="/sectoren" className="p-8 rounded-xl vs-gradient text-white hover:opacity-95 transition-opacity">
                <h3 className="text-xl font-black mb-3">{sector}</h3>
                <p className="text-white/70 text-sm">Ontdek de AI-kansen in deze sector →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0F6FC6] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">{d.ctaTitle}</h2>
          <p className="text-lg text-white/80 mb-10">{d.ctaBody}</p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-[#0F6FC6] font-black rounded-lg hover:bg-white/90 transition-colors text-sm uppercase tracking-wide">
            {d.ctaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
