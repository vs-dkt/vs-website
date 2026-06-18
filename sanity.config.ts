import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemas } from './sanity/schemas'

export default defineConfig({
  name: 'vs-website',
  title: 'VitalSail Website',
  projectId: 't47dk984',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemas },
  basePath: '/studio'
})
