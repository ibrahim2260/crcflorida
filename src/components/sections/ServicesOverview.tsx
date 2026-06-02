'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FlaskConical, Activity, FileText, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import dynamic from 'next/dynamic'

const BackgroundGradientAnimation = dynamic(
  () => import('@/components/ui/background-gradient-animation').then(m => ({ default: m.BackgroundGradientAnimation })),
  { ssr: false }
)
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

const services = [
  {
    id: 'clinical-development',
    icon: FlaskConical,
    label: 'Phase I–IV',
    title: 'Clinical Development',
    description:
      'End-to-end clinical trial design and execution across early- and late-phase studies. From first-in-human dose escalation to post-marketing surveillance and real-world evidence.',
    highlights: [
      'Phase I/II: FIH, SAD/MAD, dose-escalation',
      'Phase III/IV: Efficacy & long-term safety',
      'Oncology, immunology & rare diseases',
      'Biomarker-driven study design',
    ],
    href: '/services#clinical-development',
    card: {
      bg: 'bg-[rgba(59,34,160,0.22)]',
      bgHover: 'hover:bg-[rgba(59,34,160,0.35)]',
      border: 'border-brand-teal-500/30',
      borderHover: 'hover:border-brand-teal-400/60',
      glow: 'hover:shadow-[0_0_32px_rgba(96,64,204,0.25),0_8px_24px_rgba(0,0,0,0.4)]',
      iconBg: 'bg-brand-teal-700/50 ring-brand-teal-500/40',
      iconColor: 'text-brand-teal-200',
      badge: 'bg-brand-teal-700/40 text-brand-teal-200 border-brand-teal-500/50',
      dot: 'bg-brand-teal-400',
      link: 'text-brand-teal-300 group-hover:text-brand-teal-200',
      divider: 'border-brand-teal-500/20',
    },
  },
  {
    id: 'medical-monitoring',
    icon: Activity,
    label: 'Safety Oversight',
    title: 'Medical Monitoring',
    description:
      'Rigorous safety surveillance and medical review across all trial phases. 24/7 physician availability, signal detection, and close collaboration with pharmacovigilance teams.',
    highlights: [
      'AE, SAE & SUSAR safety oversight',
      'Medical review: labs, vitals, ECGs, imaging',
      'BOIN, mTPI & 3+3 dose-escalation support',
      'DSMB & SRC participation',
    ],
    href: '/services#medical-monitoring',
    card: {
      bg: 'bg-[rgba(96,32,190,0.20)]',
      bgHover: 'hover:bg-[rgba(120,48,220,0.30)]',
      border: 'border-brand-cyan-400/25',
      borderHover: 'hover:border-brand-cyan-400/55',
      glow: 'hover:shadow-[0_0_32px_rgba(155,77,255,0.22),0_8px_24px_rgba(0,0,0,0.4)]',
      iconBg: 'bg-brand-cyan-500/30 ring-brand-cyan-400/40',
      iconColor: 'text-brand-cyan-300',
      badge: 'bg-brand-cyan-500/20 text-brand-cyan-200 border-brand-cyan-400/40',
      dot: 'bg-brand-cyan-400',
      link: 'text-brand-cyan-300 group-hover:text-brand-cyan-200',
      divider: 'border-brand-cyan-400/20',
    },
  },
  {
    id: 'protocol-development',
    icon: FileText,
    label: 'Regulatory Ready',
    title: 'Protocol Development',
    description:
      'Strategic study design and full document generation — from investigator brochures to case report forms — built for regulatory submission and operational excellence.',
    highlights: [
      'Phase I–IV study design strategy',
      'FDA, EMA & ICH-GCP alignment',
      'Investigator Brochures, ICFs & CRFs',
      'Medical Monitoring Plans',
    ],
    href: '/services#protocol-development',
    card: {
      bg: 'bg-[rgba(100,70,20,0.18)]',
      bgHover: 'hover:bg-[rgba(130,90,20,0.28)]',
      border: 'border-brand-gold-500/25',
      borderHover: 'hover:border-brand-gold-400/55',
      glow: 'hover:shadow-[0_0_32px_rgba(196,150,59,0.18),0_8px_24px_rgba(0,0,0,0.4)]',
      iconBg: 'bg-brand-gold-600/30 ring-brand-gold-500/40',
      iconColor: 'text-brand-gold-300',
      badge: 'bg-brand-gold-600/20 text-brand-gold-300 border-brand-gold-500/40',
      dot: 'bg-brand-gold-400',
      link: 'text-brand-gold-300 group-hover:text-brand-gold-200',
      divider: 'border-brand-gold-500/20',
    },
  },
]

export default function ServicesOverview() {
  return (
    <section id="services" className="relative overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(12, 8, 32)"
        gradientBackgroundEnd="rgb(6, 4, 18)"
        firstColor="59, 34, 160"
        secondColor="155, 77, 255"
        thirdColor="78, 46, 189"
        fourthColor="196, 150, 59"
        fifthColor="184, 119, 255"
        pointerColor="140, 80, 255"
        size="75%"
        blendingValue="hard-light"
        containerClassName="w-full py-24 lg:py-32"
        className="relative z-10"
        interactive
      >
        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Section header */}
            <motion.div variants={fadeInUp} className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-cyan-300 mb-4">
                What We Do
              </p>
              <h2 className="font-display text-display-md text-white mb-5">
                Comprehensive clinical services,{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #B877FF 0%, #7558DC 50%, #9B4DFF 100%)' }}
                >
                  built for biotech
                </span>
              </h2>
              <p className="text-base text-white/55 leading-relaxed max-w-lg">
                From study design through final report, we provide the scientific rigor and
                regulatory expertise your program demands — with a senior team engaged at every step.
              </p>
            </motion.div>

            {/* Service cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {services.map((service) => {
                const Icon = service.icon
                const c = service.card

                return (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    className="group"
                  >
                    <Link
                      href={service.href}
                      className={`flex flex-col h-full rounded-2xl backdrop-blur-md border p-7 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_24px_rgba(0,0,0,0.45)] ${c.bg} ${c.bgHover} ${c.border} ${c.borderHover} ${c.glow}`}
                      aria-labelledby={`service-title-${service.id}`}
                    >
                      {/* Icon + badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`h-11 w-11 rounded-xl flex items-center justify-center ring-1 transition-colors duration-300 ${c.iconBg}`}>
                          <Icon size={20} className={c.iconColor} aria-hidden="true" />
                        </div>
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${c.badge}`}>
                          {service.label}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        id={`service-title-${service.id}`}
                        className="font-display text-display-sm text-white mb-3"
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white/58 leading-relaxed mb-5 flex-1">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6" role="list">
                        {service.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs text-white/45">
                            <span
                              className={`mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${c.dot}`}
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Link */}
                      <div className={`flex items-center gap-1.5 text-sm font-medium mt-auto pt-4 border-t transition-colors duration-200 ${c.link} ${c.divider}`}>
                        Learn more
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* View all */}
            <motion.div variants={fadeInUp} className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-brand-cyan-300 transition-colors duration-200"
              >
                View full service details
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </BackgroundGradientAnimation>
    </section>
  )
}
