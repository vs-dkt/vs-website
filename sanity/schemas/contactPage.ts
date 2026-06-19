import { defineType } from 'sanity'
import { localizedString, localizedText } from './_helpers'

export default defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  fields: [
    localizedString('title', 'Paginatitel'),
    localizedText('subtitle', 'Subtitel'),
    localizedString('formNameLabel', 'Formulier: Naam label'),
    localizedString('formEmailLabel', 'Formulier: E-mail label'),
    localizedString('formOrgLabel', 'Formulier: Organisatie label'),
    localizedString('formMessageLabel', 'Formulier: Bericht label'),
    localizedString('formSubmitLabel', 'Formulier: Verstuur knop'),
    localizedText('formSuccessMessage', 'Succesbericht na verzenden'),
    localizedString('seoTitle', 'SEO titel (Google)'),
    localizedText('seoDescription', 'SEO omschrijving (Google, max 160 tekens)')
  ],
  preview: { prepare: () => ({ title: 'Contact pagina' }) }
})
