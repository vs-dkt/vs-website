import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function ProductenPage() {
  const t = useTranslations('products')
  const locale = useLocale()

  const categories = [0, 1, 2].map(i => ({
    title: t(`categories.${i}.title`),
    desc: t(`categories.${i}.desc`)
  }))

  return (
    <>
      <section className="vs-gradient text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-white/60 mb-4">VitalSail</p>
          <h1 className="text-5xl font-black mb-6">{t('title')}</h1>
          <p className="text-xl text-white/80 max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg text-gray-600 max-w-3xl mb-16">{t('intro')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
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
        <p className="text-lg text-gray-600 mb-8">{t('cta')}</p>
        <Link href={`/${locale}/contact`} className="inline-block px-8 py-4 vs-gradient text-white font-black rounded-lg text-sm uppercase tracking-wide hover:opacity-90 transition-opacity">
          Contact opnemen
        </Link>
      </section>
    </>
  )
}
