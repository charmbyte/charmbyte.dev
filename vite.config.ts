import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { blogPostsPlugin } from './vite-plugin-blog.ts'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    blogPostsPlugin(path.join(rootDir, 'content/blog')),
  ],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
    },
  },
})
