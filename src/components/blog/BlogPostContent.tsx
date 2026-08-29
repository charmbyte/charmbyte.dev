type BlogPostContentProps = {
  html: string
}

export function BlogPostContent({ html }: BlogPostContentProps) {
  return (
    <div
      className="blog-content max-w-2xl space-y-5 text-base leading-relaxed text-muted [&_a]:font-semibold [&_a]:text-cyan [&_a]:transition-colors [&_a]:hover:text-accent [&_blockquote]:border-l-2 [&_blockquote]:border-line [&_blockquote]:pl-4 [&_blockquote]:text-muted [&_code]:rounded [&_code]:bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-ink [&_em]:text-ink [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_hr]:border-line [&_li]:text-muted [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:text-muted [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-line [&_pre]:bg-secondary [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
