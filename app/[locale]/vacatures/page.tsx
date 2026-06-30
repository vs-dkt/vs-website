import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { PortableText } from '@portabletext/react'
import { sanityFetch } from '@/lib/sanity'
import { vacanciesPageQuery, vacanciesQuery } from '@/lib/queries'
import { fallbackVacanciesPage } from '@/lib/fallback'
import { buildAlternates } from '@/lib/seo'

type VacanciesPageData = typeof fallbackVacanciesPage
type PortableTextBlock = { _type: string; _key: string; [key: string]: unknown }
type Vacancy = { _id: string; title: string; description: PortableTextBlock[] | null }

const ptComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => <h2 className="text-xl font-black text-gray-900 mt-6 mb-2">{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{children}</h3>,
    normal: ({ children }: { children?: React.ReactNode }) => <p className="text-gray-600 mb-3 leading-relaxed">{children}</p>
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => <ul className="list-disc list-inside space-y-1 mb-3 text-gray-600">{children}</ul>,
    number: ({ children }: { children?: React.ReactNode }) => <ol className="list-decimal list-inside space-y-1 mb-3 text-gray-600">{children}</ol>
  }
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const d = await sanityFetch<VacanciesPageData | null>(vacanciesPageQuery, { locale })
  const title = d?.seoTitle || 'Vacatures — VitalSail'
  const description = d?.seoDescription || 'Bekijk de openstaande vacatures bij VitalSail.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://www.vitalsail.ai/${locale}/vacatures`, siteName: 'VitalSail' },
    alternates: buildAlternates('/vacatures', locale)
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
                  <div className="mb-8">
                    {vacancy.description
                      ? <PortableText value={vacancy.description} components={ptComponents} />
                      : null}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:info@vitalsail.ai"
                      className="inline-flex items-center gap-2 px-6 py-3 vs-gradient text-white font-bold rounded-lg text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
                    >
                      Mail ons
                    </a>
                    <Link
                      href="/contact"
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
