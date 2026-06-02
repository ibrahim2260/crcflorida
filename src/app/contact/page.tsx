'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  message: string
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

function InputField({
  id,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900 mb-1.5">
        {label}
        {required && (
          <span className="text-brand-teal-600 ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 transition-all duration-200 focus:border-brand-teal-500 focus:outline-none focus:ring-2 focus:ring-brand-teal-500/20 hover:border-slate-300"
        autoComplete={
          id === 'email' ? 'email' : id === 'phone' ? 'tel' : id === 'firstName' ? 'given-name' : id === 'lastName' ? 'family-name' : id === 'company' ? 'organization' : 'off'
        }
      />
    </div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const setField = (field: keyof FormData) => (value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message ?? 'Submission failed')
      }

      setFormState('success')
      setFormData(initialForm)
    } catch (err) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <>
      {/* Page hero */}
      <section className="relative bg-navy-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" aria-hidden="true" />
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(96,64,204,0.45), transparent)' }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.p variants={fadeInUp} className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-cyan-400 mb-4">
              Contact
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-display-xl text-white mb-6">
              Start a{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #B877FF, #7558DC)' }}
              >
                conversation
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-white/60 leading-relaxed max-w-lg">
              Tell us about your clinical program. A senior physician will respond within 24 hours
              to discuss how we can support your development objectives.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Form + sidebar */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="font-display text-display-md text-navy-900 mb-2">
                  Request a consultation
                </h2>
                <p className="text-sm text-slate-500">
                  Fields marked <span className="text-brand-teal-600 font-medium">*</span> are required.
                </p>
              </motion.div>

              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-brand-teal-200 bg-brand-teal-50 p-8 text-center"
                  role="alert"
                >
                  <CheckCircle2
                    size={40}
                    className="text-brand-teal-600 mx-auto mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-2xl text-navy-900 mb-2">
                    Message received
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Thank you for reaching out. A senior physician from our team will review
                    your inquiry and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-sm font-medium text-brand-teal-700 hover:text-brand-teal-600 transition-colors underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeInUp}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        id="firstName"
                        label="First Name"
                        required
                        value={formData.firstName}
                        onChange={setField('firstName')}
                        placeholder="Jane"
                      />
                      <InputField
                        id="lastName"
                        label="Last Name"
                        required
                        value={formData.lastName}
                        onChange={setField('lastName')}
                        placeholder="Smith"
                      />
                    </div>

                    <InputField
                      id="email"
                      label="Email Address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={setField('email')}
                      placeholder="jane.smith@company.com"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={setField('phone')}
                        placeholder="+1 (555) 000-0000"
                      />
                      <InputField
                        id="company"
                        label="Company / Organization"
                        value={formData.company}
                        onChange={setField('company')}
                        placeholder="Pharma Co. Inc."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                        How can we help?{' '}
                        <span className="text-brand-teal-600" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setField('message')(e.target.value)}
                        placeholder="Tell us about your clinical program, study phase, therapeutic area, and what support you are looking for..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-slate-400 transition-all duration-200 focus:border-brand-teal-500 focus:outline-none focus:ring-2 focus:ring-brand-teal-500/20 hover:border-slate-300"
                      />
                    </div>

                    {formState === 'error' && (
                      <div
                        role="alert"
                        className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      >
                        <AlertCircle size={15} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {errorMessage}
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={formState === 'submitting'}
                      className="w-full sm:w-auto group"
                    >
                      {formState === 'submitting' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-5 space-y-6"
            >
              {/* What to expect */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl bg-navy-900 p-7 relative overflow-hidden"
              >
                <div className="absolute inset-0 dot-grid-dark opacity-60" aria-hidden="true" />
                <div className="relative z-10">
                  <h3 className="font-display text-xl text-white mb-4">What to expect</h3>
                  <ul className="space-y-3" role="list">
                    {[
                      'Senior physician reviews your inquiry personally',
                      'Response within 24 business hours',
                      'Initial 30-minute discovery call at no obligation',
                      'Transparent, straightforward engagement terms',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-brand-cyan-400" aria-hidden="true" />
                        <span className="text-sm text-white/70 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-sm font-semibold text-navy-900 mb-3">Connect with us</h3>
                <a
                  href="https://www.linkedin.com/company/clinical-research-consultants-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label="CRC Florida on LinkedIn (opens in new tab)"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                    <Linkedin size={18} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy-900 group-hover:text-brand-teal-700 transition-colors">
                      Clinical Research Consultants LLC
                    </div>
                    <div className="text-xs text-slate-400">LinkedIn · Follow for updates</div>
                  </div>
                </a>
              </motion.div>

              {/* Confidentiality note */}
              <motion.div variants={fadeInUp} className="rounded-xl bg-slate-50 border border-slate-100 px-5 py-4">
                <p className="text-xs text-slate-500 leading-relaxed">
                  All inquiries are treated with full confidentiality. We do not share your
                  contact information or program details with any third parties.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
