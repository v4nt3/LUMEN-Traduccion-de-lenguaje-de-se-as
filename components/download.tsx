"use client"

import { DownloadIcon, Monitor, CheckCircle, ExternalLink } from "lucide-react"

export default function Download() {
  const handleDownload = () => {
    // Create download link
    const link = document.createElement("a")
    link.href = "https://github.com/v4nt3/LUMEN-Traduccion-de-lenguaje-de-se-as/releases/download/version_inicial/lumen_installer.exe"
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

  const requirements = ["OBS Studio (gratuito)", "VB-Cable (gratuito)", "Windows 10 o superior", "Cámara web funcional"]

  return (
    <section id="descargar" className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white">
          <Monitor className="w-4 h-4 mr-2" />
          Exclusivo para Windows
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-6 text-white">Descarga LUMEN ahora</h2>

        <p className="text-xl text-white/90 text-pretty mb-12 max-w-2xl mx-auto">
          Comienza a usar la traducción de señas a voz en tiempo real. Versión de prueba completamente funcional.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3 text-white">
              <Monitor className="w-6 h-6 text-[#47B8A1]" aria-hidden="true" />
              <span className="font-semibold">Solo Windows</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <DownloadIcon className="w-6 h-6 text-[#47B8A1]" aria-hidden="true" />
              <span>~606 MB</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-6 h-6 text-[#47B8A1]" aria-hidden="true" />
              <span>Versión completa</span>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold bg-white text-[#253361] rounded-2xl hover:bg-white/90 focus-visible transition-all duration-300 min-h-[60px] shadow-xl hover:shadow-2xl hover:-translate-y-1 pulse-glow"
          >
            <DownloadIcon className="w-6 h-6 mr-3" aria-hidden="true" />
            Descargar para Windows
          </button>

          <p className="mt-6 text-sm text-white/70">
            Versión de prueba gratuita • No requiere registro • Instalación rápida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Requisitos previos</h3>
            <ul className="space-y-3 text-left">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-center text-white/90">
                  <CheckCircle className="w-5 h-5 mr-3 text-[#47B8A1] flex-shrink-0" />
                  <span className="text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Enlaces útiles</h3>
            <div className="space-y-3 text-left">
              <a
                href="https://obsproject.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/90 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-3 text-[#47B8A1] flex-shrink-0" />
                <span className="text-sm">Descargar OBS Studio</span>
              </a>
              <a
                href="https://vb-audio.com/Cable/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white/90 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-3 text-[#47B8A1] flex-shrink-0" />
                <span className="text-sm">Descargar VB-Cable</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
