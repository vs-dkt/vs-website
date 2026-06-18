import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

function HeroSection() {
  const t = useTranslations('home.hero')
  const locale = useLocale()

  return (
    <section className="vs-gradient text-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-6">VitalSail</p>
        <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
          {t('tagline')}
        </h1>
        <p className="text-lg lg:text-xl text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 bg-white text-[#0F6FC6] font-bold rounded-lg hover:bg-white/90 transition-colors text-sm uppercase tracking-wide"
          >
            {t('cta_primary')}
          </Link>
          <Link
            href={`/${locale}/diensten`}
            className="px-8 py-4 border-2 border-white/50 text-white font-bold rounded-lg hover:border-white hover:bg-white/10 transition-colors text-sm uppercase tracking-wide"
          >
            {t('cta_secondary')}
          </Link>
        </div>
      </div>
    </section>
  )
}

function PropositionSection() {
  const t = useTranslations('home.proposition')

  const items = [
    { icon: '◈', title: t('items.0.title'), body: t('items.0.body') },
    { icon: '⬡', title: t('items.1.title'), body: t('items.1.body') },
    { icon: '◎', title: t('items.2.title'), body: t('items.2.body') },
    { icon: '◰', title: t('items.3.title'), body: t('items.3.body') }
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 text-gray-900">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-8 rounded-xl border border-gray-100 hover:border-[#009DD9]/30 hover:shadow-lg transition-all group">
              <div className="text-3xl text-[#009DD9] mb-4">{item.icon}</div>
              <h3 className="text-lg font-black text-gray-900 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MaturitySection() {
  const t = useTranslations('home.maturity')

  const phases = [0, 1, 2, 3, 4].map(i => ({
    nr: t(`phases.${i}.nr`),
    name: t(`phases.${i}.name`),
    desc: t(`phases.${i}.desc`)
  }))

  return (
    <section className="py-24 px-6 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {phases.map((phase, i) => (
            <div key={i} className="relative p-6 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl font-black mb-3" style={{
                background: 'linear-gradient(135deg, #1a3fa8, #58D464)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {phase.nr}
              </div>
              <h3 className="text-sm font-black text-gray-900 mb-2 uppercase tracking-wide">{phase.name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectorsSection() {
  const t = useTranslations('home.sectors')
  const locale = useLocale()

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(['Zorg', 'Zakelijke Dienstverlening', 'Real Estate'] as const).map((sector, i) => (
            <Link key={i} href={`/${locale}/sectoren`} className="group p-8 rounded-xl vs-gradient text-white hover:opacity-95 transition-opacity">
              <h3 className="text-xl font-black mb-3">{sector}</h3>
              <p className="text-white/70 text-sm">Ontdek de AI-kansen in deze sector →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  const t = useTranslations('home.cta')
  const locale = useLocale()

  return (
    <section className="py-24 px-6 bg-[#0F6FC6] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-6">{t('title')}</h2>
        <p className="text-lg text-white/80 mb-10">{t('body')}</p>
        <Link
          href={`/${locale}/contact`}
          className="inline-block px-10 py-4 bg-white text-[#0F6FC6] font-black rounded-lg hover:bg-white/90 transition-colors text-sm uppercase tracking-wide"
        >
          {t('button')}
        </Link>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PropositionSection />
      <MaturitySection />
      <SectorsSection />
      <CtaSection />
    </>
  )
}
