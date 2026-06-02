'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import dynamic from 'next/dynamic'

const FloatingPaths = dynamic(
  () => import('@/components/ui/background-paths').then(m => ({ default: m.FloatingPaths })),
  { ssr: false }
)
import { fadeInUp, staggerContainer, EASE_PREMIUM } from '@/lib/animations'

function MolecularVisualization() {
  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      aria-hidden="true"
      className="w-full h-full max-w-lg"
    >
      {/* Outer rings — purple tones */}
      <circle cx="260" cy="260" r="230" stroke="rgba(59,34,160,0.18)"  strokeWidth="1" />
      <circle cx="260" cy="260" r="180" stroke="rgba(59,34,160,0.25)"  strokeWidth="1" />
      <circle cx="260" cy="260" r="130" stroke="rgba(155,77,255,0.18)" strokeWidth="1" />
      <circle cx="260" cy="260" r="80"  stroke="rgba(155,77,255,0.28)" strokeWidth="1.5" />
      <circle cx="260" cy="260" r="200" stroke="rgba(155,77,255,0.08)" strokeWidth="1" strokeDasharray="8 16" />

      {/* Spoke lines */}
      <line x1="260" y1="60"  x2="260" y2="130" stroke="rgba(155,77,255,0.28)" strokeWidth="1" />
      <line x1="418" y1="148" x2="372" y2="187" stroke="rgba(155,77,255,0.28)" strokeWidth="1" />
      <line x1="440" y1="320" x2="385" y2="300" stroke="rgba(155,77,255,0.22)" strokeWidth="1" />
      <line x1="340" y1="450" x2="310" y2="405" stroke="rgba(155,77,255,0.22)" strokeWidth="1" />
      <line x1="140" y1="430" x2="188" y2="390" stroke="rgba(155,77,255,0.22)" strokeWidth="1" />
      <line x1="68"  y1="310" x2="132" y2="295" stroke="rgba(155,77,255,0.22)" strokeWidth="1" />
      <line x1="80"  y1="170" x2="140" y2="200" stroke="rgba(155,77,255,0.28)" strokeWidth="1" />

      {/* Node connections to center */}
      <line x1="260" y1="130" x2="260" y2="180" stroke="rgba(155,77,255,0.16)" strokeWidth="1" />
      <line x1="372" y1="187" x2="330" y2="215" stroke="rgba(155,77,255,0.16)" strokeWidth="1" />
      <line x1="385" y1="300" x2="335" y2="285" stroke="rgba(155,77,255,0.14)" strokeWidth="1" />
      <line x1="310" y1="405" x2="290" y2="355" stroke="rgba(155,77,255,0.14)" strokeWidth="1" />
      <line x1="188" y1="390" x2="210" y2="340" stroke="rgba(155,77,255,0.14)" strokeWidth="1" />
      <line x1="132" y1="295" x2="185" y2="278" stroke="rgba(155,77,255,0.14)" strokeWidth="1" />
      <line x1="140" y1="200" x2="195" y2="228" stroke="rgba(155,77,255,0.16)" strokeWidth="1" />

      {/* Peripheral nodes */}
      <circle cx="260" cy="60"  r="5"   fill="rgba(155,77,255,0.65)" />
      <circle cx="418" cy="148" r="4"   fill="rgba(155,77,255,0.55)" />
      <circle cx="440" cy="320" r="6"   fill="rgba(155,77,255,0.75)" />
      <circle cx="340" cy="450" r="4"   fill="rgba(155,77,255,0.55)" />
      <circle cx="140" cy="430" r="5"   fill="rgba(155,77,255,0.65)" />
      <circle cx="68"  cy="310" r="4"   fill="rgba(155,77,255,0.55)" />
      <circle cx="80"  cy="170" r="5"   fill="rgba(155,77,255,0.65)" />

      {/* Mid-ring nodes */}
      <circle cx="260" cy="130" r="4"   fill="rgba(59,34,160,0.85)" />
      <circle cx="372" cy="187" r="3.5" fill="rgba(59,34,160,0.75)" />
      <circle cx="385" cy="300" r="4"   fill="rgba(59,34,160,0.85)" />
      <circle cx="310" cy="405" r="3.5" fill="rgba(59,34,160,0.75)" />
      <circle cx="188" cy="390" r="3.5" fill="rgba(59,34,160,0.75)" />
      <circle cx="132" cy="295" r="4"   fill="rgba(59,34,160,0.85)" />
      <circle cx="140" cy="200" r="3.5" fill="rgba(59,34,160,0.75)" />

      {/* Core node with glow */}
      <circle cx="260" cy="260" r="22" fill="rgba(59,34,160,0.18)" />
      <circle cx="260" cy="260" r="14" fill="rgba(59,34,160,0.45)" />
      <circle cx="260" cy="260" r="8"  fill="rgba(155,77,255,0.95)" />
      <circle cx="260" cy="260" r="4"  fill="white" />

      {/* Scatter data points */}
      <circle cx="300" cy="215" r="2.5" fill="rgba(155,77,255,0.45)" />
      <circle cx="330" cy="285" r="2"   fill="rgba(155,77,255,0.38)" />
      <circle cx="290" cy="355" r="2.5" fill="rgba(155,77,255,0.45)" />
      <circle cx="210" cy="340" r="2"   fill="rgba(155,77,255,0.38)" />
      <circle cx="185" cy="278" r="2.5" fill="rgba(155,77,255,0.45)" />
      <circle cx="195" cy="228" r="2"   fill="rgba(155,77,255,0.38)" />
      <circle cx="260" cy="180" r="2.5" fill="rgba(155,77,255,0.45)" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
      aria-labelledby="hero-heading"
    >
      {/* ── Animated floating path lines ── */}
      <div className="absolute inset-0 opacity-50" aria-hidden="true">
        <FloatingPaths position={1} colorClass="text-brand-teal-400" />
      </div>
      <div className="absolute inset-0 opacity-[0.28]" aria-hidden="true">
        <FloatingPaths position={-1} colorClass="text-brand-cyan-300" />
      </div>

      {/* Ambient radial glows */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(100,64,204,0.28) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,77,255,0.12) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <Container className="relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="mb-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal-700/50 bg-brand-teal-900/50 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-brand-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan-400" aria-hidden="true" />
                Clinical Development · Medical Monitoring
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl lg:text-display-xl text-white leading-[1.08] tracking-tight mb-6"
            >
              Advancing Clinical
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #B877FF 0%, #7558DC 50%, #9B4DFF 100%)',
                }}
              >
                Development
              </span>{' '}
              &amp;
              <br />
              Medical Monitoring
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-xl"
            >
              In a rapidly evolving clinical-trial landscape, effective clinical development
              and robust medical monitoring are critical to bringing new therapies safely and
              efficiently to the patients who need them. We empower every stage of clinical
              research.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Request a Consultation
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="ghost" size="lg">
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* Inline stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-14 pt-8 border-t border-white/8 grid grid-cols-3 gap-6"
            >
              {[
                { value: '7+', label: 'Years of Experience' },
                { value: '20+', label: 'Successful Trials' },
                { value: '6+', label: 'Therapeutic Areas' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-display text-white font-semibold mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 leading-snug">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — molecular visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE_PREMIUM, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative"
            aria-hidden="true"
          >
            <div className="relative w-full aspect-square max-w-[480px]">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-35"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(96,64,204,0.65), transparent 60%)',
                }}
              />
              <MolecularVisualization />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.18em] uppercase text-white/25 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/25" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(15,11,38,0.75))' }}
        aria-hidden="true"
      />
    </section>
  )
}
