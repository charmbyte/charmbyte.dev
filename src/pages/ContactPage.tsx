import { Button } from '@/components/ui/button'

export function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Questions, press, or partnership notes—reach us by email. We don’t use a
        contact form on this site.
      </p>
      <div className="mt-10">
        <Button asChild size="lg">
          <a href="mailto:me@charmbyte.dev">Contact Us</a>
        </Button>
      </div>
    </div>
  )
}
