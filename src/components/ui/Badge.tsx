import { cn } from '@/lib/utils'

type BadgeVariant = 'teal' | 'cyan' | 'navy' | 'gold' | 'neutral'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  teal: 'bg-brand-teal-50 text-brand-teal-800 border-brand-teal-200',
  cyan: 'bg-brand-cyan-100 text-brand-teal-900 border-brand-cyan-200',
  navy: 'bg-navy-900 text-white border-navy-800',
  gold: 'bg-brand-gold-100 text-brand-gold-700 border-brand-gold-200',
  neutral: 'bg-slate-100 text-slate-700 border-slate-200',
}

export function Badge({ children, variant = 'teal', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
