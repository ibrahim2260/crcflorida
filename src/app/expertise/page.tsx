'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import CTASection from '@/components/sections/CTASection'
import { fadeInUp, staggerContainer, staggerContainerFast, viewportConfig } from '@/lib/animations'

type AreaColor = 'teal' | 'cyan' | 'gold' | 'slate'

const therapeuticAreas = [
  {
    category: 'Oncology',
    color: 'teal' as AreaColor,
    description:
      'Deep expertise in immuno-oncology and precision medicine across solid tumor indications, including early-phase gene and cell therapy trials.',
    conditions: [
      { name: 'Gene & Cell Therapy', detail: 'CAR-T, gene editing, viral vectors' },
      { name: 'Immunotherapy', detail: 'Checkpoint inhibitors, bispecific antibodies' },
      { name: 'Solid Tumors', detail: 'Broad oncology experience' },
      { name: 'Hematologic Malignancies', detail: 'Lymphoma, leukemia' },
    ],
  },
  {
    category: 'Radio-Oncology',
    color: 'cyan' as AreaColor,
    description:
      'Specialized clinical monitoring experience in radiopharmaceutical and targeted radiation therapies for solid organ tumors.',
    conditions: [
      { name: 'Radiopharmaceuticals', detail: 'Targeted alpha/beta therapy' },
      { name: 'Solid Organ Tumors', detail: 'Liver, kidney, lung' },
      { name: 'Combination Regimens', detail: 'Radiation + immuno-oncology' },
    ],
  },
  {
    category: 'Inflammatory & Autoimmune',
    color: 'gold' as AreaColor,
    description:
      'Clinical development expertise in complex immune-mediated diseases with sophisticated biomarker and safety monitoring requirements.',
    conditions: [
      { name: 'Systemic Lupus Erythematosus (SLE)', detail: 'Biologic & targeted therapy trials' },
      { name: 'Nephrotic Syndrome (NPH)', detail: 'Podocyte and complement pathway' },
      { name: 'Inflammatory Bowel Disease', detail: 'Crohn\'s, UC' },
    ],
  },
  {
    category: 'Metabolic Disease',
    color: 'teal' as AreaColor,
    description:
      'Protocol development and medical monitoring for metabolic and hepatic conditions with evolving surrogate endpoint landscapes.',
    conditions: [
      { name: 'MASH / NASH', detail: 'Metabolic-associated steatohepatitis' },
      { name: 'Metabolic Liver Disease', detail: 'Non-alcoholic fatty liver disease' },
      { name: 'Type 2 Diabetes', detail: 'CV outcomes, renal endpoints' },
    ],
  },
  {
    category: 'Rare Diseases',
    color: 'cyan' as AreaColor,
    description:
      'Specialist experience navigating orphan drug designations, small patient populations, and complex regulatory pathways in rare disease research.',
    conditions: [
      { name: 'Primary Biliary Cholangitis (PBC)', detail: 'Bile acid pathway, FXR agonists' },
      { name: 'C3 Glomerulopathy (C3G)', detail: 'Complement-mediated nephropathy' },
      { name: 'Nephrotic Syndrome', detail: 'FSGS, MN, minimal change' },
      { name: 'IgAN Post-Renal Transplant', detail: 'IgA nephropathy recurrence' },
    ],
  },
  {
    category: 'Neurodegenerative',
    color: 'gold' as AreaColor,
    description:
      'Emerging expertise in gene and RNA-targeted therapies for neuromuscular and neurodegenerative diseases with complex safety monitoring.',
    conditions: [
      { name: 'RNA Therapy', detail: 'ASO, siRNA, mRNA platforms' },
      { name: 'Facioscapulohumeral MD (FSHD)', detail: 'DUX4-targeted therapeutics' },
      { name: 'Duchenne Muscular Dystrophy (DMD)', detail: 'Gene therapy, exon skipping' },
      { name: 'ALS', detail: 'Neuroprotective & gene-targeted' },
    ],
  },
  {
    category: 'Pediatric',
    color: 'teal' as AreaColor,
    description:
      'Pediatric trial design and medical monitoring with expertise in age-appropriate endpoints, dosing, and safety surveillance.',
    conditions: [
      { name: 'Sickle Cell Disease', detail: 'Gene therapy, HU, hydroxyurea trials' },
      { name: 'Pediatric Oncology', detail: 'Dosing, safety, long-term follow-up' },
      { name: 'Rare Pediatric Metabolic', detail: 'Lysosomal storage disorders' },
    ],
  },
  {
    category: 'Cardiovascular & Cardiometabolic',
    color: 'slate' as AreaColor,
    description:
      'Protocol design and medical monitoring across cardiovascular outcomes trials, heart failure studies, and cardiometabolic programs with evolving surrogate and hard-endpoint landscapes.',
    conditions: [
      { name: 'Cardiovascular Outcomes', detail: 'MACE endpoints, CV mortality trials' },
      { name: 'Heart Failure', detail: 'HFrEF, HFpEF, device-adjunct studies' },
      { name: 'Atherosclerosis & Lipids', detail: 'LDL-C, Lp(a), PCSK9 programs' },
      { name: 'Cardiometabolic', detail: 'T2D + CV outcomes, GLP-1, SGLT2' },
    ],
  },
]

