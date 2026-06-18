import { defineType, defineField, defineArrayMember } from 'sanity'
import { localizedString, localizedText } from './_helpers'

export default defineType({
  name: 'aboutPage',
  title: 'Over Ons',
  type: 'document',
  fields: [
    localizedString('title', 'Paginatitel'),
    localizedText('mission', 'Missie'),
    localizedText('vision', 'Visie'),
    localizedText('story', 'Ons verhaal'),
    defineField({
      name: 'values',
      title: 'Onderscheidend vermogen (6x)',
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
  preview: { prepare: () => ({ title: 'Over Ons pagina' }) }
})
