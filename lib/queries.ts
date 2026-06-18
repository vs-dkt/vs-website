import { groq } from 'next-sanity'

const loc = (field: string) => `"${field}": coalesce(${field}[$locale], ${field}.nl, "")`
const locObj = (field: string) => `${field} { nl, en, de }`

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    ${loc('heroTagline')},
    ${loc('heroSubtitle')},
    ${loc('heroCTAPrimary')},
    ${loc('heroCTASecondary')},
    ${loc('propositionTitle')},
    "propositionItems": propositionItems[] {
      "title": coalesce(title[$locale], title.nl, ""),
      "body": coalesce(body[$locale], body.nl, "")
    },
    ${loc('sectorsTitle')},
    ${loc('sectorsSubtitle')},
    ${loc('maturityTitle')},
    ${loc('maturitySubtitle')},
    "maturityPhases": maturityPhases[] {
      nr,
      "name": coalesce(name[$locale], name.nl, ""),
      "desc": coalesce(desc[$locale], desc.nl, "")
    },
    ${loc('ctaTitle')},
    ${loc('ctaBody')},
    ${loc('ctaButton')}
  }
`

export const servicesPageQuery = groq`
  *[_type == "servicesPage"][0] {
    ${loc('title')},
    ${loc('subtitle')},
    "services": services[] {
      nr,
      "title": coalesce(title[$locale], title.nl, ""),
      "desc": coalesce(desc[$locale], desc.nl, ""),
      "items": items[] {
        "label": coalesce(label[$locale], label.nl, "")
      }
    }
  }
`

export const productsPageQuery = groq`
  *[_type == "productsPage"][0] {
    ${loc('title')},
    ${loc('subtitle')},
    ${loc('intro')},
    "categories": categories[] {
      "title": coalesce(title[$locale], title.nl, ""),
      "desc": coalesce(desc[$locale], desc.nl, "")
    },
    ${loc('ctaLabel')}
  }
`

export const sectorsPageQuery = groq`
  *[_type == "sectorsPage"][0] {
    ${loc('title')},
    ${loc('subtitle')},
    "sectors": sectors[] {
      "title": coalesce(title[$locale], title.nl, ""),
      "sub": coalesce(sub[$locale], sub.nl, ""),
      "pain": coalesce(pain[$locale], pain.nl, ""),
      "opportunities": opportunities[] {
        "label": coalesce(label[$locale], label.nl, "")
      },
      "note": coalesce(note[$locale], note.nl, "")
    }
  }
`

export const technologyPageQuery = groq`
  *[_type == "technologyPage"][0] {
    ${loc('title')},
    ${loc('subtitle')},
    "areas": areas[] {
      "title": coalesce(title[$locale], title.nl, ""),
      "desc": coalesce(desc[$locale], desc.nl, "")
    }
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    ${loc('title')},
    ${loc('mission')},
    ${loc('vision')},
    ${loc('story')},
    "values": values[] {
      "title": coalesce(title[$locale], title.nl, ""),
      "desc": coalesce(desc[$locale], desc.nl, "")
    }
  }
`

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    ${loc('title')},
    ${loc('subtitle')},
    ${loc('formNameLabel')},
    ${loc('formEmailLabel')},
    ${loc('formOrgLabel')},
    ${loc('formMessageLabel')},
    ${loc('formSubmitLabel')},
    ${loc('formSuccessMessage')}
  }
`

export const navigationQuery = groq`
  *[_type == "navigation"][0] {
    "home": coalesce(home[$locale], home.nl, "Home"),
    "services": coalesce(services[$locale], services.nl, "Diensten"),
    "products": coalesce(products[$locale], products.nl, "Producten"),
    "sectors": coalesce(sectors[$locale], sectors.nl, "Sectoren"),
    "technology": coalesce(technology[$locale], technology.nl, "Technologie"),
    "about": coalesce(about[$locale], about.nl, "Over Ons"),
    "contact": coalesce(contact[$locale], contact.nl, "Contact"),
    "footerTagline": coalesce(footerTagline[$locale], footerTagline.nl, ""),
    "footerPrivacy": coalesce(footerPrivacy[$locale], footerPrivacy.nl, "Privacybeleid")
  }
`
