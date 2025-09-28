const ContentSection = () => {
  const contentItems = [
    {
      number: "01",
      title: "Cómo elegir las mejores telas para bailar",
      description: "Descubrí qué materiales te dan la flexibilidad y comodidad que necesitás para cada tipo de baile",
      icon: "🧵"
    },
    {
      number: "02", 
      title: "Los cortes que te dan libertad sin perder estilo",
      description: "Conocé los diseños que potencian tu figura y te permiten moverte con total libertad",
      icon: "✂️"
    },
    {
      number: "03",
      title: "Toques escénicos para destacar en grupo o escenario",
      description: "Tips para brillar en presentaciones y destacarte con accesorios y detalles únicos",
      icon: "⭐"
    },
    {
      number: "04",
      title: "Ropa versátil para usar dentro y fuera de la pista",
      description: "Outfits que te acompañan desde el ensayo hasta la vida cotidiana con estilo urbano",
      icon: "👗"
    },
    {
      number: "05",
      title: "Accesorios que refuerzan tu identidad como bailarina",
      description: "Complementos que expresan tu personalidad y elevan tu look al siguiente nivel",
      icon: "💎"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido izquierdo */}
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Lo que vas a encontrar <span className="gradient-text">adentro</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Una guía completa y práctica diseñada especialmente para bailarinas como vos
              </p>
            </div>

            <div className="space-y-8">
              {contentItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-6 group"
                >
                  {/* Número */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {item.number}
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup derecho */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Mockup abierto del PDF */}
              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-96 h-80 bg-white rounded-lg shadow-2xl p-6 border border-gray-200">
                  {/* Página izquierda */}
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <div className="h-4 bg-primary-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-100 rounded"></div>
                        <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                        <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                      </div>
                      <div className="w-full h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded flex items-center justify-center">
                        <span className="text-2xl">💃</span>
                      </div>
                    </div>
                    
                    {/* Página derecha */}
                    <div className="space-y-4">
                      <div className="h-4 bg-accent-200 rounded"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-100 rounded"></div>
                        <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                        <div className="h-2 bg-gray-100 rounded w-3/5"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary-300 rounded-full flex items-center justify-center text-xs font-bold text-white">1</div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary-300 rounded-full flex items-center justify-center text-xs font-bold text-white">2</div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary-300 rounded-full flex items-center justify-center text-xs font-bold text-white">3</div>
                        <div className="h-2 bg-gray-200 rounded flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Efectos decorativos */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-accent-300 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary-200 rounded-full opacity-30 animate-bounce-slow"></div>
              
              {/* Badge "GRATIS" */}
              <div className="absolute -top-4 -right-4 bg-accent-400 text-white px-4 py-2 rounded-full font-bold text-sm transform rotate-12 animate-pulse">
                ¡GRATIS!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSection