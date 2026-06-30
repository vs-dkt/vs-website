@AGENTS.md

# VitalSail Website — Project Context

## Tech Stack
- **Next.js 16.2.9** (App Router, Turbopack) — BELANGRIJK: Next.js 16 heeft breaking changes t.o.v. eerdere versies. Lees `node_modules/next/dist/docs/` voor je code schrijft. Middleware heet hier `proxy.ts` en exporteert een `proxy` functie (niet `middleware`).
- **Tailwind CSS** — utility-first styling
- **Sanity v6** (project: `t47dk984`, dataset: `production`) — headless CMS voor alle content
- **next-intl v4** — i18n routing (NL/EN/DE), locale in URL path `/nl`, `/en`, `/de`
- **Resend** — transactionele e-mail voor contactformulier
- **Vercel** — deployment via GitHub (`vs-dkt/vs-website`, branch: `main`)
- **Google Analytics 4** — measurement ID: `G-1LJCS3DCWE`

## Domein & Hosting
- Live: `https://www.vitalsail.ai` (www is canonical, non-www redirected via Vercel)
- DNS: TransIP
- Sanity Studio: `https://www.vitalsail.ai/studio`

## Projectstructuur
```
app/
  layout.tsx              # Root layout: metadataBase, favicon, GA4 script
  icon.png                # Favicon (512x512, vierkant bijgesneden)
  apple-icon.png          # iOS icon (180x180)
  sitemap.ts              # Dynamische sitemap: 8 pagina's × 3 locales = 24 URLs
  robots.ts               # Crawl-regels, /studio uitgesloten
  [locale]/
    layout.tsx            # Navbar + Footer, nav data uit Sanity
    page.tsx              # Home
    diensten/page.tsx
    producten/page.tsx
    sectoren/page.tsx
    technologie/page.tsx
    over-ons/page.tsx
    vacatures/page.tsx    # Vacaturesysteem, Portable Text
    contact/
      page.tsx            # Server component
      ContactForm.tsx     # Client component, POST naar /api/contact
  api/contact/route.ts    # Resend e-mail naar info@vitalsail.ai
  studio/[[...tool]]/     # Sanity Studio embedded

components/layout/
  Navbar.tsx              # Sticky header, logo 150x49px, taalswitch
  Footer.tsx              # Gradient footer

lib/
  sanity.ts               # Sanity client, sanityFetch (revalidate: 30, useCdn: false)
  queries.ts              # GROQ queries per pagina
  fallback.ts             # Fallback content als Sanity leeg is (bepaalt ook TypeScript types)

sanity/schemas/           # 10 schemas: navigation, homePage, servicesPage, productsPage,
                          # sectorsPage, technologyPage, aboutPage, contactPage,
                          # vacanciesPage, vacancy

scripts/seed.mjs          # Seed script: vult Sanity met NL/EN/DE content
i18n/routing.ts           # locales: ['nl', 'en', 'de'], defaultLocale: 'nl', pathnames-map
i18n/navigation.ts        # createNavigation(routing): Link, usePathname, useRouter, getPathname
proxy.ts                  # i18n middleware (Next.js 16: heet proxy.ts, niet middleware.ts)
public/
  favicon.ico             # Klassieke favicon (16/32px)
  favicon-16.png
  favicon-32.png
  favicon-48.png
  images/
    logo-nieuw.jpg        # Volledig kleur logo (1815x2248px) — gebruik width=150 height=49
    logo-white.png        # Wit logo voor footer
    icon.png              # Beeldmerk (bron voor favicon, 1815x2262px, NIET vierkant)
```

## Sanity Conventies
- Alle content-velden zijn **gelokaliseerd**: `{ nl: string, en: string, de: string }`
- Helpers in `sanity/schemas/_helpers.ts`: `localizedString()` en `localizedText()`
- GROQ queries gebruiken `coalesce(field[$locale], field.nl, "")` als patroon
- Singletons hebben vaste `_id`: `home-singleton`, `services-singleton`, etc.
- Vacancy documenten zijn losse documenten (niet singleton), gefilterd op `active == true`
- Vacancy omschrijving gebruikt **Portable Text** (rich text met h2, h3, bullet/number lists)
- Seed script: `SANITY_API_TOKEN=... node scripts/seed.mjs`

