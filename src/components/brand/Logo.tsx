import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'hero'
  /** `full` includes the CharmByte wordmark; `mark` is the icon only. */
  variant?: 'full' | 'mark'
  asLink?: boolean
}

const assets = {
  full: {
    src: '/brand/logo-outline.svg',
    width: 2880,
    height: 2880,
  },
  mark: {
    src: '/brand/logo-no-text.svg',
    width: 999,
    height: 737,
  },
} as const

const sizeClasses = {
  full: {
    sm: 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]',
    md: 'h-20 w-20',
    lg: 'h-28 w-28',
    hero: 'h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96',
  },
  mark: {
    sm: 'h-14 w-auto sm:h-16',
    md: 'h-[4.5rem] w-auto sm:h-20',
    lg: 'h-24 w-auto',
    hero: 'h-40 w-auto sm:h-48 md:h-56',
  },
} as const

export function Logo({
  className,
  size = 'md',
  variant = 'full',
  asLink = true,
}: LogoProps) {
  const asset = assets[variant]
  const image = (
    <img
      src={asset.src}
      alt="CharmByte"
      className={cn(
        'object-contain',
        sizeClasses[variant][size],
        !asLink && className,
      )}
      width={asset.width}
      height={asset.height}
    />
  )

  if (!asLink) {
    return image
  }

  return (
    <Link
      to="/"
      className={cn(
        'inline-flex transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
        className,
      )}
      aria-label="CharmByte home"
    >
      {image}
    </Link>
  )
}
