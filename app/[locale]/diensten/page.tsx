import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function DienstenPage() {
  const t = useTranslations('services')
  const locale = useLocale()

  const services = [0, 1, 2, 3, 4].map(i => ({
    nr: t(`items.${i}.nr`),
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
    items: [0, 1, 2, 3, 4, 5, 6, 7].map(j => {
      try { return t(`items.${i}.items.${j}`) } catch { return null }
    }).filter(Boolean) as string[]
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
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, i) => (
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
                      <span className="text-sm text-gray-700">{item}</span>
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
