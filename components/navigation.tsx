"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun, Download } from "lucide-react"

interface NavigationProps {
  isDark: boolean
  onToggleDarkMode: () => void
}

export default function Navigation({ isDark, onToggleDarkMode }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">CK</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://bloblabchhotu.blob.core.windows.net/document/chhotu_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
          >
            <Download size={16} />
            Resume
          </a>
          <button onClick={onToggleDarkMode} className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={onToggleDarkMode} className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://bloblabchhotu.blob.core.windows.net/document/chhotu_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium hover:text-primary transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
