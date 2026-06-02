# Design Notes — CRC Florida Rebuild

## Design Rationale

### Brand Direction

CRC Florida sits at the intersection of scientific authority and boutique warmth. The design decisions were made to signal three things simultaneously:

1. **Regulatory and scientific credibility** — dark navy foundation, editorial serif headlines, sparse use of color, fine detail work
2. **Senior expertise** — not a startup; typographic restraint, generous whitespace, no trendy gimmicks
3. **Human, approachable partnership** — the teal/cyan palette brings warmth, the copy is direct and un-jargony, the process section reduces buyer uncertainty

The reference points: IQVIA and Parexel for authority, McKinsey for restraint, a boutique advisory firm for approachability.

### Color System

| Role | Token | Hex |
|---|---|---|
| Dark backgrounds | `navy-900` | `#0B1D3A` |
| Deepest backgrounds | `navy-950` | `#060D1A` |
| Primary brand | `brand-teal-700` | `#0A6B7C` |
| Brand mid | `brand-teal-500` | `#0F96AD` |
| CTA / interactive accent | `brand-cyan-400` | `#22C4D6` |
| Warm secondary accent | `brand-gold-500` | `#C4963B` |
| Page background | `white` + `slate-50` alternating | — |

The cyan (`#22C4D6`) is the conversion color — used exclusively on primary CTAs and interactive highlights to create strong visual hierarchy and clear affordance.

### Typography

- **DM Serif Display** — used for all `<h1>`, `<h2>`, `<h3>` tags. Authoritative without feeling dated. The slightly condensed proportions at large sizes give an editorial quality.
- **Inter** — all body copy, UI labels, captions. Maximum legibility at small sizes.
- Headlines use tight `letter-spacing: -0.02em` at display sizes for a polished, premium feel.

### Motion

All scroll-triggered animations use Framer Motion's `useInView` with `once: true`. Entry animations are `fadeInUp` (opacity 0→1, y 20→0) at 0.6s with a premium cubic bezier `[0.22, 0.03, 0.26, 1]` — fast onset, smooth finish. Grid items stagger at 80ms intervals.

Stat count-up uses `requestAnimationFrame` with an ease-out cubic function for a natural deceleration. All animations are disabled when `prefers-reduced-motion: reduce` is set at the OS level (handled in `globals.css`).

---

## TODO Checklist (Required Before Launch)

### 🔴 Critical — Site Will Not Work Without These

- [ ] **Contact form email delivery** — wire up `src/app/api/contact/route.ts`  
  Recommended: [Resend](https://resend.com) — `npm install resend`, add `RESEND_API_KEY` env var.  
  Alternative: GoHighLevel (GHL) webhook at `process.env.GHL_WEBHOOK_URL`.  
  See the inline comments in the route file for code snippets.

- [ ] **Real email address** — replace `info@crcflorida.com` placeholder in `Footer.tsx` (line ~85) and `README.md` with the actual contact email.

- [ ] **Domain/URL** — replace `https://crcflorida.com` in `layout.tsx` (`metadataBase`) and the JSON-LD schema with the real production domain.

### 🟡 Important — SEO and Trust Impact

- [ ] **OG image** — create a 1200×630px `public/og-image.png` for Open Graph previews (LinkedIn, Twitter/X shares). Should show the CRC Florida brand mark, tagline, and a clean dark navy background.

- [ ] **Real team/leadership content** — `src/app/about/page.tsx` has a clearly marked TODO in the Leadership section. Replace placeholder text with:
  - Individual team member names, credentials (MD, PhD, etc.)
  - Headshots (professional photography — see photography TODO below)
  - Brief bios (3–5 sentences each)
  - LinkedIn profile links

- [ ] **Publications** — `src/app/publications/page.tsx` uses illustrative placeholder content.  
  Replace with actual peer-reviewed publications from the team's PubMed/Google Scholar profiles.  
  Required fields: title, journal name, year, article type, abstract excerpt, DOI link.

### 🟢 Enhancement — Polish and Conversion

- [ ] **Photography** — replace all placeholder/abstract SVG visualizations with real photography:
  - Hero right column: team member or lab/office photography
  - About Teaser right column: team or facility photography
  - Suggested style: clean, professional, high-contrast on dark or white backgrounds
  - Do NOT use generic stock photos of doctors pointing at screens

- [ ] **Favicon** — create `public/favicon.ico` and `public/apple-touch-icon.png`.  
  Use the circular "CRC" molecule icon from the Nav component as the base mark.

- [ ] **Sitemap** — add `src/app/sitemap.ts` exporting a Next.js sitemap for Google Search Console.

- [ ] **Analytics** — install Plausible, PostHog, or Google Analytics 4.  
  For GA4: `npm install @next/third-parties`, then use `<GoogleAnalytics />` in `layout.tsx`.

- [ ] **Book Online / Calendly** — the nav and multiple CTAs point to `/contact`. Consider adding a Calendly embed or similar scheduling widget to the Contact page for higher-intent visitors who prefer direct scheduling.

- [ ] **LinkedIn follow button** — consider adding a LinkedIn Follow button widget to the About or Contact sidebar for social proof.

- [ ] **Real contact details** — add phone number and/or physical address (if applicable) to the Footer and Contact page sidebar.

### 🔵 Optional / Nice-to-Have

- [ ] **Testimonials / case studies** — a "Client Results" section between StatsSection and TherapeuticExpertise would significantly increase conversion. Add de-identified case studies (with client permission) or quotes.

- [ ] **Phase I–IV visual** (services page) — a timeline/process infographic showing the clinical development arc from FIH → NDA/BLA would strengthen the Services page visually.

- [ ] **Search** — if the Publications list grows, add client-side filtering by year, type, or therapeutic area.

- [ ] **Cookie consent banner** — required for EU visitors if using any analytics.

---

## File Locations Quick Reference

| What | File |
|---|---|
| Color tokens | `tailwind.config.ts` → `theme.extend.colors` |
| Font configuration | `src/app/layout.tsx` (import) + `tailwind.config.ts` (fontFamily) |
| Global CSS / utilities | `src/app/globals.css` |
| Animation variants | `src/lib/animations.ts` |
| Nav links | `src/components/layout/Nav.tsx` → `navLinks` array |
| Footer links | `src/components/layout/Footer.tsx` → `serviceLinks`, `companyLinks` |
| Stats numbers | `src/components/sections/StatsSection.tsx` → `stats` array |
| Therapeutic areas | `src/components/sections/TherapeuticExpertise.tsx` + `src/app/expertise/page.tsx` |
| Contact API | `src/app/api/contact/route.ts` |
| JSON-LD schema | `src/app/layout.tsx` → `jsonLd` const |
