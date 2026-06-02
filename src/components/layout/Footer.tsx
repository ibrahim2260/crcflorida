import Link from 'next/link'
import { Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const serviceLinks = [
  { label: 'Clinical Development', href: '/services#clinical-development' },
  { label: 'Medical Monitoring', href: '/services#medical-monitoring' },
  { label: 'Protocol Development', href: '/services#protocol-development' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Therapeutic Expertise', href: '/expertise' },
  { label: 'Publications', href: '/publications' },
  { label: 'Contact', href: '/contact' },
]

const regulatoryBadges = ['FDA', 'EMA', 'ICH-GCP', 'Phase I–IV']

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70" role="contentinfo">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-teal-700/60 to-transparent" />

      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Brand column */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 mb-5 group"
                aria-label="Clinical Research Consultants LLC — home"
              >
                <div className="h-9 w-9 rounded-lg bg-brand-teal-700 flex items-center justify-center ring-1 ring-brand-teal-600 group-hover:bg-brand-teal-600 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="3.5" stroke="white" strokeWidth="1.5" />
                    <path
                      d="M9 2.5V5M9 13v2.5M2.5 9H5M13 9h2.5"
                      stroke="#9B4DFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.4 4.4l1.77 1.77M11.83 11.83l1.77 1.77M13.6 4.4l-1.77 1.77M6.17 11.83l-1.77 1.77"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold text-white tracking-tight">
                    Clinical Research Consultants
                  </div>
                  <div className="text-[10px] text-brand-cyan-400 tracking-[0.14em] uppercase font-medium">
                    LLC · CRC Florida
                  </div>
                </div>
              </Link>

              <p className="text-sm leading-relaxed text-white/55 max-w-sm mb-6">
                Expert clinical development and medical monitoring for pharmaceutical and
                biotechnology companies worldwide. Quality, innovation, and integrity at every stage.
              </p>

              {/* Regulatory badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {regulatoryBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-white/50 tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Social */}
              <a
                href="https://www.linkedin.com/company/clinical-research-consultants-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-brand-cyan-400 transition-colors duration-200 group"
                aria-label="CRC Florida on LinkedIn (opens in new tab)"
              >
                <Linkedin
                  size={16}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                LinkedIn
                <ExternalLink size={11} className="text-white/30" />
              </a>
            </div>

            {/* Nav columns */}
            <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
                  Services
                </h3>
                <ul className="space-y-3" role="list">
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
                  Company
                </h3>
                <ul className="space-y-3" role="list">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 hover:text-white transition-colors duration-200 link-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
                  Contact
                </h3>
                <ul className="space-y-3" role="list">
                  <li>
                    <a
                      href="mailto:info@crcflorida.com" // TODO: replace with real email
                      className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      <Mail size={14} className="text-brand-teal-500" />
                      info@crcflorida.com
                    </a>
                  </li>
                  <li className="mt-4">
                    <Link href="/contact">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-cyan-400 hover:text-brand-cyan-300 transition-colors duration-200">
                        Start a Conversation
                        <ExternalLink size={12} />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Clinical Research Consultants LLC. All rights reserved.
            </p>
            <p className="text-xs text-white/20">
              CRC Florida · Clinical Development · Medical Monitoring · Protocol Development
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
