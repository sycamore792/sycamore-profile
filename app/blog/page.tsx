import { BlogHero } from "@/components/blog/blog-hero"
import { BlogList } from "@/components/blog/blog-list"
import { getBlogPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog - Sycamore",
  description: "Thoughts on AI, agent development, and cool tech stuff",
}

export default function BlogPage() {
  const posts = getBlogPosts()
  
  return (
    <div className="min-h-screen">
      <BlogHero />
      <BlogList posts={posts} />
    </div>
  )
}