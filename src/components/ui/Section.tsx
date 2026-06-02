import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  'aria-labelledby'?: string
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-24 lg:py-32', className)}
      {...props}
    >
      {children}
    </section>
  )
}
