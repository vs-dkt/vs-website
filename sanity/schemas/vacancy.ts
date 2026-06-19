import { defineType, defineField, defineArrayMember } from 'sanity'
import { localizedString } from './_helpers'

const blockContent = defineField({
  name: 'content',
  title: 'Inhoud',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normaal', value: 'normal' },
        { title: 'Koptekst 2', value: 'h2' },
        { title: 'Koptekst 3', value: 'h3' }
      ],
      lists: [
        { title: 'Opsomming', value: 'bullet' },
        { title: 'Genummerd', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Vet', value: 'strong' },
          { title: 'Cursief', value: 'em' }
        ]
      }
    })
  ]
})

function localizedBlock(name: string, title: string) {
  return defineField({
    name,
    title,
    type: 'object',
    fields: [
      { ...blockContent, name: 'nl', title: 'Nederlands' },
      { ...blockContent, name: 'en', title: 'English' },
      { ...blockContent, name: 'de', title: 'Deutsch' }
    ]
  })
}

export default defineType({
  name: 'vacancy',
  title: 'Vacature',
  type: 'document',
  fields: [
    localizedString('title', 'Functietitel'),
    localizedBlock('description', 'Omschrijving'),
    defineField({ name: 'active', title: 'Actief (zichtbaar op website)', type: 'boolean', initialValue: true }),
    defineField({ name: 'publishedAt', title: 'Publicatiedatum', type: 'datetime', initialValue: () => new Date().toISOString() })
  ],
  preview: {
    select: { title: 'title.nl', active: 'active' },
    prepare: (selection: Record<string, unknown>) => ({
      title: (selection.title as string) || 'Nieuwe vacature',
      subtitle: selection.active ? 'Actief' : 'Inactief'
    })
  }
})