const colorStyles: Record<AreaColor, { header: string; tag: string; dot: string; card: string; detail: string }> = {
  teal: {
    header: 'text-brand-teal-700',
    tag: 'bg-brand-teal-50 text-brand-teal-800 border-brand-teal-200',
    dot: 'bg-brand-teal-500',
    card: 'border-brand-teal-100 hover:border-brand-teal-300',
    detail: 'text-brand-teal-600',
  },
  cyan: {
    header: 'text-brand-teal-600',
    tag: 'bg-brand-cyan-100 text-brand-teal-800 border-brand-cyan-200',
    dot: 'bg-brand-cyan-400',
    card: 'border-brand-cyan-100 hover:border-brand-cyan-300',
    detail: 'text-brand-teal-500',
  },
  gold: {
    header: 'text-brand-gold-600',
    tag: 'bg-brand-gold-100 text-brand-gold-700 border-brand-gold-200',
    dot: 'bg-brand-gold-500',
    card: 'border-brand-gold-100 hover:border-brand-gold-300',
    detail: 'text-brand-gold-600',
  },
  slate: {
    header: 'text-slate-600',
    tag: 'bg-slate-100 text-slate-700 border-slate-200',
    dot: 'bg-slate-400',
    card: 'border-slate-100 hover:border-slate-300',
    detail: 'text-slate-500',
  },
}

export default function ExpertisePage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-navy-900 pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
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
              Therapeutic Expertise
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-display-xl text-white mb-6">
              Deep specialization,{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #B877FF, #7558DC)' }}
              >
                broad reach
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base text-white/60 leading-relaxed max-w-lg">
              Our team brings therapeutic-area expertise that goes far beyond generalist CRO
              support — enabling more rigorous protocols, sharper safety monitoring, and faster
              regulatory readiness across 8 therapeutic areas.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Areas grid */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {therapeuticAreas.map((area) => {
              const styles = colorStyles[area.color]
              return (
                <motion.div
                  key={area.category}
                  variants={fadeInUp}
                  className={`rounded-2xl border bg-white p-7 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 ${styles.card}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${styles.dot}`} aria-hidden="true" />
                    <h2 className={`text-xs font-bold tracking-[0.12em] uppercase ${styles.header}`}>
                      {area.category}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {area.description}
                  </p>

                  <ul className="space-y-3" role="list">
                    {area.conditions.map((c) => (
                      <li key={c.name} className="flex items-start justify-between gap-3">
                        <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles.tag}`}>
                          {c.name}
                        </span>
                        <span className={`text-xs leading-tight mt-1 text-right hidden sm:block ${styles.detail} opacity-75`}>
                          {c.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
