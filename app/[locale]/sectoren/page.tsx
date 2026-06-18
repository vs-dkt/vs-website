import { useTranslations } from 'next-intl'

export default function SectorenPage() {
  const t = useTranslations('sectors')

  const sectors = [0, 1, 2].map(i => ({
    title: t(`items.${i}.title`),
    sub: t(`items.${i}.sub`),
    pain: t(`items.${i}.pain`),
    opportunities: [0, 1, 2, 3, 4].map(j => {
      try { return t(`items.${i}.opportunities.${j}`) } catch { return null }
    }).filter(Boolean) as string[],
    note: (() => { try { return t(`items.${i}.note`) } catch { return null } })()
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
        <div className="max-w-7xl mx-auto space-y-16">
          {sectors.map((sector, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-gray-100 last:border-0">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">{sector.title}</h2>
                <p className="text-[#009DD9] text-sm font-semibold mb-6">{sector.sub}</p>
                <div className="p-6 bg-[#f8fafc] rounded-xl">
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Pijnpunten</p>
                  <p className="text-gray-700 text-sm">{sector.pain}</p>
                </div>
                {sector.note && (
                  <p className="mt-4 text-xs text-gray-500 italic">{sector.note}</p>
                )}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">AI-kansen</p>
                <ul className="space-y-3">
                  {sector.opportunities.map((opp, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#009DD9] shrink-0" />
                      <span className="text-gray-700">{opp}</span>
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
