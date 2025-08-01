import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog/blog-post"
import { getBlogPost } from "@/lib/blog"

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - Sycamore`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <BlogPost post={post} />
    </div>
  )
}