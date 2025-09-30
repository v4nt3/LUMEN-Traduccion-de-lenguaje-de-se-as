"use client"

import { ArrowDown, Play, Monitor, Zap, Shield } from "lucide-react"

export default function Hero() {
  const handleDownload = () => {
    // Create download link
    const link = document.createElement("a")
    link.href = "/download/LUMEN_installer.exe"
    link.download = "lumen_installer.exe"
    link.click()

    // Show toast notification
    showToast("Descarga iniciada - Compatible solo con Windows")
  }

  const showToast = (message: string) => {
    const toast = document.createElement("div")
    toast.className = "toast"
    toast.setAttribute("role", "status")
    toast.setAttribute("aria-live", "polite")
    toast.textContent = message

    document.body.appendChild(toast)

    // Trigger animation
    setTimeout(() => toast.classList.add("show"), 100)

    // Remove after 4 seconds
    setTimeout(() => {
      toast.classList.remove("show")
      setTimeout(() => document.body.removeChild(toast), 300)
    }, 4000)
  }

  const scrollToFeatures = () => {
    document.getElementById("caracteristicas")?.scrollIntoView({ behavior: "smooth" })
  }

    const scrollToTutorial = () => {
    document.getElementById("video-tutorial")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inicio" className="relative gradient-hero py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-6 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              Exclusivo para Windows
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
              Traduce señas a voz — <span className="text-[#47B8A1] drop-shadow-lg">instantáneo</span> y{" "}
              <span className="text-[#4B79CD] drop-shadow-lg">accesible</span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed text-pretty mb-8">
              Convierte el lenguaje de señas en voz en tiempo real para mejorar la comunicación en Zoom, Meet y otras
              plataformas de videollamadas.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-white/90">
                <Zap className="w-5 h-5 mr-2 text-[#47B8A1]" />
                <span className="text-sm font-medium">Tiempo real</span>
              </div>
              <div className="flex items-center text-white/90">
                <Shield className="w-5 h-5 mr-2 text-[#47B8A1]" />
                <span className="text-sm font-medium">100% Privado</span>
              </div>
              <div className="flex items-center text-white/90">
                <Monitor className="w-5 h-5 mr-2 text-[#47B8A1]" />
                <span className="text-sm font-medium">Compatible con OBS</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 focus-visible transition-all duration-300 min-h-[56px] pulse-glow"
                aria-describedby="download-info"
              >
                Descargar para Windows
              </button>

              <button
                onClick={scrollToTutorial}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 focus-visible transition-all duration-300 min-h-[56px]"
              >
                <Play className="w-5 h-5 mr-2" aria-hidden="true" />
                Ver tutorial
              </button>
            </div>

            <p id="download-info" className="mt-4 text-sm text-white/70">
              Requiere OBS Studio y VB-Cable • Versión de prueba gratuita
            </p>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative float-animation">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
                <img
                  src="/desktop-app-interface-showing-sign-language-transl.jpg"
                  alt="Interfaz de LUMEN mostrando traducción de lenguaje de señas en tiempo real durante una videollamada en Windows"
                  className="w-full h-auto rounded-xl"
                  loading="eager"
                />
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 bg-[#47B8A1] text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl animate-pulse">
                 En tiempo real
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#253361] text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-xl">
                100% Privado
              </div>

              <div className="absolute top-1/2 -right-8 bg-black/25 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-xs font-medium">
                Compatible con
                <br />
                Zoom & Meet
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <button
            onClick={scrollToFeatures}
            className="animate-bounce p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 focus-visible transition-all duration-300"
            aria-label="Desplazarse a características"
          >
            <ArrowDown className="w-6 h-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
