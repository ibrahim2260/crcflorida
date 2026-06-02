'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

const stats = [
  {
    value: 7,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Decades of combined clinical expertise',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Successful Trials',
    description: 'Across phases and therapeutic areas',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Satisfied Clients',
    description: 'Pharma and biotech companies worldwide',
  },
  {
    value: 6,
    suffix: '+',
    label: 'Therapeutic Areas',
    description: 'Oncology, rare diseases, and more',
  },
]

function AnimatedNumber({
  target,
  suffix,
  duration = 1800,
}: {
  target: number
  suffix: string
  duration?: number
}) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section
      className="relative bg-navy-900 overflow-hidden py-24 lg:py-32"
      aria-labelledby="stats-heading"
    >
      {/* Background texture */}
      <div className="absolute inset-0 dot-grid-dark" aria-hidden="true" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(96,64,204,0.45), transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(155,77,255,0.35), transparent)',
        }}
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
          <motion.div variants={fadeInUp} className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-cyan-400 mb-4">
              Our Track Record
            </p>
            <h2
              id="stats-heading"
              className="font-display text-display-md text-white mb-4"
            >
              Proven expertise,{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #B877FF 0%, #7558DC 100%)',
                }}
              >
                measurable results
              </span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed">
              A decade of delivering rigorous, compliant, and patient-centered clinical research
              for leading pharmaceutical and biotechnology organizations.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/6 rounded-2xl overflow-hidden ring-1 ring-white/8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="bg-navy-900/60 backdrop-blur-sm p-8 text-center hover:bg-navy-800/40 transition-colors duration-300"
              >
                <div
                  className="font-display text-5xl lg:text-6xl font-normal text-white mb-2"
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-brand-cyan-300 mb-1.5 tracking-tight">
                  {stat.label}
                </div>
                <div className="text-xs text-white/40 leading-snug">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
