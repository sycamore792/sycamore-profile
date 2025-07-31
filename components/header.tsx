"use client"

import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

// Desktop Navigation Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="px-6 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
    >
      {children}
    </Link>
  )
}

// Mobile Navigation Link Component
function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 py-3 px-4 rounded-lg hover:bg-muted/30 hover:translate-x-1 backdrop-blur-sm border border-transparent hover:border-border/20"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex h-16 w-full items-center px-6  mx-auto">
        {/* Mobile Menu Button - Left side */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 bg-muted/30 hover:bg-muted/50 rounded-full transition-colors duration-200 backdrop-blur-sm border border-border/20"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center bg-muted/30 rounded-full px-2 py-1 backdrop-blur-sm border border-border/20 mx-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#projects">Works</NavLink>
          <NavLink href="/blog">Blogs</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
        </nav>
        
        {/* Theme Toggle - Always on the right */}
        <div className="flex items-center ml-auto md:ml-0 bg-muted/30 rounded-full p-1 ">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-2 max-w-6xl mx-auto">
          <div className={`transition-all duration-300 delay-75 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <MobileNavLink href="/" onClick={closeMenu}>Home</MobileNavLink>
          </div>
          <div className={`transition-all duration-300 delay-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <MobileNavLink href="/#about" onClick={closeMenu}>About</MobileNavLink>
          </div>
          <div className={`transition-all duration-300 delay-125 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <MobileNavLink href="/#projects" onClick={closeMenu}>Works</MobileNavLink>
          </div>
          <div className={`transition-all duration-300 delay-150 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <MobileNavLink href="/blog" onClick={closeMenu}>Blogs</MobileNavLink>
          </div>
          <div className={`transition-all duration-300 delay-175 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <MobileNavLink href="/gallery" onClick={closeMenu}>Gallery</MobileNavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}