## TypeScript Types
- Paginatypes zijn afgeleid van `typeof fallback*` in `lib/fallback.ts`
- Als je een nieuw veld toevoegt aan een Sanity schema + query, MOET je het ook toevoegen aan het bijbehorende fallback object in `lib/fallback.ts`, anders faalt de TypeScript build op Vercel

## Localized Content Patroon
```typescript
// Query
const loc = (field: string) => `"${field}": coalesce(${field}[$locale], ${field}.nl, "")`

// Schema
localizedString('title', 'Titel')  // → { nl, en, de } string velden
localizedText('body', 'Tekst')     // → { nl, en, de } textarea velden
```

## Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID=t47dk984`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `SANITY_API_TOKEN` — Sanity API token (write access)
- `RESEND_API_KEY` — Resend API key voor contactformulier

Staan in `.env.local` (lokaal) en in Vercel project settings (productie).

## Contactformulier
- Frontend: `app/[locale]/contact/ContactForm.tsx` (client component)
- Backend: `app/api/contact/route.ts` → Resend → `info@vitalsail.ai`
- From: `noreply@vitalsail.ai` (Resend domein verified op vitalsail.ai)
- Reply-to: e-mailadres van de invuller

## SEO
- `generateMetadata()` per pagina, haalt `seoTitle` + `seoDescription` op uit Sanity
- Fallback metadata hardcoded in elke page.tsx
- Google Search Console: `www.vitalsail.ai` property, sitemap ingediend en succesvol (21 pagina's)
- Google verificatie TXT-record staat op `@` bij TransIP
- `localeDetection: false` — taal wordt altijd bepaald door de URL, nooit door cookie/Accept-Language (voorkomt dat bezoekers met een andere voorkeurstaal-cookie de verkeerde taalversie van een URL te zien krijgen)
- **Gelokaliseerde URL-paden** (`pathnames` in `i18n/routing.ts`): elke taal heeft zijn eigen pad-segment i.p.v. de NL-slug overal:
  - `/nl/diensten` ↔ `/en/services` ↔ `/de/leistungen`
  - `/nl/producten` ↔ `/en/products` ↔ `/de/produkte`
  - `/nl/sectoren` ↔ `/en/sectors` ↔ `/de/branchen`
  - `/nl/over-ons` ↔ `/en/about-us` ↔ `/de/ueber-uns`
  - `/nl/vacatures` ↔ `/en/vacancies` ↔ `/de/stellenangebote`
  - `/nl/contact` ↔ `/en/contact` ↔ `/de/kontakt`
  - `/nl/technologie` ↔ `/en/technology` ↔ `/de/technologie` (gelijk in alle talen)
  - Oude/onvertaalde URLs redirecten automatisch (307) naar de juiste localized URL via de next-intl middleware
  - Links in code MOETEN via `@/i18n/navigation` (`Link`, `usePathname`, `useRouter`, `getPathname`) i.p.v. `next/link` of `next/navigation` — anders werkt de vertaling van paden niet
  - Bij een nieuwe pagina: voeg een entry toe aan `pathnames` in `i18n/routing.ts` én aan de `pages`-array in `app/sitemap.ts`

## Bedrijfsgegevens (hardcoded in contact/page.tsx)
- E-mail: info@vitalsail.ai
- Website: www.vitalsail.ai
- KvK: 42007328
- BTW: NL869256671B01
- Adres: Oosthavendijk 46, 3241 LK Middelharnis, The Netherlands

## Huisstijl
- Primaire gradient: `#1a3fa8` → `#58D464` (diagonaal) — class: `vs-gradient`
- Gradient tekst: class `vs-gradient-text`
- Accent blauw: `#009DD9`
- Donkerblauw: `#0F6FC6`
- Fonts: Lato (headings) + Open Sans (body) via Google Fonts
- Logo in header: `width=150 height=49` (aspect ratio van 1815x2248 bron)

## Deployment
- GitHub repo: `https://github.com/vs-dkt/vs-website`
- Vercel koppelt automatisch aan `main` branch
- Elke `git push` triggert een nieuwe deployment
- Build faalt als TypeScript errors zijn — check altijd fallback.ts bij nieuwe schema-velden
