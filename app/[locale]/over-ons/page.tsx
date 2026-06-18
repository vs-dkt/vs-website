import { useTranslations } from 'next-intl'

export default function OverOnsPage() {
  const t = useTranslations('about')

  const values = [0, 1, 2, 3, 4, 5].map(i => ({
    title: t(`values.${i}.title`),
    desc: t(`values.${i}.desc`)
  }))

  return (
    <>
      <section className="vs-gradient text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-white/60 mb-4">VitalSail</p>
          <h1 className="text-5xl font-black mb-6">{t('title')}</h1>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#009DD9] mb-3">{t('mission_label')}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t('mission')}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-[#009DD9] mb-3">{t('vision_label')}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t('vision')}</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[#009DD9] mb-6">{t('story_label')}</p>
            {t('story').split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
            ))}
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[#009DD9] mb-8">{t('values_label')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val, i) => (
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
