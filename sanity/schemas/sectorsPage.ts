import { defineType, defineField, defineArrayMember } from 'sanity'
import { localizedString, localizedText } from './_helpers'

export default defineType({
  name: 'sectorsPage',
  title: 'Sectoren',
  type: 'document',
  fields: [
    localizedString('title', 'Paginatitel'),
    localizedText('subtitle', 'Subtitel'),
    defineField({
      name: 'sectors',
      title: 'Sectoren (3x)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          localizedString('title', 'Naam'),
          localizedString('sub', 'Subtitel (doelgroepen)'),
          localizedText('pain', 'Pijnpunten'),
          defineField({
            name: 'opportunities',
            title: 'AI-kansen',
            type: 'array',
            of: [defineArrayMember({
              type: 'object',
              fields: [localizedString('label', 'Kans')]
            })]
          }),
          localizedString('note', 'Noot (optioneel)')
        ]
      })]
    }),
    localizedString('seoTitle', 'SEO titel (Google)'),
    localizedText('seoDescription', 'SEO omschrijving (Google, max 160 tekens)')
  ],
  preview: { prepare: () => ({ title: 'Sectoren pagina' }) }
})
