'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FlaskConical,
  Activity,
  FileText,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

const services = [
  {
    id: 'clinical-development',
    icon: FlaskConical,
    phase: 'Phase I–IV',
    title: 'Clinical Development',
    tagline: 'From first-in-human through post-marketing surveillance',
    overview:
      'We provide end-to-end clinical development support across the full spectrum of trial phases. Our senior team combines scientific expertise with operational rigor to ensure your study is designed for both regulatory success and patient safety.',
    earlyPhase: {
      label: 'Early Phase (Phase I/II)',
      points: [
        'First-in-Human (FIH) study design and execution',
        'Single Ascending Dose (SAD) and Multiple Ascending Dose (MAD) designs',
        'Dose-escalation study design: 3+3, BOIN, mTPI methodologies',
        'Biomarker-driven adaptive trial designs',
        'PK/PD endpoint strategy and analysis planning',
        'Safety stopping rules and dose-limiting toxicity definitions',
      ],
    },
    latePhase: {
      label: 'Late Phase (Phase III/IV)',
      points: [
        'Confirmatory efficacy trial design and oversight',
        'Long-term safety and extended-dosing studies',
        'Post-marketing surveillance (Phase IV) programs',
        'Real-world evidence (RWE) study design',
        'Comparative effectiveness research',
        'Registry and observational study support',
      ],
    },
    focus: ['Oncology', 'Immunology', 'Rare Diseases', 'Neurodegenerative', 'Metabolic'],
    accentClass: 'bg-brand-teal-50 border-brand-teal-200',
    iconClass: 'bg-brand-teal-50 text-brand-teal-700 ring-brand-teal-100',
    badgeClass: 'bg-brand-teal-50 text-brand-teal-800 border-brand-teal-200',
  },
  {
    id: 'medical-monitoring',
    icon: Activity,
    phase: 'Safety Oversight',
    title: 'Medical Monitoring',
    tagline: '24/7 physician oversight and signal detection',
    overview:
      'Robust medical monitoring is the backbone of patient safety and data integrity. Our physician-led monitoring team provides continuous safety surveillance, medical review, and real-time support throughout your trial.',
    earlyPhase: {
      label: 'Safety Surveillance & Review',
      points: [
        'Adverse event (AE), SAE, and SUSAR safety oversight',
        'Medical review of subject eligibility and protocol deviations',
        'Lab value, vital sign, ECG, and imaging review',
        'Safety signal detection and dose-escalation medical input',
        '24/7 on-call medical support for sites and sponsors',
        'Participation in Safety Review Committees (SRCs)',
      ],
    },
    latePhase: {
      label: 'Oversight Committees & PV',
      points: [
        'Data Safety Monitoring Board (DSMB) participation',
        'Independent Medical Monitor (IMM) services',
        'Collaboration with pharmacovigilance (PV) teams',
        'Benefit-risk assessment and safety narrative authoring',
        'Aggregate safety reporting (DSUR, PSUR support)',
        'CIOMS and MedDRA coding review',
      ],
    },
    focus: ['All Therapeutic Areas', 'Phase I–IV', 'Global Trials', 'FDA & EMA Programs'],
    accentClass: 'bg-brand-cyan-100 border-brand-cyan-200',
    iconClass: 'bg-brand-cyan-100 text-brand-teal-700 ring-brand-cyan-200',
    badgeClass: 'bg-brand-cyan-100 text-brand-teal-800 border-brand-cyan-200',
  },
  {
    id: 'protocol-development',
    icon: FileText,
    phase: 'Regulatory Ready',
    title: 'Protocol Development',
    tagline: 'Strategic design and complete document generation',
    overview:
      'A scientifically sound, operationally feasible protocol is the single most important determinant of trial success. We design study protocols that satisfy regulatory agencies, enable clean data collection, and protect patient safety.',
    earlyPhase: {
      label: 'Study Design & Strategy',
      points: [
        'Strategic Phase I–IV study design consultation',
        'Primary and secondary endpoint selection',
        'Statistical considerations and sample size justification',
        'Adaptive design methodology and regulatory alignment',
        'FDA, EMA, and ICH-GCP regulatory readiness review',
        'Pre-IND and Type B/C meeting preparation support',
      ],
    },
    latePhase: {
      label: 'Document Generation',
      points: [
        'Protocol authoring and revision management',
        'Investigator Brochure (IB) development and updates',
        'Informed Consent Form (ICF) development',
        'Case Report Form (CRF) design and annotation',
        'Medical Monitoring Plan (MMP) authoring',
        'Statistical Analysis Plan (SAP) medical review',
      ],
    },
    focus: ['Phase I–IV', 'FDA / EMA / ICH', 'Global Programs', 'Rare Disease Protocols'],
    accentClass: 'bg-brand-gold-100 border-brand-gold-200',
    iconClass: 'bg-brand-gold-100 text-brand-gold-700 ring-brand-gold-200',
    badgeClass: 'bg-brand-gold-100 text-brand-gold-700 border-brand-gold-200',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-navy-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
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
              Services
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-display-xl text-white mb-6"
            >
              Clinical services built for{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #B877FF, #7558DC)' }}
              >
                every stage
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-white/60 leading-relaxed max-w-lg">
              From first-in-human studies through post-marketing surveillance, we provide
              the clinical development expertise, medical monitoring oversight, and regulatory
              documentation your program demands.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Services */}
      <div className="bg-white">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 lg:py-32 ${i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}
              aria-labelledby={`service-h2-${service.id}`}
            >
              <Container>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                >
                  {/* Header */}
                  <motion.div variants={fadeInUp} className="flex items-start gap-5 mb-10">
                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 ring-1 ${service.iconClass}`}>
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <div>
                      <span className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold tracking-wide uppercase mb-2 ${service.badgeClass}`}>
                        {service.phase}
                      </span>
                      <h2
                        id={`service-h2-${service.id}`}
                        className="font-display text-display-md text-navy-900"
                      >
                        {service.title}
                      </h2>
                      <p className="text-base text-brand-teal-700 font-medium mt-1">{service.tagline}</p>
                    </div>
                  </motion.div>

                  <motion.p variants={fadeInUp} className="text-base text-slate-600 leading-relaxed max-w-3xl mb-10">
                    {service.overview}
                  </motion.p>

                  {/* Two-column details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {[service.earlyPhase, service.latePhase].map((col) => (
                      <motion.div
                        key={col.label}
                        variants={fadeInUp}
                        className={`rounded-2xl border p-7 ${service.accentClass}`}
                      >
                        <h3 className="text-sm font-bold text-navy-900 mb-4 pb-3 border-b border-navy-900/8">
                          {col.label}
                        </h3>
                        <ul className="space-y-2.5" role="list">
                          {col.points.map((p) => (
                            <li key={p} className="flex items-start gap-2.5 text-sm text-slate-600">
                              <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-brand-teal-600" aria-hidden="true" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Therapeutic focus tags */}
                  <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2 mb-10">
                    <span className="text-xs text-slate-400 font-medium mr-1">Therapeutic focus:</span>
                    {service.focus.map((f) => (
                      <span
                        key={f}
                        className="inline-flex rounded-full bg-slate-100 text-slate-600 border border-slate-200 px-3 py-0.5 text-xs font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </motion.div>

                  {/* CTA */}
                  <motion.div variants={fadeInUp}>
                    <Link href="/contact">
                      <Button variant="secondary" size="md" className="group">
                        Discuss this service
                        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </Container>
            </section>
          )
        })}
      </div>

      <CTASection />
    </>
  )
}
