"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Filter, MapPin } from "lucide-react"
import Image from "next/image"

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Mountain landscape at golden hour",
    category: "Nature",
    location: "Yunnan, China"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&h=600&fit=crop",
    alt: "Urban street photography",
    category: "Street",
    location: "Shanghai, China"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop",
    alt: "Modern architecture",
    category: "Architecture",
    location: "Shanghai, China"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    alt: "City skyline at night",
    category: "Urban",
    location: "Shanghai, China"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    alt: "Sunset over water",
    category: "Nature",
    location: "Hangzhou, China"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    alt: "Serene lake view",
    category: "Nature",
    location: "West Lake, Hangzhou"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    alt: "Traditional architecture",
    category: "Architecture",
    location: "Beijing, China"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
    alt: "Street life",
    category: "Street",
    location: "Shanghai, China"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&h=600&fit=crop",
    alt: "Urban exploration",
    category: "Urban",
    location: "Shanghai, China"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop",
    alt: "Forest path",
    category: "Nature",
    location: "Zhangjiajie, China"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    alt: "Glass and steel",
    category: "Architecture",
    location: "Shanghai, China"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=600&fit=crop",
    alt: "Morning commute",
    category: "Street",
    location: "Shanghai Metro"
  }
]

const categories = ["All", "Nature", "Street", "Architecture", "Urban"]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null)

  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory)

  return (
    <section className="bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mr-4">
                <Filter className="w-4 h-4" />
                <span>Filter by:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* Photos Grid */}
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <ScrollReveal key={photo.id} animation="fade-up" delay={index * 50}>
                <div 
                  className="group relative overflow-hidden rounded-xl bg-muted/50 aspect-[4/3] hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-white border-none">
                      {photo.category}
                    </Badge>
                  </div>
                  
                  {/* Location */}
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-white/80 flex-shrink-0" />
                      <p className="text-sm font-medium truncate">{photo.location}</p>
                    </div>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Load More Button */}
          <ScrollReveal animation="fade-up" delay={400}>
            <div className="py-4  text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Photos
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Photo Modal (Simple implementation) */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <div className="absolute bottom-10 left-6 text-white">
              <h3 className="text-lg font-semibold mb-2">{selectedPhoto.alt}</h3>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/60" />
                <p className="text-sm text-white/80">{selectedPhoto.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}