import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'

// Below-fold sections — split into separate JS chunks
// HTML still SSRs for SEO; JS loads after Hero is interactive
const CredibilityBand     = dynamic(() => import('@/components/sections/CredibilityBand'))
const ServicesOverview    = dynamic(() => import('@/components/sections/ServicesOverview'))
const StatsSection        = dynamic(() => import('@/components/sections/StatsSection'))
const TherapeuticExpertise = dynamic(() => import('@/components/sections/TherapeuticExpertise'))
const HowWeWork           = dynamic(() => import('@/components/sections/HowWeWork'))
const AboutTeaser         = dynamic(() => import('@/components/sections/AboutTeaser'))
const CTASection          = dynamic(() => import('@/components/sections/CTASection'))

export const metadata: Metadata = {
  title:
    'Clinical Research Consultants LLC | Expert Clinical Development & Medical Monitoring',
  description:
    'CRC Florida provides expert clinical development (Phase I–IV), medical monitoring, and protocol development for pharmaceutical and biotechnology companies. FDA · EMA · ICH-GCP compliant.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBand />
      <ServicesOverview />
      <StatsSection />
      <TherapeuticExpertise />
      <HowWeWork />
      <AboutTeaser />
      <CTASection />
    </>
  )
}
