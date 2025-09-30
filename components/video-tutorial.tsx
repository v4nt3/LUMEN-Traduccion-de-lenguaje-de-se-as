"use client"

import { useState } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from "lucide-react"

export default function VideoTutorial() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showSubtitles, setShowSubtitles] = useState(true)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleSubtitles = () => {
    setShowSubtitles(!showSubtitles)
  }

  return (
    <section id="video-tutorial" className="py-20 bg-gradient-to-br from-[#253361]/5 to-[#47B8A1]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tutorial en Lengua de Señas</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aprende a usar LUMEN con nuestro tutorial completo. Incluye subtítulos y
            transcripción completa para máxima accesibilidad.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Video placeholder */}
            <div className="aspect-video bg-gradient-to-br from-[#253361] to-[#4B79BD] flex items-center justify-center relative">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </div>
                <p className="text-lg font-medium mb-2">Tutorial: Configuración y Uso de LUMEN</p>
                <p className="text-sm text-white/80">Duración: 8:45 minutos</p>
              </div>

              {/* Subtitles overlay */}
              {showSubtitles && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-4 rounded-lg">
                  <p className="text-center text-sm">
                    [Subtítulos activados] Bienvenidos al tutorial de LUMEN. En este video aprenderán paso a paso...
                  </p>
                </div>
              )}
            </div>

            {/* Video controls */}
            <div className="bg-black/90 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label={isMuted ? "Activar audio" : "Silenciar audio"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  <span className="text-white text-sm">2:15 / 8:45</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleSubtitles}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors  ${
                      showSubtitles ? "bg-[#47B8A1] text-white" : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                    aria-label={showSubtitles ? "Ocultar subtítulos" : "Mostrar subtítulos"}
                  >
                    CC
                  </button>

                  <button
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors "
                    aria-label="Configuración de video"
                  >
                    <Settings className="w-5 h-5" />
                  </button>

                  <button
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors "
                    aria-label="Pantalla completa"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video description and transcript */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Contenido del Tutorial</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#47B8A1] rounded-full mt-2 flex-shrink-0"></span>
                  Instalación de OBS Studio y VB-Cable
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#47B8A1] rounded-full mt-2 flex-shrink-0"></span>
                  Configuración inicial de LUMEN
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#47B8A1] rounded-full mt-2 flex-shrink-0"></span>
                  Calibración de la cámara y micrófono
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#47B8A1] rounded-full mt-2 flex-shrink-0"></span>
                  Uso en Zoom, Teams y Google Meet
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-[#47B8A1] rounded-full mt-2 flex-shrink-0"></span>
                  Solución de problemas comunes
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Accesibilidad</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#47B8A1]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#47B8A1] font-bold text-sm">CC</span>
                  </div>
                  <span>Subtítulos en español disponibles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4B79BD]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#4B79BD] font-bold text-sm">LSM</span>
                  </div>
                  <span>Explicado completamente en lengua de señas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#253361]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#253361] font-bold text-sm">T</span>
                  </div>
                  <span>Transcripción completa disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
