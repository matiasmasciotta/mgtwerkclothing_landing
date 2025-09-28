import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Importar las imágenes JPG
import image1 from '../assets/guide-images/1.jpg'
import image2 from '../assets/guide-images/2.jpg'
import image3 from '../assets/guide-images/3.jpg'
import image4 from '../assets/guide-images/4.jpg'
import image5 from '../assets/guide-images/5.jpg'
import mgLogo from '../assets/logomg.jpg'

const GuidePage = () => {
  const tips = [
    {
      number: "01",
      title: "Elegí las mejores telas para bailar",
      image: image1,
      imageAlt: "Bailarina con outfit deportivo mostrando flexibilidad",
      content: [
        "🧵 **Lycra y Spandex**: Perfectas para movimientos que requieren flexibilidad extrema como pole dance",
        "🌟 **Algodón con elastano**: Ideal para clases largas, absorbe la humedad y es súper cómoda",
        "✨ **Microfibra**: Excelente para shows y presentaciones, no se arruga y tiene caída perfecta",
        "💡 **Tip extra**: Evitá telas 100% algodón para entrenamientos intensos, se empapan y pierden forma"
      ]
    },
    {
      number: "02", 
      title: "Los cortes que te dan libertad sin perder estilo",
      image: image2,
      imageAlt: "Bailarina en pose dinámica mostrando libertad de movimiento",
      content: [
        "👗 **Tops deportivos con soporte**: Fundamentales para movimientos intensos, buscá los que tengan copas removibles",
        "🩱 **Bodies con escote estratégico**: Te dan seguridad y libertad de movimiento sin restricciones",
        "🩳 **Shorts de tiro alto**: Estilizan la figura y te dan confianza en cada movimiento",
        "💡 **Tip extra**: Los cortes asimétricos agregan dinamismo visual a tus movimientos"
      ]
    },
    {
      number: "03",
      title: "Dale un toque escénico y único a tu look",
      image: image3,
      imageAlt: "Bailarina en show con luces, usando prenda con brillo",
      content: [
        "⭐ **Brillos y lentejuelas**: Perfectos para shows nocturnos, reflejan las luces del escenario",
        "🔥 **Colores neón**: Te hacen destacar bajo luces UV y en videos",
        "💎 **Detalles metálicos**: Agregan sofisticación y captan la atención del público",
        "💡 **Tip extra**: Un detalle llamativo (neón, brillos, transparencias o estampas originales) te da confianza y hace que tu presencia en el escenario sea inolvidable"
      ]
    },
    {
      number: "04",
      title: "Ropa versátil para usar dentro y fuera de la pista",
      image: image4,
      imageAlt: "Bailarina con estilo urbano caminando por la calle",
      content: [
        "👟 **Conjuntos deportivos elegantes**: Perfectos para ir del gym a tomar un café",
        "🧥 **Camperas bomber**: Se ven increíbles sobre cualquier outfit de danza",
        "👖 **Leggings de cintura alta**: Cómodos para entrenar y súper trendy para la calle",
        "💡 **Tip extra**: Invertí en piezas básicas de calidad que puedas combinar de múltiples formas"
      ]
    },
    {
      number: "05",
      title: "Accesorios que refuerzan tu identidad como bailarina",
      image: image5,
      imageAlt: "Bailarina con actitud confiada y accesorios llamativos",
      content: [
        "💎 **Chokers y collares llamativos**: Enmarcan tu cuello y agregan actitud",
        "👑 **Vinchas y bandanas**: Mantienen tu pelo en lugar y suman estilo urbano",
        "🔗 **Cadenas y arneses**: Perfectos para looks más edgy y de impacto",
        "💡 **Tip extra**: Los accesorios deben complementar, no competir con tu outfit principal"
      ]
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src={mgLogo} 
                alt="MG Clothing Logo" 
                className="h-20 w-auto"
              />
              <span className="text-xl font-bold gradient-text hidden sm:block">
                MGT Werk Clothing
              </span>
            </Link>
            <a 
              href="https://mgtwerkclothing.libresales.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              Ver Tienda 🛍️
            </a>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Bienvenida */}
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-accent-100 rounded-full mb-6">
              <span className="text-4xl">🎉</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              ¡Felicitaciones! <span className="gradient-text">Tu guía está lista</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Aquí están los 5 tips que van a transformar la forma en que elegís tu ropa de danza. 
              ¡Guardá esta página en favoritos! 💃✨
            </p>
          </div>

          {/* Tips */}
          <div className="space-y-16">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Imagen */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-square lg:aspect-auto lg:h-full relative">
                      <img 
                        src={tip.image} 
                        alt={tip.imageAlt}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay con gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Número flotante */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg backdrop-blur-sm">
                          {tip.number}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {tip.title}
                      </h2>
                      
                      <div className="space-y-4">
                        {tip.content.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3 group">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mt-3 flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-200"></div>
                            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
                              __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-600">$1</strong>')
                            }}></p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Decoración */}
                      <div className="pt-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Section */}
          <div className="mt-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl p-8 md:p-12 text-center">
            <div className="space-y-6">
              <div className="text-5xl">🎁</div>
              <h3 className="text-3xl font-bold text-gray-900">
                ¡Bonus Exclusivo!
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Como descargaste nuestra guía, tenés acceso anticipado a todas nuestras novedades 
                y descuentos especiales. ¡Seguinos en nuestras redes para no perderte nada!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://mgtwerkclothing.libresales.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  🛍️ Ver Colección Completa
                </a>
                <a 
                  href="https://wa.me/5491159289167?text=¡Hola! Descargué la guía y me encantó. Quiero saber más sobre sus productos 💃" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  💬 Contactar por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Llamada a la acción final */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Te gustó la guía?
              </h3>
              <p className="text-gray-600 mb-6">
                Compartila con tus amigas bailarinas y ayudá a que más chicas se sientan poderosas 💪
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Guía GRATIS: 5 tips para elegir ropa de danza',
                        text: '¡Encontré esta guía increíble para bailarinas! 💃',
                        url: window.location.origin
                      })
                    } else {
                      navigator.clipboard.writeText(window.location.origin)
                      alert('¡Link copiado! Compartilo con tus amigas 💃')
                    }
                  }}
                  className="btn-secondary"
                >
                  📤 Compartir Guía
                </button>
                <Link to="/" className="btn-primary">
                  🏠 Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default GuidePage