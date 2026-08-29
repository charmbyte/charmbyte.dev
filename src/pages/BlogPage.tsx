import { Link } from 'react-router-dom'
import { formatPostDate, getPublishedPosts } from '@/lib/blog'

export function BlogPage() {
  const posts = getPublishedPosts()

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
        Notes, updates, and behind-the-scenes writing from CharmByte.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 font-display text-2xl font-bold text-ink">
          No posts yet.
        </p>
      ) : (
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block py-6 transition-colors"
              >
                <p className="text-sm font-medium text-muted">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-cyan">
                  {post.title}
                </h2>
                {post.description ? (
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
                    {post.description}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
