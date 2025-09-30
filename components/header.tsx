"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, Download } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      toggleMenu()
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/download/LUMEN_installer.exe"
    link.download = "lumen_installer.exe"
    link.click()

    // Show toast notification
    const toast = document.createElement("div")
    toast.className = "toast"
    toast.setAttribute("role", "status")
    toast.setAttribute("aria-live", "polite")
    toast.textContent = "Descarga iniciada - Solo para Windows"

    document.body.appendChild(toast)
    setTimeout(() => toast.classList.add("show"), 100)
    setTimeout(() => {
      toast.classList.remove("show")
      setTimeout(() => document.body.removeChild(toast), 300)
    }, 3000)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-40 shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/logo.png" alt="LUMEN Logo" className="w-10 h-10 rounded-full" />
              <span className="ml-3 text-2xl font-bold bg-[#253361] bg-clip-text text-transparent">
                LUMEN
              </span>
            </div>
          </div>

          <nav className="hidden md:block" role="navigation" aria-label="Navegación principal">
            <div className="flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-foreground hover:text-[#4B79BD] transition-colors duration-200 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gradient-card "
              >
                Inicio
              </a>
              <a
                href="#caracteristicas"
                className="text-foreground hover:text-[#4B79BD] transition-colors duration-200 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gradient-card "
              >
                Características
              </a>
              <a
                href="#video-tutorial"
                className="text-foreground hover:text-[#4B79BD] transition-colors duration-200 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gradient-card "
              >
                Tutorial
              </a>
              <a
                href="#descargar"
                className="text-foreground hover:text-[#4B79BD] transition-colors duration-200 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gradient-card "
              >
                Descargar
              </a>
              <a
                href="#contacto"
                className="text-foreground hover:text-[#4B79BD] transition-colors duration-200 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gradient-card "
              >
                Contacto
              </a>
              <button
                onClick={handleDownload}
                className="ml-6 inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4B79BD] to-[#47B8A1] hover:from-[#253361] hover:to-[#4B79BD] rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus-visible"
                aria-label="Descargar LUMEN para Windows"
              >
                <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                Descargar
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-[#4B79BD] hover:bg-gradient-card focus-visible"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-border">
            <a
              href="#inicio"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-[#4B79BD] hover:bg-gradient-card rounded-md focus-visible"
            >
              Inicio
            </a>
            <a
              href="#caracteristicas"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-[#4B79BD] hover:bg-gradient-card rounded-md focus-visible"
            >
              Características
            </a>
            <a
              href="#video-tutorial"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-[#4B79BD] hover:bg-gradient-card rounded-md focus-visible"
            >
              Tutorial
            </a>
            <a
              href="#descargar"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-[#4B79BD] hover:bg-gradient-card rounded-md focus-visible"
            >
              Descargar
            </a>
            <a
              href="#contacto"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-[#4B79BD] hover:bg-gradient-card rounded-md focus-visible"
            >
              Contacto
            </a>
            <button
              onClick={handleDownload}
              className="w-full mt-2 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white btn-primary rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus-visible"
              aria-label="Descargar LUMEN para Windows"
            >
              <Download className="w-4 h-4 mr-2" aria-hidden="true" />
              Descargar para Windows
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
