import { defineType, defineField, defineArrayMember } from 'sanity'
import { localizedString, localizedText } from './_helpers'

export default defineType({
  name: 'technologyPage',
  title: 'Technologie',
  type: 'document',
  fields: [
    localizedString('title', 'Paginatitel'),
    localizedText('subtitle', 'Subtitel'),
    defineField({
      name: 'areas',
      title: 'Technologiegebieden (8x)',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          localizedString('title', 'Titel'),
          localizedText('desc', 'Omschrijving')
        ]
      })]
    })
  ],
  preview: { prepare: () => ({ title: 'Technologie pagina' }) }
})
