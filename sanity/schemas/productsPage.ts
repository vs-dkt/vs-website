import { defineType, defineField, defineArrayMember } from 'sanity'
import { localizedString, localizedText } from './_helpers'

export default defineType({
  name: 'productsPage',
  title: 'Producten',
  type: 'document',
  fields: [
    localizedString('title', 'Paginatitel'),
    localizedText('subtitle', 'Subtitel'),
    localizedText('intro', 'Intro tekst'),
    defineField({
      name: 'categories',
      title: 'Categorieën',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          localizedString('title', 'Titel'),
          localizedText('desc', 'Omschrijving')
        ]
      })]
    }),
    localizedString('ctaLabel', 'CTA tekst')
  ],
  preview: { prepare: () => ({ title: 'Producten pagina' }) }
})
