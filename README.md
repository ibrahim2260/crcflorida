# CRC Florida — Clinical Research Consultants LLC

Premium, conversion-focused Next.js website for Clinical Research Consultants LLC (CRCFlorida).

## Tech Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v3** with custom design-token palette
- **Framer Motion v11** for scroll animations and entrance effects
- **Lucide React** for consistent line iconography
- **next/font** for self-hosted Google Fonts (DM Serif Display + Inter)

---

## Getting Started

### Prerequisites

- Node.js 18.18+ (LTS recommended)
- npm 9+ or pnpm 8+

### Install & Run

```bash
git clone <your-repo-url>
cd crc-florida
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

1. Push the repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no build settings needed.
4. Add environment variables in **Settings → Environment Variables** (see below).
5. Click **Deploy**.

### Required Environment Variables (pre-launch)

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key for the Resend email service (or your chosen provider) |
| `CONTACT_EMAIL_TO` | Destination email for contact form submissions (e.g., `info@crcflorida.com`) |
| `CONTACT_EMAIL_FROM` | Sending address (e.g., `noreply@crcflorida.com`) |

Add these to `.env.local` for local testing (never commit this file).

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & API routes
│   ├── layout.tsx          # Root layout: fonts, metadata, JSON-LD, Nav, Footer
│   ├── page.tsx            # Homepage — composes all homepage sections
│   ├── services/page.tsx   # Services detail page (Phase I–IV depth)
│   ├── expertise/page.tsx  # Therapeutic expertise grid
│   ├── about/page.tsx      # About / mission / values / leadership
│   ├── publications/page.tsx # Publications archive
│   ├── contact/page.tsx    # Contact form + sidebar
│   ├── globals.css         # Tailwind base, global utilities, dot-grid textures
│   └── api/contact/route.ts  # Contact form API route (stub — wire up email)
├── components/
│   ├── ui/                 # Reusable primitives: Button, Container, Section, Badge
│   ├── layout/             # Nav (sticky, scroll-aware, mobile drawer) + Footer
│   └── sections/           # Homepage section components
│       ├── Hero.tsx
│       ├── CredibilityBand.tsx
│       ├── ServicesOverview.tsx
│       ├── StatsSection.tsx        # Count-up animation on scroll
│       ├── TherapeuticExpertise.tsx
│       ├── HowWeWork.tsx           # 4-step engagement process
│       ├── AboutTeaser.tsx
│       └── CTASection.tsx
└── lib/
    ├── utils.ts            # cn() utility (clsx + tailwind-merge)
    └── animations.ts       # Framer Motion variants and viewport config
```

---

## Customization

### Colors

All design tokens live in `tailwind.config.ts`. The custom palette:

| Token | Hex | Usage |
|---|---|---|
| `navy-900` | `#0B1D3A` | Primary dark backgrounds (hero, nav, footer) |
| `brand-teal-700` | `#0A6B7C` | Primary brand teal (icons, badges, accents) |
| `brand-teal-500` | `#0F96AD` | Medium teal for gradients and hover states |
| `brand-cyan-400` | `#22C4D6` | Bright accent — primary CTAs, highlights |
| `brand-gold-500` | `#C4963B` | Warm secondary accent |

### Typography

Fonts load via `next/font/google` in `src/app/layout.tsx`:
- **DM Serif Display** → `font-display` class → headlines
- **Inter** → `font-sans` class → body / UI copy

To change fonts, update the imports in `layout.tsx` and the `fontFamily` values in `tailwind.config.ts`.

### Adding Real Content

See `DESIGN_NOTES.md` for a complete list of TODOs and placeholder content that needs to be replaced before launch.

---

## Accessibility

- Semantic HTML throughout (landmarks, heading hierarchy, lists)
- Visible focus states on all interactive elements (`:focus-visible`)
- ARIA labels on icon-only buttons and external links
- `prefers-reduced-motion` respected (all animations disabled at OS level)
- Color contrast: WCAG 2.1 AA target across all text/background combinations

## SEO

- `Metadata` API with `title.template`, `description`, and OpenGraph tags in `layout.tsx`
- Per-page `Metadata` exports on all pages
- JSON-LD `Organization` + `MedicalBusiness` schema in root layout
- Semantic heading hierarchy (single `<h1>` per page)
- `next/image` for all images (lazy load, optimized)

---

## License

Private — all rights reserved, Clinical Research Consultants LLC.
