import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'
import type { Plugin } from 'vite'

export type BlogPostData = {
  slug: string
  title: string
  date: string
  description?: string
  draft: boolean
  html: string
}

const virtualModuleId = 'virtual:blog-posts'
const resolvedVirtualModuleId = '\0' + virtualModuleId

marked.setOptions({
  gfm: true,
  breaks: false,
})

function normalizeDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10)
  }
  return String(value)
}

function loadBlogPosts(contentDir: string): BlogPostData[] {
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const posts: BlogPostData[] = []

  for (const file of fs.readdirSync(contentDir)) {
    if (!file.endsWith('.md') || file === 'README.md') {
      continue
    }

    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8')
    const { data, content } = matter(raw)

    if (!data.title || !data.date) {
      continue
    }

    posts.push({
      slug: file.replace(/\.md$/, ''),
      title: String(data.title),
      date: normalizeDate(data.date),
      description:
        data.description != null ? String(data.description) : undefined,
      draft: Boolean(data.draft),
      html: marked.parse(content.trim()) as string,
    })
  }

  return posts
}

export function blogPostsPlugin(contentDir: string): Plugin {
  const resolvedContentDir = path.resolve(contentDir)
  let isProduction = false

  return {
    name: 'blog-posts',
    configResolved(config) {
      isProduction = config.mode === 'production'
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        let posts = loadBlogPosts(resolvedContentDir)
        if (isProduction) {
          posts = posts.filter((post) => !post.draft)
        }
        return `export const blogPosts = ${JSON.stringify(posts)}`
      }
    },
    configureServer(server) {
      server.watcher.add(resolvedContentDir)
    },
    handleHotUpdate({ file, server }) {
      if (
        file.startsWith(resolvedContentDir) &&
        file.endsWith('.md') &&
        file !== path.join(resolvedContentDir, 'README.md')
      ) {
        const module = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
        if (module) {
          server.moduleGraph.invalidateModule(module)
          return [module]
        }
      }
    },
  }
}
