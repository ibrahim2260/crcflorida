'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Target, Users, Microscope, Globe } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

const values = [
  {
    icon: Target,
    title: 'Scientific Rigor',
    description:
      'Every protocol, monitoring plan, and regulatory document is built on a foundation of clinical and scientific precision. We do not cut corners.',
  },
  {
    icon: Users,
    title: 'Direct Engagement',
    description:
      'Senior physicians and clinical strategists are personally engaged in your project — from first briefing through final deliverable.',
  },
  {
    icon: Microscope,
    title: 'Regulatory Excellence',
    description:
      'FDA, EMA, and ICH-GCP compliance is built into our process from day one, not added as a final step. We design for regulatory success.',
  },
  {
    icon: Globe,
    title: 'Patient Focus',
    description:
      'Our work is ultimately about bringing safe, effective therapies to patients faster. That purpose drives every decision we make.',
  },
]

const differentiators = [
  'Physician-led medical monitoring — not delegated to nurses or associates',
  'Deep therapeutic specialization across oncology, rare diseases, neurodegenerative conditions',
  'Full-spectrum capability: protocol design through safety narrative authoring',
  'Direct, senior-level partnership on every engagement — no account manager layers',
  'Regulatory readiness built in, not bolted on',
  'Transparent communication and 24-hour senior response commitment',
]

export default function AboutPage() {
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
              About Us
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-display-xl text-white mb-6">
              Built on expertise,{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #B877FF, #7558DC)' }}
              >
                driven by purpose
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-white/60 leading-relaxed max-w-lg">
              Clinical Research Consultants LLC was founded to address a clear gap: pharmaceutical
              and biotech companies needed senior, specialized clinical expertise — not a generalist
              CRO that delegates your program to junior staff.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeInUp}>
              <p className="section-label mb-4">Our Mission</p>
              <h2 className="font-display text-display-md text-navy-900 mb-6">
                Facilitating safe, effective therapies — with quality, innovation &amp; integrity
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                We believe that exceptional clinical development is not about scale — it is about
                expertise, attention, and accountability. Our team brings decades of combined
                experience from leading pharmaceutical companies, academic medical centers, and
                regulatory agencies.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                We partner exclusively with pharmaceutical and biotechnology companies whose
                programs require real scientific depth — companies developing novel oncology
                agents, rare disease therapies, gene and cell therapies, and other high-science
                compounds that demand more than checkbox compliance.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our mission is to help you bring safe, effective therapies to the patients who
                need them — faster, with less risk, and with full regulatory confidence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="rounded-2xl bg-navy-900 p-8 relative overflow-hidden">
                <div className="absolute inset-0 dot-grid-dark opacity-70" aria-hidden="true" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-cyan-400 mb-6">
                    What sets us apart
                  </p>
                  <ul className="space-y-4" role="list">
                    {differentiators.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle2
                          size={15}
                          className="flex-shrink-0 mt-0.5 text-brand-cyan-400"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-white/70 leading-snug">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-24 lg:py-32" aria-labelledby="values-heading">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={fadeInUp} className="mb-14 max-w-xl">
              <p className="section-label mb-4">Our Values</p>
              <h2 id="values-heading" className="font-display text-display-md text-navy-900">
                The principles that guide every engagement
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    className="rounded-2xl bg-white border border-slate-200/80 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="h-10 w-10 rounded-xl bg-brand-teal-50 ring-1 ring-brand-teal-100 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-brand-teal-700" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl text-navy-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Leadership section — TODO: expand with real team bios and headshots */}
      <section className="bg-white py-24 lg:py-32" aria-labelledby="leadership-heading">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <p className="section-label mb-4">Leadership</p>
              <h2 id="leadership-heading" className="font-display text-display-md text-navy-900 mb-5">
                Senior physicians and clinical strategists
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                Our leadership team combines decades of hands-on clinical trial experience across
                pharmaceutical companies, academic medical centers, and contract research
                organizations. We have designed, executed, and monitored studies across Phase I–IV
                in oncology, rare diseases, immunology, metabolic disorders, and neurodegeneration.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {/* TODO: add individual team member profiles, photos, credentials, and LinkedIn links */}
                Our physicians are active in the clinical development community — publishing
                peer-reviewed research, presenting at major conferences, and contributing to
                regulatory guidance development.
              </p>
              <div className="rounded-xl border border-dashed border-brand-teal-200 bg-brand-teal-50/40 p-5 text-sm text-brand-teal-800">
                <strong>TODO:</strong> Team member profiles and headshots to be added. See{' '}
                <code className="text-xs bg-brand-teal-100 px-1 py-0.5 rounded">DESIGN_NOTES.md</code>{' '}
                for details on what content is needed.
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/contact">
                <Button variant="secondary" size="md" className="group">
                  Work with our team
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
