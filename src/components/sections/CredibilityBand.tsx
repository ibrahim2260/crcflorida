'use client'

import { motion } from 'framer-motion'
import { Shield, Award, BookOpen, Globe } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

const frameworks = [
  { label: 'FDA', sublabel: 'U.S. Food & Drug Administration' },
  { label: 'EMA', sublabel: 'European Medicines Agency' },
  { label: 'ICH-GCP', sublabel: 'Good Clinical Practice' },
  { label: 'Phase I–IV', sublabel: 'Full-Spectrum Development' },
]

const trustSignals = [
  { icon: Shield, label: 'Regulatory Compliant', description: 'FDA, EMA & global frameworks' },
  { icon: Award, label: 'Senior Expertise', description: 'Decades of combined experience' },
  { icon: Globe, label: 'Global Reach', description: 'Pharma & biotech worldwide' },
  { icon: BookOpen, label: 'Published Research', description: 'Peer-reviewed contributions' },
]

export default function CredibilityBand() {
  return (
    <section
      className="relative bg-navy-800 border-y border-white/6 py-0 overflow-hidden"
      aria-label="Regulatory frameworks and trust signals"
    >
      <div className="absolute inset-0 dot-grid-dark opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(155,77,255,0.4), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(96,64,204,0.3), transparent)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Framework badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-b border-white/6"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold tracking-[0.14em] uppercase text-white/30 mr-2"
          >
            Regulatory Frameworks
          </motion.p>
          {frameworks.map((fw) => (
            <motion.div key={fw.label} variants={fadeInUp} className="flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-brand-cyan-400" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white tracking-tight leading-none">
                  {fw.label}
                </span>
                <span className="text-[10px] text-white/35 leading-none mt-0.5 hidden sm:block">
                  {fw.sublabel}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust signals */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="py-8 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustSignals.map((signal) => {
            const Icon = signal.icon
            return (
              <motion.div key={signal.label} variants={fadeInUp} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5 h-8 w-8 rounded-lg bg-brand-teal-700/40 flex items-center justify-center ring-1 ring-brand-teal-500/30">
                  <Icon size={15} className="text-brand-teal-300" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white leading-tight">{signal.label}</div>
                  <div className="text-xs text-white/40 mt-0.5 leading-snug">{signal.description}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
