import { ArrowUpRight } from 'lucide-react'
import type { Game } from '@/data/games'
import { cn } from '@/lib/utils'

type GameSpotlightProps = {
  game: Game
  className?: string
}

export function GameSpotlight({ game, className }: GameSpotlightProps) {
  return (
    <a
      href={game.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex flex-col gap-5 border-y border-line py-8 transition-colors duration-300 hover:border-cyan/40 sm:flex-row sm:items-center sm:gap-8 sm:py-10',
        className,
      )}
    >
      <img
        src={game.logo}
        alt={`${game.name} logo`}
        className="h-28 w-28 shrink-0 object-contain sm:h-32 sm:w-32"
        width={2048}
        height={2048}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
            {game.name}
          </h3>
          <ArrowUpRight
            className="mt-1 size-5 shrink-0 text-muted transition-colors group-hover:text-cyan"
            aria-hidden
          />
        </div>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
          {game.description}
        </p>
        <p className="mt-3 text-sm font-semibold text-brand-gradient">
          Visit {new URL(game.href).hostname.replace(/^www\./, '')}
        </p>
      </div>
    </a>
  )
}
