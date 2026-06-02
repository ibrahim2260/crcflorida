'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { fadeInUp, staggerContainer, staggerContainerFast, viewportConfig } from '@/lib/animations'

const areas = [
  {
    category: 'Oncology',
    color: 'teal',
    items: ['Gene & Cell Therapy', 'Immunotherapy', 'Solid Tumors', 'Radio-Oncology'],
  },
  {
    category: 'Inflammatory & Autoimmune',
    color: 'cyan',
    items: ['Systemic Lupus Erythematosus (SLE)', 'Nephrotic Syndrome (NPH)'],
  },
  {
    category: 'Metabolic',
    color: 'gold',
    items: ['MASH / NASH', 'Metabolic Liver Disease'],
  },
  {
    category: 'Rare Diseases',
    color: 'teal',
    items: ['Primary Biliary Cholangitis (PBC)', 'C3 Glomerulopathy (C3G)', 'IgAN Post-Renal Transplant', 'Nephrotic Syndrome'],
  },
  {
    category: 'Neurodegenerative',
    color: 'cyan',
    items: ['RNA Therapy', 'Facioscapulohumeral MD (FSHD)', 'Duchenne Muscular Dystrophy (DMD)'],
  },
  {
    category: 'Pediatric',
    color: 'gold',
    items: ['Sickle Cell Disease'],
  },
]

type AreaColor = 'teal' | 'cyan' | 'gold'

const colorStyles: Record<AreaColor, { header: string; tag: string; dot: string }> = {
  teal: {
    header: 'text-brand-teal-300',
    tag: 'bg-brand-teal-700/40 text-brand-teal-200 border-brand-teal-500/40',
    dot: 'bg-brand-teal-400',
  },
  cyan: {
    header: 'text-brand-cyan-300',
    tag: 'bg-brand-cyan-500/20 text-brand-cyan-200 border-brand-cyan-400/35',
    dot: 'bg-brand-cyan-400',
  },
  gold: {
    header: 'text-brand-gold-400',
    tag: 'bg-brand-gold-600/20 text-brand-gold-300 border-brand-gold-500/35',
    dot: 'bg-brand-gold-400',
  },
}

export default function TherapeuticExpertise() {
  return (
    <Section id="expertise" className="bg-[#160E36] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark opacity-60" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,77,255,1), transparent)' }}
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
          <motion.div
            variants={fadeInUp}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-cyan-400 mb-4">
                Therapeutic Focus
              </p>
              <h2 className="font-display text-display-md text-white">
                Deep expertise across{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #B877FF 0%, #7558DC 50%, #9B4DFF 100%)' }}
                >
                  8 therapeutic areas
                </span>
              </h2>
            </div>
            <p className="text-sm text-white/45 max-w-xs leading-relaxed lg:text-right">
              Specialized clinical knowledge across oncology, rare diseases, neurodegenerative
              conditions, and beyond.
            </p>
          </motion.div>

          {/* Areas grid */}
          <motion.div
            variants={staggerContainerFast}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {areas.map((area) => {
              const styles = colorStyles[area.color as AreaColor]
              return (
                <motion.div
                  key={area.category}
                  variants={fadeInUp}
                  className="rounded-xl border border-white/8 bg-white/[0.04] p-5 hover:bg-white/[0.08] hover:border-white/14 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`h-2 w-2 rounded-full flex-shrink-0 ${styles.dot}`} aria-hidden="true" />
                    <h3 className={`text-xs font-bold tracking-wide uppercase ${styles.header}`}>
                      {area.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.items.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles.tag}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Link */}
          <motion.div variants={fadeInUp} className="mt-10 text-center">
            <Link
              href="/expertise"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-brand-cyan-300 transition-colors duration-200"
            >
              Explore all therapeutic expertise
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
