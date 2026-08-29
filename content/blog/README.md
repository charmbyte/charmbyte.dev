# Blog posts

Add a new `.md` file in this folder to publish a post. The filename becomes the URL slug (`my-post.md` → `/blog/my-post`).

## Frontmatter

Each post must start with YAML frontmatter:

```md
---
title: Your post title
date: 2026-08-29
description: Optional short excerpt shown on the blog index.
draft: false
---

Your markdown body starts here.
```

### Fields

| Field | Required | Description |
| --- | --- | --- |
| `title` | yes | Post title |
| `date` | yes | Publication date (`YYYY-MM-DD`) |
| `description` | no | Short excerpt for the blog list |
| `draft` | no | If `true`, hidden from the list and unreachable in production builds |

## Publishing

1. Add or edit a markdown file here.
2. Commit and push — the site build picks up posts at build time.

Draft posts are visible in local dev (`pnpm dev`) so you can preview them. They are excluded from production builds (`pnpm build`).
