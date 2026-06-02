'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import dynamic from 'next/dynamic'

const ShaderBackground = dynamic(() => import('@/components/ui/shader-background'), { ssr: false })
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: '#0F0B26' }}
      aria-labelledby="cta-heading"
    >
      {/* WebGL shader background */}
      <div className="absolute inset-0" aria-hidden="true">
        <ShaderBackground />
      </div>

      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none z-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(155,77,255,0.5), transparent)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan-400/30 bg-brand-cyan-400/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-brand-cyan-300">
              <Calendar size={12} aria-hidden="true" />
              Schedule a Consultation
            </span>
          </motion.div>

          <motion.h2
            id="cta-heading"
            variants={fadeInUp}
            className="font-display text-display-lg lg:text-display-xl text-white mb-6"
          >
            Ready to advance your
            <br />
            clinical program?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base lg:text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Whether you are designing a first-in-human study or seeking expert medical
            monitoring support, we are ready to discuss how we can help your program succeed.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Start a Conversation
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost" size="lg">
                View Our Services
              </Button>
            </Link>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-10 text-xs text-white/30 tracking-wide"
          >
            No commitment required · Senior physician response within 24 hours
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
