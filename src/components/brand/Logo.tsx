import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'hero'
  asLink?: boolean
  mark?: boolean
  wordmark?: boolean
}

const asset = {
  src: `${import.meta.env.BASE_URL}brand/logo.svg`,
  width: 959,
  height: 708,
} as const

const sizeClasses = {
  sm: 'h-10 w-auto sm:h-12',
  md: 'h-[4.5rem] w-auto sm:h-20',
  lg: 'h-24 w-auto',
  hero: 'h-56 w-auto sm:h-64 md:h-80',
} as const

const wordmarkClasses = {
  sm: 'text-xl sm:text-2xl',
  md: 'text-lg',
  lg: 'text-2xl',
  hero: 'mt-3 text-4xl sm:mt-4 sm:text-5xl md:text-6xl',
} as const

function Wordmark({ size }: { size: NonNullable<LogoProps['size']> }) {
  return (
    <span
      className={cn(
        'font-display font-extrabold tracking-tight',
        wordmarkClasses[size],
      )}
    >
      <span className="text-accent">Charm</span>
      <span className="text-cyan">Byte</span>
    </span>
  )
}

export function Logo({
  className,
  size = 'md',
  asLink = true,
  mark = true,
  wordmark = false,
}: LogoProps) {
  const content = (
    <span className={cn('inline-flex flex-col items-center', !asLink && className)}>
      {mark ? (
        <img
          src={asset.src}
          alt={wordmark ? '' : 'CharmByte'}
          className={cn('object-contain', sizeClasses[size])}
          width={asset.width}
          height={asset.height}
        />
      ) : null}
      {wordmark ? <Wordmark size={size} /> : null}
    </span>
  )

  if (!asLink) {
    return content
  }

  return (
    <Link
      to="/"
      className={cn(
        'inline-flex transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
        className,
      )}
      aria-label={wordmark ? undefined : 'CharmByte home'}
    >
      {content}
    </Link>
  )
}
