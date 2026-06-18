import { defineType, defineField } from 'sanity'
import { localizedString } from './_helpers'

export default defineType({
  name: 'navigation',
  title: 'Navigatie',
  type: 'document',
  fields: [
    localizedString('home', 'Home'),
    localizedString('services', 'Diensten'),
    localizedString('products', 'Producten'),
    localizedString('sectors', 'Sectoren'),
    localizedString('technology', 'Technologie'),
    localizedString('about', 'Over Ons'),
    localizedString('contact', 'Contact'),
    localizedString('footerTagline', 'Footer tagline'),
    localizedString('footerPrivacy', 'Privacy label')
  ],
  preview: { select: { title: 'home.nl' }, prepare: () => ({ title: 'Navigatie & Footer' }) }
})
