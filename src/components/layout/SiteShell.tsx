import { Outlet } from 'react-router-dom'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'

export function SiteShell() {
  return (
    <div className="flex min-h-dvh flex-col">
      <GoogleAnalytics />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
