import { defineType, defineField } from 'sanity'
import { localizedString, localizedText } from './_helpers'

export default defineType({
  name: 'vacancy',
  title: 'Vacature',
  type: 'document',
  fields: [
    localizedString('title', 'Functietitel'),
    localizedText('description', 'Omschrijving'),
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
