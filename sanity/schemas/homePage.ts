import { defineType, defineField, defineArrayMember } from 'sanity'
import { localizedString, localizedText } from './_helpers'

export default defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({ name: 'heroTagline', title: 'Hero tagline', type: 'object',
      fields: [
        defineField({ name: 'nl', title: 'Nederlands', type: 'string' }),
        defineField({ name: 'en', title: 'English', type: 'string' }),
        defineField({ name: 'de', title: 'Deutsch', type: 'string' })
      ]
    }),
    localizedText('heroSubtitle', 'Hero subtitel'),
    localizedString('heroCTAPrimary', 'Hero knop 1'),
    localizedString('heroCTASecondary', 'Hero knop 2'),
    localizedString('propositionTitle', 'Propositie titel'),
    defineField({
      name: 'propositionItems',
      title: 'Propositie items (4x)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          localizedString('title', 'Titel'),
          localizedText('body', 'Tekst')
        ]
      })]
    }),
    localizedString('sectorsTitle', 'Sectoren titel'),
    localizedString('sectorsSubtitle', 'Sectoren subtitel'),
    localizedString('maturityTitle', 'Volwassenheidsmodel titel'),
    localizedText('maturitySubtitle', 'Volwassenheidsmodel subtitel'),
    defineField({
      name: 'maturityPhases',
      title: 'Fasen (5x)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'nr', title: 'Nummer', type: 'string' }),
          localizedString('name', 'Naam'),
          localizedString('desc', 'Omschrijving')
        ]
      })]
    }),
    localizedString('ctaTitle', 'CTA titel'),
    localizedText('ctaBody', 'CTA tekst'),
    localizedString('ctaButton', 'CTA knoptekst'),
    localizedString('seoTitle', 'SEO titel (Google)'),
    localizedText('seoDescription', 'SEO omschrijving (Google, max 160 tekens)')
  ],
  preview: { prepare: () => ({ title: 'Home pagina' }) }
})
