export default function Gallery() {
  const images = [
    {
      src: "/person-using-sign-language-in-video-call.jpg",
      alt: "Persona usando lenguaje de señas durante una videollamada",
      caption: "Comunicación fluida en reuniones virtuales",
      category: "Videollamadas",
    },
    {
      src: "/hands-making-sign-language-gestures.jpg",
      alt: "Manos realizando gestos de lenguaje de señas",
      caption: "Reconocimiento de gestos",
      category: "Tecnología",
    },
    {
      src: "/diverse-group-of-people-communicating-with-sign-la.jpg",
      alt: "Grupo diverso de personas comunicándose con lenguaje de señas",
      caption: "Inclusión y accesibilidad para todos",
      category: "Inclusión",
    },
    {
      src: "/desktop-app-interface-showing-real-time-translatio.jpg",
      alt: "Interfaz de aplicación de escritorio mostrando traducción en tiempo real",
      caption: "Interfaz intuitiva y fácil de usar",
      category: "Interfaz",
    },
    {
      src: "/person-presenting-using-sign-language-with-live-ca.jpg",
      alt: "Persona presentando usando lenguaje de señas con subtítulos en vivo",
      caption: "Presentaciones accesibles y profesionales",
      category: "Presentaciones",
    },
    {
      src: "/familia-comunic-ndose-con-lenguaje-de-se-as-en-cas.jpg",
      alt: "Familia comunicándose con lenguaje de señas en casa",
      caption: "Comunicación natural en clases cirtuales",
      category: "Estudio",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4 bg-gradient-to-r from-[#253361] to-[#4B79BD] bg-clip-text text-transparent">
            Comunicación sin barreras
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Descubre cómo LUMEN está transformando la comunicación inclusiva en diferentes contextos de Windows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <figure key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#47B8A1] to-[#4B79BD] text-white">
                    {image.category}
                  </span>
                </div>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-medium">{image.caption}</p>
                </div>
              </div>
              <figcaption className="mt-4 text-center">
                <p className="text-sm font-medium text-[#253361]">{image.caption}</p>
                <p className="text-xs text-gray-500 mt-1">{image.category}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#253361] to-[#4B79BD] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Únete a miles de usuarios que ya están mejorando su comunicación con LUMEN en Windows
            </p>
            <a
              href="#descargar"
              className="inline-flex items-center px-8 py-3 bg-white text-[#253361] font-semibold rounded-xl hover:bg-white/90 transition-colors duration-200"
            >
              Descargar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
