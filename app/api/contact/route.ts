import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, organization, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'VitalSail Website <noreply@vitalsail.ai>',
    to: 'info@vitalsail.ai',
    replyTo: email,
    subject: `Contactformulier: ${name}${organization ? ` (${organization})` : ''}`,
    text: `Naam: ${name}\nE-mail: ${email}\nOrganisatie: ${organization || '-'}\n\nBericht:\n${message}`
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Verzenden mislukt' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
