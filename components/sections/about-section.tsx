"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TerminalLoader } from "@/components/ui/terminal-loader"

export function AboutSection() {
  const interests = [
    "AI Agent Development",
    "Machine Learning", 
    "Vibe Coding",
    "Open Source",
    "Cool Tech Stuff",
    "Innovation"
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-muted-foreground">
                Get to know the person behind the code
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex justify-center mb-12">
              <TerminalLoader 
                text="whoami && echo 'Sycamore'" 
                width={400}
                height={180}
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right" delay={400}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Hello, I'm Sycamore! 👋</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate software engineer who's deeply immersed in the world of AI and agent development. 
                    I love the art of "vibe coding" - that flow state where creativity meets technical precision. 
                    My expertise lies in building intelligent agent applications that push the boundaries of what's possible.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not crafting AI agents, you'll find me exploring cutting-edge technologies, 
                    experimenting with cool new frameworks, or diving deep into the latest ML research. 
                    I believe in building software that's not just functional, but genuinely cool and innovative.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium">What I'm passionate about:</h4>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={600}>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Agent Development</span>
                        <span className="text-primary font-semibold">Expert</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">AI Projects Built</span>
                        <span className="text-primary font-semibold">30+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Cool Tech Explored</span>
                        <span className="text-primary font-semibold">100+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Vibe Sessions</span>
                        <span className="text-primary font-semibold">∞</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-medium mb-4">Currently Exploring</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Multi-Agent Systems</span>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-20"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">LLM Fine-tuning</span>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-18"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Agentic Workflows</span>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full w-22"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>

        
        </div>
      </div>
    </section>
  )
}