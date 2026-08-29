import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { SiteShell } from '@/components/layout/SiteShell'
import { AboutPage } from '@/pages/AboutPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogPostPage } from '@/pages/BlogPostPage'
import { ContactPage } from '@/pages/ContactPage'
import { GamesPage } from '@/pages/GamesPage'
import { HomePage } from '@/pages/HomePage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { TermsPage } from '@/pages/TermsPage'

function BlogPostRoute() {
  const { slug } = useParams<{ slug: string }>()
  return <BlogPostPage slug={slug ?? ''} />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostRoute />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
