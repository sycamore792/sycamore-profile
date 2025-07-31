import { Metadata } from "next"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery - Sycamore",
  description: "Life through my lens - Photography collection from Shanghai and beyond",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <GalleryHero />
      <GalleryGrid />
    </div>
  )
}