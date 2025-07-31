"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Camera, MapPin } from "lucide-react"

export function GalleryHero() {
  return (
    <section className="relative py-16">
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
                <Camera className="w-4 h-4" />
                Photography Collection
              </div>
            
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Life through my lens - A collection of moments captured in Shanghai and during my travels
              </p>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Shanghai & Beyond</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span>Street • Nature • Architecture</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}