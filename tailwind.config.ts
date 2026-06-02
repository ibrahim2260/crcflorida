import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark purple backgrounds (replaces navy)
        navy: {
          950: '#08061A',
          900: '#0F0B26',
          800: '#160E36',
          700: '#1E1446',
          600: '#281A58',
          500: '#33206A',
          400: '#4A3488',
          300: '#6D5CB0',
          200: '#A098D0',
          100: '#D0CAF0',
          50: '#EDE9F8',
        },
        // Brand mid-purple (replaces brand-teal)
        'brand-teal': {
          900: '#1A0C50',
          800: '#261570',
          700: '#3B22A0',
          600: '#4E2EBD',
          500: '#6040CC',
          400: '#7558DC',
          300: '#9478E8',
          200: '#BFB2F4',
          100: '#E2DDFB',
          50: '#F3F1FF',
        },
        // Bright violet — CTA & highlights (replaces brand-cyan)
        'brand-cyan': {
          500: '#7B2FBE',
          400: '#9B4DFF',
          300: '#B877FF',
          200: '#D4A8FF',
          100: '#EDD6FF',
        },
        // Warm gold — complementary accent (purple + gold is classic)
        'brand-gold': {
          700: '#7D5714',
          600: '#A87820',
          500: '#C4963B',
          400: '#D4A94E',
          300: '#E2BF70',
          200: '#EDD49A',
          100: '#F6E9C8',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        nav: '0 1px 0 rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dot-grid-white': 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        'dot-grid-purple': 'radial-gradient(circle, rgba(155,77,255,0.14) 1px, transparent 1px)',
        'dot-grid-light': 'radial-gradient(circle, rgba(100,116,139,0.12) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-32': '32px 32px',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        moveHorizontal: {
          '0%': { transform: 'translateX(-50%) translateY(-10%)' },
          '50%': { transform: 'translateX(50%) translateY(10%)' },
          '100%': { transform: 'translateX(-50%) translateY(-10%)' },
        },
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease forwards',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.22, 0.03, 0.26, 1) forwards',
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 0.03, 0.26, 1)',
      },
    },
  },
  plugins: [],
}

export default config
