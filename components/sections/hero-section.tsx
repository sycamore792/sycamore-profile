"use client"

import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowDown, Github, Linkedin, Mail, Code2 } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  // 用来存储定时器ID，以便在需要时清除
  const timersRef = React.useRef<NodeJS.Timeout[]>([])

  const clearAllTimers = () => {
    timersRef.current.forEach(timer => clearTimeout(timer))
    timersRef.current = []
  }

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    // 清除之前的定时器
    clearAllTimers()
    
    e.currentTarget.style.transform = 'rotateX(15deg) rotateY(15deg)'
    
    // 获取所有社交按钮并依次弹起
    const socialButtons = e.currentTarget.querySelectorAll('.social-button') as NodeListOf<HTMLElement>
    socialButtons.forEach((button, index) => {
      const timer = setTimeout(() => {
        button.style.transform = 'translate3d(0, -10px, 50px) scale(1.1)'
        button.style.boxShadow = 'rgba(5, 71, 17, 0.3) -5px 25px 15px 0px'
      }, (index + 1) * 150) // 依次延迟
      timersRef.current.push(timer)
    })
    
    // 获取所有圆圈并依次弹起
    const logoCircles = e.currentTarget.querySelectorAll('.logo-circle') as NodeListOf<HTMLElement>
    logoCircles.forEach((circle, index) => {
      const timer = setTimeout(() => {
        const currentZ = parseInt(circle.dataset.originalZ || '20')
        circle.style.transform = `translate3d(0, -8px, ${currentZ + 40}px) scale(1.05)`
        circle.style.filter = 'brightness(1.2)'
        circle.style.boxShadow = 'rgba(5, 71, 17, 0.2) 0px 15px 25px 0px'
      }, index * 100) // 依次延迟，比社交按钮更快
      timersRef.current.push(timer)
    })
  }

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // 清除所有待执行的定时器
    clearAllTimers()
    
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)'
    
    // 立即重置所有社交按钮
    const socialButtons = e.currentTarget.querySelectorAll('.social-button') as NodeListOf<HTMLElement>
    socialButtons.forEach((button) => {
      button.style.transform = 'translate3d(0, 0, 0) scale(1)'
      button.style.boxShadow = ''
    })
    
    // 立即重置所有圆圈
    const logoCircles = e.currentTarget.querySelectorAll('.logo-circle') as NodeListOf<HTMLElement>
    logoCircles.forEach((circle) => {
      const originalZ = circle.dataset.originalZ || '20'
      circle.style.transform = `translate3d(0, 0, ${originalZ}px) scale(1)`
      circle.style.filter = 'brightness(1)'
      circle.style.boxShadow = ''
    })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 3D Card Container */}
          <div className="flex justify-center" style={{ perspective: '1000px' }}>
            <div className="group w-full max-w-2xl">
              <div 
                className="hero-card relative h-auto rounded-[50px] bg-gradient-to-br from-primary via-primary/90 to-primary/60 transition-all duration-500 ease-in-out shadow-2xl hover:shadow-primary/20"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(0deg) rotateY(0deg)'
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                
                {/* Glass Layer */}
                <div 
                  className="absolute inset-2 rounded-[45px] bg-gradient-to-b from-primary-foreground/35 to-primary-foreground/10 backdrop-blur-sm border-l border-b border-primary-foreground/20 transition-all duration-500 ease-in-out"
                  style={{ transform: 'translateZ(25px)' }}
                />
                
                {/* Content Layer */}
                <div 
                  className="relative p-12 md:p-16 text-center"
                  style={{ transform: 'translateZ(26px)' }}
                >
                  {/* Logo Circles */}
                  <div className="absolute top-0 right-0" style={{ transformStyle: 'preserve-3d' }}>
                    <div 
                      className="logo-circle absolute top-2 right-2 w-40 h-40 rounded-full bg-primary/20 backdrop-blur-sm transition-all duration-500 ease-out"
                      style={{ transform: 'translate3d(0, 0, 20px) scale(1)', transformStyle: 'preserve-3d' }}
                      data-original-z="20"
                    />
                    <div 
                      className="logo-circle absolute top-4 right-4 w-32 h-32 rounded-full bg-primary/30 backdrop-blur-sm transition-all duration-700 ease-out"
                      style={{ transform: 'translate3d(0, 0, 40px) scale(1)', transformStyle: 'preserve-3d' }}
                      data-original-z="40"
                    />
                    <div 
                      className="logo-circle absolute top-6 right-6 w-24 h-24 rounded-full bg-primary/40 backdrop-blur-sm transition-all duration-700 ease-out"
                      style={{ transform: 'translate3d(0, 0, 60px) scale(1)', transformStyle: 'preserve-3d' }}
                      data-original-z="60"
                    />
                    <div 
                      className="logo-circle absolute top-8 right-8 w-16 h-16 rounded-full bg-primary/50 backdrop-blur-sm transition-all duration-700 ease-out flex items-center justify-center"
                      style={{ transform: 'translate3d(0, 0, 80px) scale(1)', transformStyle: 'preserve-3d' }}
                      data-original-z="80"
                    >
                      <Code2 className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Avatar */}
                  <div className="flex justify-center mb-8">
                    <Avatar className="w-24 h-24 md:w-32 md:h-32  transition-all duration-500 group-hover:shadow-lg">
                      <AvatarImage src="/avatar.jpg" alt="Sycamore" />
                      <AvatarFallback className="bg-primary-foreground/20 text-primary-foreground text-2xl md:text-3xl">
                        🤖
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-4 text-primary-foreground">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                      Hi, I'm Sycamore
                    </h1>
                    <p className="text-lg md:text-xl font-medium opacity-90">
                      Software Engineer & AI Agent Developer
                    </p>
                    <p className="text-sm md:text-base opacity-75 max-w-lg mx-auto leading-relaxed">
                      Passionate about AI, vibe coding, and all things cool. Deep expertise in agent application development.
                    </p>
                  </div>
                  
                  {/* Social Buttons */}
                  <div 
                    className="flex items-center justify-center gap-4 mt-8"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <a
                      href="https://github.com/sycamore792"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg group/btn"
                      style={{ 
                        transform: 'translate3d(0, 0, 0) scale(1)',
                        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                        transformStyle: 'preserve-3d'
                      }}
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-slate-600 dark:text-slate-700 group-hover/btn:text-slate-800 dark:group-hover/btn:text-slate-900" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-button w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg group/btn"
                      style={{ 
                        transform: 'translate3d(0, 0, 0) scale(1)',
                        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                        transformStyle: 'preserve-3d'
                      }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-slate-600 dark:text-slate-700 group-hover/btn:text-slate-800 dark:group-hover/btn:text-slate-900" />
                    </a>
                    <a
                      href="mailto:sycamore792@gmail.com"
                      className="social-button w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg group/btn"
                      style={{ 
                        transform: 'translate3d(0, 0, 0) scale(1)',
                        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                        transformStyle: 'preserve-3d'
                      }}
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 text-slate-600 dark:text-slate-700 group-hover/btn:text-slate-800 dark:group-hover/btn:text-slate-900" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get to know me
            </button>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Let's work together
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </button>
    </section>
  )
}