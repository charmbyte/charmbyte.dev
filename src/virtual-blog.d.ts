declare module 'virtual:blog-posts' {
  export type BlogPostData = {
    slug: string
    title: string
    date: string
    description?: string
    draft: boolean
    html: string
  }

  export const blogPosts: BlogPostData[]
}
