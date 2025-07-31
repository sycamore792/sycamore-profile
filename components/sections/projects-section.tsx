"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Multi-Agent Research Assistant",
      description: "An intelligent agent system that conducts comprehensive research using multiple specialized AI agents working in harmony.",
      image: "/api/placeholder/400/240",
      technologies: ["CrewAI", "LangChain", "FastAPI", "Vector DB", "OpenAI", "Streamlit"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Agentic Code Generator",
      description: "AI-powered coding assistant that understands context, generates clean code, and maintains project architecture integrity.",
      image: "/api/placeholder/400/240", 
      technologies: ["Claude API", "AST Parsing", "Next.js", "Python", "Docker", "RAG"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "AI-Powered Document Processor",
      description: "Intelligent document analysis system that extracts insights and generates summaries using advanced NLP techniques.",
      image: "/api/placeholder/400/240",
      technologies: ["LangChain", "Transformers", "FastAPI", "Redis", "Embedding Models"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Vibe Development Environment",
      description: "Custom development setup optimized for flow state coding with AI assistance and seamless tool integration.",
      image: "/api/placeholder/400/240",
      technologies: ["Cursor", "Claude Dev", "Hot Reload", "Custom Scripts", "Workflow Automation"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Multi-Modal Agent System",
      description: "Advanced agent capable of processing text, images, and code to provide comprehensive assistance across domains.",
      image: "/api/placeholder/400/240",
      technologies: ["Vision Models", "Multi-Modal", "Tool Calling", "Memory Systems", "Agent Orchestration"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Cool Tech Playground",
      description: "Experimental sandbox for testing cutting-edge AI technologies and exploring innovative development patterns.",
      image: "/api/placeholder/400/240",
      technologies: ["Experimental APIs", "Beta Features", "Cool Frameworks", "Innovation Lab", "R&D"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of projects that showcase my skills and passion for creating exceptional digital experiences
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 200}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">Project Image</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <ScrollReveal animation="fade-up">
              <h3 className="text-2xl font-bold mb-8 text-center">Other Notable Projects</h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ScrollReveal key={index} animation="scale-up" delay={index * 150}>
                  <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-4 mt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </div>
                  </CardContent>
                </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}