import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto">
      <Separator />
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          © {year} CharmByte, LLC. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm font-semibold" aria-label="Legal">
          <Link
            to="/privacy"
            className="text-muted transition-colors hover:text-ink"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-muted transition-colors hover:text-ink"
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  )
}
