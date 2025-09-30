"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function Footer() {
  const [fontSize, setFontSize] = useState("normal")

  const increaseFontSize = () => {
    setFontSize("large")
    document.documentElement.classList.remove("text-size-normal")
    document.documentElement.classList.add("text-size-large")
  }

  const decreaseFontSize = () => {
    setFontSize("normal")
    document.documentElement.classList.remove("text-size-large")
    document.documentElement.classList.add("text-size-normal")
  }

  return (
    <footer className="bg-[#253361] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="LUMEN Logo" className="w-8 h-8 rounded-full" />
              <span className="ml-2 text-xl font-bold text-white">LUMEN</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Language Understanding through Motion and Expression Networks. Tecnología de traducción de señas a voz
              diseñada para crear un mundo más inclusivo.
            </p>
            <p className="text-sm text-white/60">
              Orientado especialmente a personas con dificultades del habla, priorizando la accesibilidad
              visual y la comunicación clara.
            </p>
          </div>

          {/* Accessibility Controls */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Accesibilidad</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-white/80 mb-2">Tamaño de texto:</p>
                <div className="flex gap-2">
                  <button
                    onClick={decreaseFontSize}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                    aria-label="Disminuir tamaño de texto"
                  >
                    <Minus className="w-4 h-4 text-white" aria-hidden="true" />
                  </button>
                  <button
                    onClick={increaseFontSize}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                    aria-label="Aumentar tamaño de texto"
                  >
                    <Plus className="w-4 h-4 text-white" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="contacto">
            <h3 className="font-semibold mb-4 text-white">Contacto</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Jorge Eduardo Ospina Sanchez</p>
              <p>Correo: jeospinas@correo.usbcali.edu.co</p>
              <hr className="my-3 border-white/20" />
              <p>Gissel Vanessa Quitian Rojas</p>
              <p>Correo: gvquitianr@correo.usbcali.edu.co</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/60">© 2025 LUMEN. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-white/60 hover:text-white  transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-white  transition-colors">
              Términos
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-white  transition-colors">
              Accesibilidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
