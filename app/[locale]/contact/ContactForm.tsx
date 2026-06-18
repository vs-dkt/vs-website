'use client'

import { useState, useRef } from 'react'

type Labels = {
  name: string
  email: string
  organization: string
  message: string
  submit: string
  success: string
}

export default function ContactForm({ labels }: { labels: Labels }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = formRef.current!
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    setLoading(false)

    if (res.ok) {
      setSubmitted(true)
    } else {
      setError('Er is iets misgegaan. Probeer het opnieuw of mail naar info@vitalsail.ai.')
    }
  }

  if (submitted) {
    return (
      <div className="p-8 bg-[#f8fafc] rounded-2xl text-center">
        <div className="text-4xl mb-4 text-[#3EC288]">✓</div>
        <p className="text-gray-700">{labels.success}</p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {[
        { name: 'name', label: labels.name, type: 'text', required: true },
        { name: 'email', label: labels.email, type: 'email', required: true },
        { name: 'organization', label: labels.organization, type: 'text', required: false }
      ].map(field => (
        <div key={field.name}>
          <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#009DD9] transition-colors"
          />
        </div>
      ))}
      <div>
        <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
          {labels.message}
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#009DD9] transition-colors resize-none"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 vs-gradient text-white font-black rounded-lg text-sm uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {loading ? '...' : labels.submit}
      </button>
    </form>
  )
}
