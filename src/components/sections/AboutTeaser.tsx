'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportConfig } from '@/lib/animations'

const pillars = [
  'Senior physician involvement at every stage',
  'Direct client partnerships — no handoffs',
  'FDA, EMA & ICH-GCP compliant deliverables',
  'Therapeutic specialization, not generalism',
  'Transparent communication and rapid response',
]

function AbstractTexture() {
  return (
    <svg viewBox="0 0 480 480" fill="none" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B22A0" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#9B4DFF" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9B4DFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3B22A0" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <rect x="40" y="40" width="400" height="400" rx="24" fill="url(#grad1)" stroke="rgba(155,77,255,0.18)" strokeWidth="1" />

      {[120, 200, 280, 360].map((x) => (
        <line key={`v${x}`} x1={x} y1="60" x2={x} y2="420" stroke="rgba(155,77,255,0.1)" strokeWidth="1" />
      ))}
      {[120, 200, 280, 360].map((y) => (
        <line key={`h${y}`} x1="60" y1={y} x2="420" y2={y} stroke="rgba(155,77,255,0.1)" strokeWidth="1" />
      ))}

      {[
        [120,120],[200,120],[280,120],[360,120],
        [120,200],[200,200],[280,200],[360,200],
        [120,280],[200,280],[280,280],[360,280],
        [120,360],[200,360],[280,360],[360,360],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill={i % 3 === 0 ? 'rgba(155,77,255,0.55)' : 'rgba(59,34,160,0.28)'} />
      ))}

      <polyline points="120,360 200,280 280,200 360,120" stroke="rgba(155,77,255,0.45)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />

      <circle cx="200" cy="280" r="12" fill="rgba(59,34,160,0.22)" />
      <circle cx="200" cy="280" r="7"  fill="rgba(59,34,160,0.65)" />
      <circle cx="200" cy="280" r="3"  fill="rgba(155,77,255,0.95)" />

      <circle cx="280" cy="200" r="16" fill="rgba(155,77,255,0.1)" />
      <circle cx="280" cy="200" r="9"  fill="rgba(155,77,255,0.32)" />
      <circle cx="280" cy="200" r="4"  fill="rgba(155,77,255,1)" />

      <path d="M380 80 Q420 80 420 120" stroke="rgba(155,77,255,0.35)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M80 380 Q80 420 120 420" stroke="rgba(59,34,160,0.35)" strokeWidth="2" fill="none" strokeLinecap="round" />

      <rect x="290" y="290" width="100" height="32" rx="6" fill="rgba(15,11,38,0.85)" />
      <text x="298" y="302" fill="rgba(155,77,255,0.95)" fontSize="7" fontFamily="monospace" fontWeight="600">ICH-GCP Compliant</text>
      <text x="298" y="314" fill="rgba(255,255,255,0.6)" fontSize="6.5" fontFamily="monospace">Phase I–IV · FDA · EMA</text>

      <circle cx="280" cy="200" r="24" stroke="rgba(155,77,255,0.18)" strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function AboutTeaser() {
  return (
    <Section id="about" className="bg-[#160E36] relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 dot-grid-dark opacity-55" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,77,255,1), transparent)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={slideInLeft}>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-cyan-400 mb-4">
                About CRC Florida
              </p>
              <h2
                id="about-heading"
                className="font-display text-display-md text-white mb-6"
              >
                Leaders in clinical development &amp;{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #B877FF 0%, #7558DC 50%, #9B4DFF 100%)' }}
                >
                  medical monitoring
                </span>
              </h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-base text-white/60 leading-relaxed mb-6">
              Clinical Research Consultants LLC brings decades of combined experience
              collaborating with pharmaceutical and biotechnology firms globally. Our mission
              is to facilitate safe, effective therapies while ensuring regulatory compliance —
              managed with quality, innovation, and integrity.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-base text-white/60 leading-relaxed mb-8">
              We are a boutique consultancy, which means our senior physicians and clinical
              strategists are directly involved in every engagement — not delegated to junior
              staff. You get the expertise you contracted for, from start to finish.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-2.5 mb-9" role="list">
              {pillars.map((pillar) => (
                <motion.li key={pillar} variants={fadeInUp} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5 text-brand-teal-400" aria-hidden="true" />
                  <span className="text-sm text-white/65 leading-snug">{pillar}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Link href="/about">
                <Button variant="secondary" size="md" className="group">
                  Meet Our Team
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: abstract visualization */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-navy-900/60 border border-white/10 aspect-square max-w-lg mx-auto lg:mx-0 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
              <AbstractTexture />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl bg-navy-900/90 backdrop-blur-sm border border-white/10 p-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-brand-teal-700 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="3.5" stroke="white" strokeWidth="1.5" />
                      <path d="M9 2.5V5M9 13v2.5M2.5 9H5M13 9h2.5" stroke="#9B4DFF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white leading-tight">Clinical Research Consultants LLC</div>
                    <div className="text-[10px] text-white/50 mt-0.5">Quality · Innovation · Integrity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -top-4 -right-4 lg:-right-8 hidden sm:block">
              <div className="rounded-xl bg-navy-900 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 min-w-[130px]">
                <div className="font-display text-3xl text-white leading-none mb-1">7+</div>
                <div className="text-xs text-white/45 leading-snug">
                  Years delivering<br />clinical excellence
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
