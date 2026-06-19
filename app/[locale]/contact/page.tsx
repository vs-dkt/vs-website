import type { Metadata } from 'next'
import { sanityFetch } from '@/lib/sanity'
import { contactPageQuery } from '@/lib/queries'
import { fallbackContact } from '@/lib/fallback'
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
    openGraph: { title, description, url: `https://vitalsail.ai/${locale}/contact`, siteName: 'VitalSail' },
    alternates: { canonical: `https://vitalsail.ai/${locale}/contact` }
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
                Oosthavendijk 46<br />
                3241 LK Middelharnis<br />
                The Netherlands
              </p>
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
