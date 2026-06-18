import { defineType, defineField, defineArrayMember } from 'sanity'
import { localizedString, localizedText } from './_helpers'

export default defineType({
  name: 'servicesPage',
  title: 'Diensten',
  type: 'document',
  fields: [
    localizedString('title', 'Paginatitel'),
    localizedText('subtitle', 'Subtitel'),
    defineField({
      name: 'services',
      title: 'Diensten (5x)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'nr', title: 'Nummer', type: 'string' }),
          localizedString('title', 'Titel'),
          localizedString('desc', 'Korte omschrijving'),
          defineField({
            name: 'items',
            title: 'Onderdelen',
            type: 'array',
            of: [defineArrayMember({
              type: 'object',
              fields: [localizedString('label', 'Label')]
            })]
          })
        ]
      })]
    })
  ],
  preview: { prepare: () => ({ title: 'Diensten pagina' }) }
})
