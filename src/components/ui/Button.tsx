import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan-400 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // CRC Florida custom variants
        primary:
          'bg-brand-cyan-400 text-white font-semibold hover:bg-brand-cyan-300 shadow-[0_0_0_0_rgba(155,77,255,0)] hover:shadow-[0_0_28px_rgba(155,77,255,0.35)] active:bg-brand-cyan-500',
        secondary:
          'bg-brand-teal-700 text-white font-semibold hover:bg-brand-teal-600 active:bg-brand-teal-800',
        ghost:
          'bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/[0.06] active:bg-white/10',
        'outline-light':
          'bg-transparent text-navy-900 border border-navy-900/15 hover:border-navy-900/40 hover:bg-navy-900/[0.04] active:bg-navy-900/[0.08]',
        'outline-dark':
          'bg-transparent text-brand-cyan-400 border border-brand-cyan-400/30 hover:border-brand-cyan-400/60 hover:bg-brand-cyan-400/5 active:bg-brand-cyan-400/10',
        // shadcn standard variants (for compatibility)
        default:
          'bg-brand-cyan-400 text-white font-semibold hover:bg-brand-cyan-300',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline:
          'border border-slate-200 bg-white hover:bg-slate-50 hover:text-navy-900 text-navy-900',
        link: 'text-brand-teal-700 underline-offset-4 hover:underline rounded-none',
      },
      size: {
        sm: 'h-9 px-4 text-sm gap-1.5',
        default: 'h-11 px-6 text-sm gap-2',
        md: 'h-11 px-6 text-sm gap-2',
        lg: 'h-12 px-8 text-base gap-2',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
// Legacy type exports for backwards compatibility
export type { ButtonProps as ButtonVariantProps }
