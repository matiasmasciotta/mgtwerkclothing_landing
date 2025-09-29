import bailarinaImage from '../assets/3bailan.jpeg'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "💡",
      title: "Tips fáciles de aplicar",
      description: "Consejos prácticos que podés implementar inmediatamente"
    },
    {
      icon: "👟",
      title: "Ropa cómoda y con estilo",
      description: "Descubrí cortes y accesorios que potencian tu estilo"
    },
    {
      icon: "🔥",
      title: "Energía y seguridad al bailar",
      description: "Sentite cómoda y poderosa en ensayos, clases y shows"
    },
    {
      icon: "✨",
      title: "Sin gastar de más",
      description: "Elegí las mejores opciones sin romper tu presupuesto"
    },
    {
      icon: "🎁",
      title: "Bonus exclusivo",
      description: "Acceso anticipado a nuestras novedades y descuentos especiales"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            ¿Por qué esta guía es para <span className="gradient-text">vos</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Porque entendemos perfectamente lo que necesitás como bailarina para sentirte increíble en cada movimiento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
            >
              <div className="text-center space-y-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Imagen de bailarina */}
        <div className="flex justify-center">
          <div className="relative max-w-4xl">
            {/* Imagen de bailarina urbana en movimiento */}
            <div className="w-full h-[32rem] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={bailarinaImage} 
                alt="Bailarina urbana en movimiento" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Efectos decorativos */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent-400 rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-300 rounded-full opacity-30 animate-bounce-slow"></div>
          </div>
        </div>

        {/* CTA en esta sección */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('hero-form').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            Quiero acceder a la guía ahora 🚀
          </button>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection