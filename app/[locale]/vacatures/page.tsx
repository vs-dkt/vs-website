import type { Metadata } from 'next'
import Link from 'next/link'
import { sanityFetch } from '@/lib/sanity'
import { vacanciesPageQuery, vacanciesQuery } from '@/lib/queries'
import { fallbackVacanciesPage } from '@/lib/fallback'

type VacanciesPageData = typeof fallbackVacanciesPage
type Vacancy = { _id: string; title: string; description: string }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const d = await sanityFetch<VacanciesPageData | null>(vacanciesPageQuery, { locale })
  const title = d?.seoTitle || 'Vacatures — VitalSail'
  const description = d?.seoDescription || 'Bekijk de openstaande vacatures bij VitalSail.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://www.vitalsail.ai/${locale}/vacatures`, siteName: 'VitalSail' },
    alternates: { canonical: `https://www.vitalsail.ai/${locale}/vacatures` }
  }
}

export default async function VacaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const [raw, vacancies] = await Promise.all([
    sanityFetch<VacanciesPageData | null>(vacanciesPageQuery, { locale }),
    sanityFetch<Vacancy[]>(vacanciesQuery, { locale })
  ])
  const d = raw ?? fallbackVacanciesPage
  const list = vacancies ?? []

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
        <div className="max-w-4xl mx-auto">
          {list.length === 0 ? (
            <p className="text-gray-500 text-lg">{d.emptyMessage}</p>
          ) : (
            <div className="space-y-10">
              {list.map(vacancy => (
                <div key={vacancy._id} className="p-8 rounded-2xl border border-gray-100 hover:border-[#009DD9]/30 hover:shadow-lg transition-all">
                  <h2 className="text-2xl font-black text-gray-900 mb-4">{vacancy.title}</h2>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line mb-8">{vacancy.description}</div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:info@vitalsail.ai"
                      className="inline-flex items-center gap-2 px-6 py-3 vs-gradient text-white font-bold rounded-lg text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
                    >
                      Mail ons
                    </a>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#009DD9] text-[#009DD9] font-bold rounded-lg text-sm uppercase tracking-wide hover:bg-[#009DD9]/5 transition-colors"
                    >
                      Contactformulier
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
