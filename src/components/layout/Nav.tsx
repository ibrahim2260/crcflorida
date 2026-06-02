'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'About', href: '/about' },
  { label: 'Publications', href: '/publications' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navBg = scrolled || !isHome
    ? 'bg-navy-900/95 backdrop-blur-md shadow-nav'
    : 'bg-transparent'

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          navBg
        )}
        role="banner"
      >
        <Container>
          <div className="flex h-18 items-center justify-between py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan-400 rounded-sm"
              aria-label="Clinical Research Consultants LLC — home"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-brand-teal-700 ring-1 ring-brand-teal-600 group-hover:bg-brand-teal-600 transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="3.5" stroke="white" strokeWidth="1.5" />
                  <path d="M9 2.5V5M9 13v2.5M2.5 9H5M13 9h2.5" stroke="#9B4DFF" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4.4 4.4l1.77 1.77M11.83 11.83l1.77 1.77M13.6 4.4l-1.77 1.77M6.17 11.83l-1.77 1.77" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold text-white tracking-tight">CRC Florida</span>
                <span className="text-[10px] text-brand-cyan-300 tracking-[0.12em] uppercase font-medium">Clinical Research</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/8'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <Button variant="primary" size="sm">
                  Request a Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/8 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-cyan-400"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-label="Mobile navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.22, 0.03, 0.26, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-navy-900 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="h-7 w-7 rounded-lg bg-brand-teal-700 flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="3.5" stroke="white" strokeWidth="1.5" />
                      <path d="M9 2.5V5M9 13v2.5M2.5 9H5M13 9h2.5" stroke="#9B4DFF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white">CRC Florida</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/8 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200',
                      pathname === link.href
                        ? 'bg-brand-teal-700/30 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/6'
                    )}
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-white/30" />
                  </Link>
                ))}
              </nav>

              <div className="p-6 border-t border-white/8">
                <Link href="/contact" className="block w-full">
                  <Button variant="primary" size="md" className="w-full rounded-xl">
                    Request a Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
