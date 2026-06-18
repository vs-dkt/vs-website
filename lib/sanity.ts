import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 't47dk984',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
})

export function sanityFetch<T>(query: string, params?: Record<string, unknown>): Promise<T> {
  return client.fetch<T>(query, params ?? {})
}
