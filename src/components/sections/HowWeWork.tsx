'use client'

import { motion } from 'framer-motion'
import { Search, FileCheck, Users, TrendingUp } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Alignment',
    description:
      'We begin with a thorough scientific and regulatory review of your program. We assess study objectives, patient population, regulatory landscape, and therapeutic context to align on strategy before any design work begins.',
  },
  {
    number: '02',
    icon: FileCheck,
    title: 'Protocol & Document Development',
    description:
      'Our team develops or reviews your protocol, Investigator Brochure, ICF, and CRF to ensure scientific rigor, operational feasibility, and compliance with FDA, EMA, and ICH-GCP guidelines.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Trial Oversight & Medical Monitoring',
    description:
      'We provide continuous medical monitoring — including 24/7 on-call support, safety signal detection, and participation in SRCs and DSMBs — ensuring patient safety and data integrity throughout the trial.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Regulatory Submission Support',
    description:
      'From end-of-study reporting to IND/NDA/BLA support, we deliver analysis-ready data packages and medical narratives built for regulatory success, helping you move your therapy closer to approval.',
  },
]

export default function HowWeWork() {
  return (
    <Section
      id="approach"
      className="relative bg-navy-900 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 dot-grid-dark opacity-60" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,64,204,1), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute left-0 top-24 bottom-24 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(155,77,255,0.3), transparent)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-cyan-400 mb-4">
              How We Engage
            </p>
            <h2
              id="process-heading"
              className="font-display text-display-md text-white mb-5"
            >
              A structured approach to{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #B877FF 0%, #7558DC 50%, #9B4DFF 100%)' }}
              >
                every engagement
              </span>
            </h2>
            <p className="text-base text-white/55 leading-relaxed max-w-lg">
              We reduce buyer uncertainty with a transparent, proven engagement framework —
              so you know exactly what to expect from first call through final report.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="group relative flex gap-5 rounded-2xl bg-white/[0.05] border border-white/8 p-7 hover:bg-white/[0.08] hover:border-white/14 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {index % 2 === 0 && (
                    <div
                      className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-r from-brand-teal-500/30 to-transparent hidden lg:block"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl bg-brand-teal-700/50 flex items-center justify-center ring-1 ring-brand-teal-500/40 group-hover:bg-brand-teal-700/70 transition-colors duration-300">
                        <Icon size={20} className="text-brand-cyan-300" aria-hidden="true" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 text-[10px] font-bold text-brand-cyan-300 bg-brand-teal-700/60 border border-brand-teal-500/40 rounded-full w-5 h-5 flex items-center justify-center leading-none">
                        {step.number.replace('0', '')}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-brand-teal-300 mb-1.5">
                      Step {step.number}
                    </div>
                    <h3 className="font-display text-xl text-white mb-2.5">{step.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
