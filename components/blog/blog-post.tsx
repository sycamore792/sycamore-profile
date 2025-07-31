"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { BlogPost as BlogPostType } from "@/lib/blog"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-20 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Blog
            </Link>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <header className="mb-12 pb-8 border-b border-border/50">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                {post.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground/90 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-background/50 backdrop-blur-sm border-border/60 hover:bg-primary/10 transition-colors duration-200">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="prose prose-lg max-w-none dark:prose-invert 
              prose-headings:scroll-mt-20 
              prose-headings:font-semibold 
              prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
              prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:border-b prose-h2:border-border/30 prose-h2:pb-2
              prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
              prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
              prose-p:text-base prose-p:leading-relaxed prose-p:mb-6 prose-p:text-foreground/90
              prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline hover:prose-a:underline-offset-4
              prose-strong:text-foreground prose-strong:font-semibold
              prose-em:text-foreground/80
              prose-code:bg-muted/80 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono prose-code:border prose-code:border-border/40
              prose-pre:bg-muted/90 prose-pre:border prose-pre:border-border/40 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
              prose-ul:space-y-2 prose-ol:space-y-2
              prose-li:text-foreground/90 prose-li:leading-relaxed
              prose-table:border-collapse prose-table:border prose-table:border-border/40 prose-table:rounded-lg prose-table:overflow-hidden
              prose-th:bg-muted/80 prose-th:border prose-th:border-border/40 prose-th:px-4 prose-th:py-3 prose-th:font-semibold
              prose-td:border prose-td:border-border/40 prose-td:px-4 prose-td:py-3
              prose-hr:border-border/50 prose-hr:my-8
              selection:bg-primary/20">
              
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-6 rounded-lg border border-border/40">
                      <table className="min-w-full">{children}</table>
                    </div>
                  ),
                  code: ({ className, children, ...props }: any) => {
                    const isInline = !className?.includes('language-')
                    if (isInline) {
                      return (
                        <code className="bg-muted/80 px-2 py-1 rounded-md text-sm font-mono border border-border/40 text-foreground" {...props}>
                          {children}
                        </code>
                      )
                    }
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  },
                  pre: ({ children, ...props }) => (
                    <pre className="bg-muted/90 border border-border/40 rounded-lg p-4 overflow-x-auto my-6" {...props}>
                      {children}
                    </pre>
                  ),
                  blockquote: ({ children, ...props }) => (
                    <blockquote className="border-l-4 border-primary/30 pl-6 italic bg-muted/30 py-4 rounded-r-lg my-6" {...props}>
                      {children}
                    </blockquote>
                  ),
                  h2: ({ children, ...props }) => {
                    const id = typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''
                    return (
                      <h2 className="scroll-mt-20 text-3xl font-semibold mb-6 mt-10 border-b border-border/30 pb-2" id={id} {...props}>
                        {children}
                      </h2>
                    )
                  },
                  h3: ({ children, ...props }) => {
                    const id = typeof children === 'string' ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-') : ''
                    return (
                      <h3 className="scroll-mt-20 text-2xl font-semibold mb-4 mt-8" id={id} {...props}>
                        {children}
                      </h3>
                    )
                  }
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <footer className="mt-16 pt-8 border-t border-border/50 bg-muted/20 rounded-lg p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  Back to all posts
                </Link>
                
                <div className="text-sm text-muted-foreground">
                  Thanks for reading! 🚀
                </div>
              </div>
            </footer>
          </ScrollReveal>
        </div>
      </div>
    </article>
  )
}