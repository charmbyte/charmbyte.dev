import { Link } from 'react-router-dom'
import { BlogPostContent } from '@/components/blog/BlogPostContent'
import { formatPostDate, getPostBySlug } from '@/lib/blog'

type BlogPostPageProps = {
  slug: string
}

export function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Post not found
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          We couldn&apos;t find a blog post at this address. It may have been
          moved, or the link might be out of date.
        </p>
        <p className="mt-8">
          <Link
            to="/blog"
            className="font-semibold text-cyan transition-colors hover:text-accent"
          >
            Back to the blog
          </Link>
        </p>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <header className="max-w-2xl">
        <p className="text-sm font-medium text-muted">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {post.title}
        </h1>
        {post.description ? (
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {post.description}
          </p>
        ) : null}
      </header>
      <div className="mt-10">
        <BlogPostContent html={post.html} />
      </div>
      <p className="mt-12">
        <Link
          to="/blog"
          className="font-semibold text-cyan transition-colors hover:text-accent"
        >
          ← All posts
        </Link>
      </p>
    </article>
  )
}
