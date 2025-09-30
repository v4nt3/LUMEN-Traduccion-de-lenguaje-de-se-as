import { Mic, Video, Settings, Zap, Shield, Monitor } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Mic,
      title: "Traducción en tiempo real",
      description: "Convierte señas a voz instantáneamente con precisión avanzada usando inteligencia artificial",
      color: "from-[#47B8A1] to-[#4B79BD]",
    },
    {
      icon: Video,
      title: "Integración con videollamadas",
      description: "Compatible con Zoom, Meet, Teams y otras plataformas mediante cable virtual VB-Cable",
      color: "from-[#4B79BD] to-[#253361]",
    },
    {
      icon: Settings,
      title: "Interfaz accesible e intuitiva",
      description: "Diseñado intuitivo y facil de usar, sin muchos pasos de por medio",
      color: "from-[#253361] to-[#47B8A1]",
    },
  ]

  const stats = [
    { icon: Zap, label: "Latencia", value: "<100ms" },
    { icon: Shield, label: "Privacidad", value: "100%" },
    { icon: Monitor, label: "Plataforma", value: "Windows" },
  ]

  return (
    <section id="caracteristicas" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4 bg-gradient-to-r from-[#253361] to-[#4B79BD] bg-clip-text text-transparent">
            Características principales
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Tecnología avanzada diseñada específicamente para mejorar la comunicación inclusiva en Windows
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-16 max-w-2xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <IconComponent className="w-6 h-6 text-[#47B8A1] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#253361]">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#253361] mb-4 text-balance group-hover:text-[#4B79BD] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#253361] to-[#4B79BD] rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Requisitos del sistema</h3>
            <p className="text-white/90">Todo lo que necesitas para empezar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Monitor className="w-8 h-8 mx-auto mb-3 text-[#47B8A1]" />
              <h4 className="font-semibold mb-2">Sistema Operativo</h4>
              <p className="text-sm text-white/80">Windows 10 o superior</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Video className="w-8 h-8 mx-auto mb-3 text-[#47B8A1]" />
              <h4 className="font-semibold mb-2">OBS Studio</h4>
              <p className="text-sm text-white/80">Para captura de video</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mic className="w-8 h-8 mx-auto mb-3 text-[#47B8A1]" />
              <h4 className="font-semibold mb-2">VB-Cable</h4>
              <p className="text-sm text-white/80">Cable de audio virtual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
