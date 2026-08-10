import { Link } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { GameSpotlight } from '@/components/games/GameSpotlight'
import { Button } from '@/components/ui/button'
import { games } from '@/data/games'

export function HomePage() {
  const featured = games[0]

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(142_87_225/0.18),transparent_55%),radial-gradient(ellipse_at_80%_40%,rgb(50_178_252/0.14),transparent_50%)]" />
        <div className="relative mx-auto flex min-h-[calc(100dvh-5rem)] max-w-5xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20">
          <div className="animate-fade-up flex justify-center">
            <Logo size="hero" asLink={false} />
          </div>
          <h1 className="animate-fade-up-delay mt-8 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Games with{' '}
            <span className="text-brand-gradient">charm</span>.
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-lg text-lg leading-relaxed text-muted">
            CharmByte builds polished interactive gaming experiences—starting
            with Pro Wrestling Tycoon.
          </p>
          <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/games">Our Games</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
          <p className="font-display text-sm font-bold tracking-wide text-muted uppercase">
            Featured
          </p>
          <GameSpotlight game={featured} className="mt-2" />
        </section>
      ) : null}
    </div>
  )
}
