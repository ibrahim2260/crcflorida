import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
}

export function Container({ children, className, narrow = false }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 sm:px-8 lg:px-10',
        narrow ? 'max-w-4xl' : 'max-w-content',
        className
      )}
    >
      {children}
    </div>
  )
}
