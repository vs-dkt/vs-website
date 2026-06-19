import { defineType } from 'sanity'
import { localizedString, localizedText } from './_helpers'

export default defineType({
  name: 'vacanciesPage',
  title: 'Vacatures pagina',
  type: 'document',
  fields: [
    localizedString('title', 'Paginatitel'),
    localizedText('subtitle', 'Subtitel'),
    localizedText('emptyMessage', 'Tekst als er geen vacatures zijn'),
    localizedString('seoTitle', 'SEO titel (Google)'),
    localizedText('seoDescription', 'SEO omschrijving (Google, max 160 tekens)')
  ],
  preview: { prepare: () => ({ title: 'Vacatures pagina' }) }
})
