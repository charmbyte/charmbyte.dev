import { blogPosts } from 'virtual:blog-posts'

export type BlogPost = {
  slug: string
  title: string
  date: string
  description?: string
  draft: boolean
  html: string
}

function isPublished(post: BlogPost): boolean {
  if (import.meta.env.PROD && post.draft) {
    return false
  }
  return true
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts
    .filter(isPublished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = blogPosts.find((entry) => entry.slug === slug)
  if (!post || !isPublished(post)) {
    return null
  }
  return post
}

export function formatPostDate(date: string): string {
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) {
    return date
  }
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(parsed)
}
