"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Code, Database, Paintbrush, Cloud, Smartphone, Zap } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI Agent Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["LangChain", "CrewAI", "AutoGen", "Agent Frameworks", "RAG Systems", "Multi-Agent"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning", 
      icon: <Database className="w-6 h-6" />,
      skills: ["Python", "PyTorch", "TensorFlow", "Transformers", "Fine-tuning", "MLOps"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cool Tech Stack",
      icon: <Paintbrush className="w-6 h-6" />,
      skills: ["Next.js", "FastAPI", "Vector DBs", "OpenAI API", "Anthropic", "Streamlit"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "Serverless", "Vector Search", "Redis"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Agentic Systems",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Tool Calling", "Function Calling", "Memory Systems", "Planning", "Reasoning", "Execution"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Vibe Tools",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Cursor IDE", "GitHub Copilot", "Claude Dev", "Hot Reload", "Live Coding", "Flow State"],
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and areas of expertise
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex items-start">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={600}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-full px-6 py-3">
                <Zap className="w-4 h-4" />
                Always learning and exploring new technologies
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}