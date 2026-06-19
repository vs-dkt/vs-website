import type { Metadata } from 'next'
import Link from 'next/link'
import { sanityFetch } from '@/lib/sanity'
import { productsPageQuery } from '@/lib/queries'
import { fallbackProducts } from '@/lib/fallback'

type ProductsData = typeof fallbackProducts

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const d = await sanityFetch<ProductsData | null>(productsPageQuery, { locale })
  const title = d?.seoTitle || 'AI-producten — VitalSail'
  const description = d?.seoDescription || 'VitalSail bouwt generieke AI-producten: intelligente assistenten, geautomatiseerde workflows en sector-specifieke AI-toepassingen.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://vitalsail.ai/${locale}/producten`, siteName: 'VitalSail' },
    alternates: { canonical: `https://vitalsail.ai/${locale}/producten` }
  }
}

export default async function ProductenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const raw = await sanityFetch<ProductsData | null>(productsPageQuery, { locale })
  const d = raw ?? fallbackProducts

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
          <p className="text-lg text-gray-600 max-w-3xl mb-16">{d.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.categories.map((cat, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#f8fafc] border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl vs-gradient mb-6" />
                <h3 className="text-xl font-black text-gray-900 mb-3">{cat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f8fafc] text-center">
        <p className="text-lg text-gray-600 mb-8">{d.ctaLabel}</p>
        <Link href={`/${locale}/contact`} className="inline-block px-8 py-4 vs-gradient text-white font-black rounded-lg text-sm uppercase tracking-wide hover:opacity-90 transition-opacity">
          Contact opnemen
        </Link>
      </section>
    </>
  )
}
