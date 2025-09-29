import bailandoImg from '../assets/bailando.jpeg'

const FinalCTASection = () => {
  const handleCTAClick = () => {
    document.getElementById('hero-form').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        {/* Gradiente urbano */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-gray-900/80"></div>
        
        {/* Efectos de luces */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-400 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-primary-400 rounded-full opacity-15 animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent-300 rounded-full opacity-20 animate-pulse"></div>
        
        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido izquierdo */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                Sentite <span className="text-accent-400">cómoda</span>, 
                <br />
                <span className="text-accent-400">segura</span> y con <span className="text-accent-400">estilo</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Accede a la guía GRATIS ahora y empezá hoy mismo a transformar tu forma de elegir ropa de danza ✨
              </p>
            </div>

            {/* Beneficios rápidos */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </div>
                <span>Descarga inmediata y gratuita</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </div>
                <span>Tips probados por cientos de bailarinas</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-6 h-6 bg-accent-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">✓</span>
                </div>
                <span>Bonus: acceso anticipado a novedades</span>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
              <button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-gray-900 font-bold py-6 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                🚀 Acceder a mi guía ahora
              </button>
              
              <p className="text-sm text-gray-400">
                Sin spam, sin compromisos. Solo valor puro para tu crecimiento como bailarina.
              </p>
            </div>
          </div>

          {/* Imagen derecha - Bailarina aspiracional */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Imagen de bailarina con outfit completo */}
              <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={bailandoImg} 
                  alt="Look Aspiracional - Bailarina feliz con outfit completo" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center">
                  <div className="text-center space-y-2 text-white p-4">
                    <h3 className="text-2xl font-bold">Look Aspiracional</h3>
                  </div>
                </div>
              </div>
              
              {/* Efectos decorativos */}
              <div className="absolute -top-8 -left-8 w-20 h-20 border-4 border-accent-400 rounded-full opacity-30 animate-spin-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent-400 rounded-full opacity-40 animate-pulse"></div>
              
              {/* Badge motivacional */}
              <div className="absolute top-4 -left-4 bg-accent-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm transform -rotate-12 animate-bounce-slow">
                ¡TU MOMENTO ES AHORA!
              </div>
            </div>
          </div>
        </div>

        {/* Urgencia sutil */}
        <div className="text-center mt-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <p className="text-white text-lg mb-4">
            <span className="text-accent-400 font-bold">+500 bailarinas</span> ya descargaron su guía este mes
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-accent-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection