import type { Metadata } from 'next'
import { sanityFetch } from '@/lib/sanity'
import { contactPageQuery } from '@/lib/queries'
import { fallbackContact } from '@/lib/fallback'
import { buildAlternates } from '@/lib/seo'
import ContactForm from './ContactForm'

type ContactData = typeof fallbackContact

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const d = await sanityFetch<ContactData | null>(contactPageQuery, { locale })
  const title = d?.seoTitle || 'Contact — VitalSail'
  const description = d?.seoDescription || 'Neem contact op met VitalSail voor vragen over AI-adoptie, strategie of samenwerking. We reageren binnen één werkdag.'
  return {
    title,
    description,
    openGraph: { title, description, url: `https://www.vitalsail.ai/${locale}/contact`, siteName: 'VitalSail' },
    alternates: buildAlternates('/contact', locale)
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const raw = await sanityFetch<ContactData | null>(contactPageQuery, { locale })
  const d = raw ?? fallbackContact

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
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">E-mail</p>
              <a href="mailto:info@vitalsail.ai" className="text-[#009DD9] font-semibold hover:underline">info@vitalsail.ai</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Website</p>
              <a href="https://www.vitalsail.ai" className="text-[#009DD9] font-semibold hover:underline">www.vitalsail.ai</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">KvK-nummer</p>
              <p className="text-gray-700 font-semibold">42007328</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">BTW-nummer</p>
              <p className="text-gray-700 font-semibold">NL869256671B01</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Adres</p>
              <p className="text-gray-700 font-semibold leading-relaxed">
                VitalSail BV<br />
                Oosthavendijk 46<br />
                3241 LK Middelharnis<br />
                The Netherlands
              </p>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/vitalsail"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VitalSail op LinkedIn"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A66C2] hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <ContactForm
            labels={{
              name: d.formNameLabel,
              email: d.formEmailLabel,
              organization: d.formOrgLabel,
              message: d.formMessageLabel,
              submit: d.formSubmitLabel,
              success: d.formSuccessMessage
            }}
          />
        </div>
      </section>
    </>
  )
}
