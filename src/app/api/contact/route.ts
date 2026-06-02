import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload

  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 })
  }

  const { firstName, lastName, email, message } = payload

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { message: 'First name, last name, email, and message are required.' },
      { status: 400 }
    )
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 })
  }

  /**
   * TODO: integrate a real email/CRM delivery mechanism before launch.
   *
   * Options:
   *   A) Resend (recommended): npm install resend
   *      import { Resend } from 'resend'
   *      const resend = new Resend(process.env.RESEND_API_KEY)
   *      await resend.emails.send({ from: '...', to: '...', subject: '...', text: '...' })
   *
   *   B) SendGrid: npm install @sendgrid/mail
   *
   *   C) GoHighLevel (GHL) webhook:
   *      const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL
   *      await fetch(ghlWebhookUrl, { method: 'POST', body: JSON.stringify(payload), ... })
   *
   *   D) Nodemailer with SMTP credentials in environment variables.
   *
   * Required environment variables (add to .env.local and Vercel project settings):
   *   RESEND_API_KEY=re_...
   *   CONTACT_EMAIL_TO=info@crcflorida.com   ← actual destination
   *   CONTACT_EMAIL_FROM=noreply@crcflorida.com
   */

  console.log('[contact form submission]', {
    name: `${firstName} ${lastName}`,
    email,
    company: payload.company,
    phone: payload.phone,
    message,
    timestamp: new Date().toISOString(),
  })

  return NextResponse.json(
    { message: 'Message received. We will be in touch within 24 hours.' },
    { status: 200 }
  )
}
