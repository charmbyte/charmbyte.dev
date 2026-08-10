import { GameSpotlight } from '@/components/games/GameSpotlight'
import { games } from '@/data/games'

export function GamesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Games
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Titles from CharmByte. More coming soon.
      </p>
      <div className="mt-10">
        {games.map((game) => (
          <GameSpotlight key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}
