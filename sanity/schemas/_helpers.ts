import { defineField } from 'sanity'

export function localizedString(name: string, title: string) {
  return defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({ name: 'nl', title: 'Nederlands', type: 'string' }),
      defineField({ name: 'en', title: 'English', type: 'string' }),
      defineField({ name: 'de', title: 'Deutsch', type: 'string' })
    ]
  })
}

export function localizedText(name: string, title: string) {
  return defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({ name: 'nl', title: 'Nederlands', type: 'text', rows: 4 }),
      defineField({ name: 'en', title: 'English', type: 'text', rows: 4 }),
      defineField({ name: 'de', title: 'Deutsch', type: 'text', rows: 4 })
    ]
  })
}
