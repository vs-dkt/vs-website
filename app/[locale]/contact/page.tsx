'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

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
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">{t('email_label')}</p>
                <a href="mailto:info@vitalsail.ai" className="text-[#009DD9] font-semibold hover:underline">
                  info@vitalsail.ai
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">{t('website_label')}</p>
                <a href="https://www.vitalsail.ai" className="text-[#009DD9] font-semibold hover:underline">
                  www.vitalsail.ai
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">{t('kvk_label')}</p>
                <p className="text-gray-700 font-semibold">42007328</p>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="p-8 bg-[#f8fafc] rounded-2xl text-center">
                <div className="text-4xl mb-4">✓</div>
                <p className="text-gray-700">{t('form.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'name', label: t('form.name'), type: 'text' },
                  { name: 'email', label: t('form.email'), type: 'email' },
                  { name: 'organization', label: t('form.organization'), type: 'text' }
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.name !== 'organization'}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#009DD9] transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#009DD9] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 vs-gradient text-white font-black rounded-lg text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  {t('form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
