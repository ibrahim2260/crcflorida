import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://crcflorida.com'),
  title: {
    template: '%s | Clinical Research Consultants LLC',
    default:
      'Clinical Research Consultants LLC | Expert Clinical Development & Medical Monitoring',
  },
  description:
    'CRC Florida provides expert clinical development (Phase I–IV), medical monitoring, and protocol development services for pharmaceutical and biotechnology companies worldwide.',
  keywords: [
    'clinical development',
    'medical monitoring',
    'phase I clinical trials',
    'phase II clinical trials',
    'protocol development',
    'oncology clinical trials',
    'pharmaceutical consulting',
    'biotech clinical research',
    'FDA regulatory',
    'ICH-GCP',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crcflorida.com',
    siteName: 'Clinical Research Consultants LLC',
    title:
      'Clinical Research Consultants LLC | Expert Clinical Development & Medical Monitoring',
    description:
      'Expert clinical development, medical monitoring, and protocol development for pharma and biotech. Phase I–IV expertise. FDA · EMA · ICH-GCP compliant.',
    images: [
      {
        url: '/og-image.png', // TODO: create and upload OG image
        width: 1200,
        height: 630,
        alt: 'Clinical Research Consultants LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Research Consultants LLC',
    description:
      'Expert clinical development, medical monitoring, and protocol development for pharma and biotech.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'MedicalBusiness'],
      '@id': 'https://crcflorida.com/#organization',
      name: 'Clinical Research Consultants LLC',
      url: 'https://crcflorida.com',
      description:
        'Expert clinical development (Phase I–IV), medical monitoring, and protocol development for pharmaceutical and biotechnology companies.',
      sameAs: [
        'https://www.linkedin.com/company/clinical-research-consultants-llc',
      ],
      knowsAbout: [
        'Clinical Development',
        'Medical Monitoring',
        'Protocol Development',
        'Oncology Clinical Trials',
        'Phase I Clinical Trials',
        'FDA Regulatory Affairs',
        'ICH-GCP Compliance',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://crcflorida.com/#website',
      url: 'https://crcflorida.com',
      name: 'Clinical Research Consultants LLC',
      publisher: { '@id': 'https://crcflorida.com/#organization' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a1e1a40432f3a21565716a3"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
