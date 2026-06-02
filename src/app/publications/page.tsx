'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import CTASection from '@/components/sections/CTASection'
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations'

// TODO: replace with real publications data; this is illustrative placeholder content
// Source these from PubMed, Google Scholar, or the existing CRCFlorida.org publications page.
const publications = [
  {
    id: 1,
    title: 'Dose-Escalation Design Strategies in First-in-Human Oncology Studies: A Comparative Review of 3+3, BOIN, and mTPI Methodologies',
    journal: 'Journal of Clinical Oncology Design',
    year: '2023',
    type: 'Review Article',
    excerpt:
      'A comprehensive review of adaptive dose-escalation methodologies used in Phase I oncology trials, with practical guidance on design selection based on therapeutic context and regulatory landscape.',
    doi: '#', // TODO: add real DOI
  },
  {
    id: 2,
    title: 'Medical Monitoring Best Practices in Phase I/II Gene Therapy Trials: Safety Signals, Stopping Rules, and On-Call Protocols',
    journal: 'Therapeutic Innovation & Regulatory Science',
    year: '2023',
    type: 'Original Article',
    excerpt:
      'This paper describes a structured approach to medical monitoring in early-phase gene therapy trials, including safety monitoring plan design, dose-escalation committee operations, and adverse event adjudication.',
    doi: '#', // TODO: add real DOI
  },
  {
    id: 3,
    title: 'Protocol Design Considerations for Rare Disease Clinical Trials: Navigating Orphan Populations, Adaptive Endpoints, and Regulatory Complexity',
    journal: 'Orphanet Journal of Rare Diseases',
    year: '2022',
    type: 'Review Article',
    excerpt:
      'Rare disease trials present unique methodological challenges. This review addresses adaptive enrichment designs, natural history data integration, and endpoint selection for FDA and EMA orphan programs.',
    doi: '#', // TODO: add real DOI
  },
  {
    id: 4,
    title: 'Biomarker-Driven Study Design in Immuno-Oncology: Integrating PD-L1, TMB, and Novel Predictive Markers into Phase I/II Trial Architecture',
    journal: 'Cancer Medicine',
    year: '2022',
    type: 'Original Article',
    excerpt:
      'Examines the practical integration of predictive and pharmacodynamic biomarkers into early-phase oncology trials, with emphasis on adaptive enrichment strategies and regulatory expectations.',
    doi: '#', // TODO: add real DOI
  },
  {
    id: 5,
    title: 'Safety Reporting and Signal Detection in CAR-T and Gene-Edited Cell Therapy Trials: From CRS to ICANS and Beyond',
    journal: 'Blood Reviews',
    year: '2021',
    type: 'Review Article',
    excerpt:
      'A practice-oriented review of adverse event monitoring, safety signal identification, and medical management strategies for cell therapy trials, including grading scales and stopping rule frameworks.',
    doi: '#', // TODO: add real DOI
  },
  {
    id: 6,
    title: 'ICH-GCP E6(R3) Update: Implications for Medical Monitoring Practice and Protocol Design',
    journal: 'Regulatory Toxicology and Pharmacology',
    year: '2021',
    type: 'Perspective',
    excerpt:
      'An analysis of the updated ICH-GCP E6(R3) guidance and its practical implications for medical monitors, sponsors, and protocol development teams, including documentation standards and risk-based monitoring.',
    doi: '#', // TODO: add real DOI
  },
]

const typeStyles: Record<string, string> = {
  'Review Article': 'bg-brand-teal-50 text-brand-teal-800 border-brand-teal-200',
  'Original Article': 'bg-brand-cyan-100 text-brand-teal-800 border-brand-cyan-200',
  'Perspective': 'bg-brand-gold-100 text-brand-gold-700 border-brand-gold-200',
}

export default function PublicationsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-navy-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" aria-hidden="true" />
        <div
          className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,77,255,0.35), transparent)' }}
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
              Publications
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-display-xl text-white mb-6">
              Thought leadership &amp;{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #B877FF, #7558DC)' }}
              >
                published research
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-white/60 leading-relaxed max-w-lg">
              Our team contributes to the clinical research community through peer-reviewed
              publications, conference presentations, and regulatory guidance — reinforcing
              the scientific foundation behind our client work.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border-b border-amber-100">
        <Container>
          <div className="py-3 flex items-start gap-2 text-xs text-amber-700">
            <span className="font-semibold mt-0.5">Note:</span>
            <span>
              Publication list below is illustrative placeholder content.{' '}
              {/* TODO: replace all publications with real peer-reviewed papers from the team */}
              Replace with actual publications from PubMed / Google Scholar before launch.
              See <code className="bg-amber-100 px-1 rounded">DESIGN_NOTES.md</code> for guidance.
            </span>
          </div>
        </Container>
      </div>

      {/* Publications list */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Filter bar — TODO: implement filtering by year/type if needed */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12 pb-6 border-b border-slate-100">
              <BookOpen size={16} className="text-brand-teal-700" aria-hidden="true" />
              <span className="text-sm text-slate-500">
                <strong className="text-navy-900">{publications.length} publications</strong> — peer-reviewed articles and perspectives
              </span>
            </motion.div>

            <div className="space-y-6">
              {publications.map((pub) => (
                <motion.article
                  key={pub.id}
                  variants={fadeInUp}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                  aria-labelledby={`pub-title-${pub.id}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${typeStyles[pub.type] ?? typeStyles['Perspective']}`}
                    >
                      {pub.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Calendar size={11} aria-hidden="true" />
                      {pub.year}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs font-medium text-brand-teal-700">{pub.journal}</span>
                  </div>

                  <h2
                    id={`pub-title-${pub.id}`}
                    className="font-display text-xl text-navy-900 mb-3 group-hover:text-brand-teal-800 transition-colors duration-200"
                  >
                    {pub.title}
                  </h2>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{pub.excerpt}</p>

                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-teal-700 hover:text-brand-teal-600 transition-colors duration-200"
                    aria-label={`View publication: ${pub.title} (opens in new tab)`}
                  >
                    View publication
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
