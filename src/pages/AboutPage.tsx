export function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        About us
      </h1>
      <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        <p>
          CharmByte, LLC is an independent video game and software company. We
          design experiences that feel delightful to use—tight systems, clear
          interfaces, and a little personality.
        </p>
        <p>
          Our first release is{' '}
          <a
            href="http://www.pwtycoon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan transition-colors hover:text-accent"
          >
            Pro Wrestling Tycoon
          </a>
          , a management sim for building and booking your own wrestling
          promotion. We’re just getting started.
        </p>
      </div>
    </div>
  )
}
