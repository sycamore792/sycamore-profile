import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  featured?: boolean
}

const blogsDirectory = path.join(process.cwd(), 'blogs')

export function getBlogPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(blogsDirectory)
    const posts = fileNames
      .filter(name => name.endsWith('.mdx'))
      .map(name => {
        const slug = name.replace(/\.mdx$/, '')
        const fullPath = path.join(blogsDirectory, name)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title,
          excerpt: data.excerpt,
          content,
          date: data.date,
          readTime: data.readTime,
          tags: data.tags || [],
          featured: data.featured || false,
        } as BlogPost
      })

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      date: data.date,
      readTime: data.readTime,
      tags: data.tags || [],
      featured: data.featured || false,
    } as BlogPost
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getFeaturedPosts(): BlogPost[] {
  return getBlogPosts().filter(post => post.featured).slice(0, 3)
}