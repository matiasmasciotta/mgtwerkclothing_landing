import { useState, useEffect } from 'react'
import mgLogo from '../assets/logomg.jpg'

const HeroSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    whatsapp: ''
  })
  const [hasCompletedForm, setHasCompletedForm] = useState(false)

  // Verificar si ya completó el formulario al cargar el componente
  useEffect(() => {
    const savedData = localStorage.getItem('mgtwerkGuideAccess')
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      setHasCompletedForm(true)
      setFormData(parsedData)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Guardar datos en localStorage
    localStorage.setItem('mgtwerkGuideAccess', JSON.stringify(formData))
    setHasCompletedForm(true)
    
    // Crear mensaje para WhatsApp
    const message = `¡Hola! Me interesa la guía GRATIS: 5 tips para elegir ropa de danza. Mi email es: ${formData.email}`
    const whatsappUrl = `https://wa.me/5491159289167?text=${encodeURIComponent(message)}`
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Redirigir a la página de la guía
    setTimeout(() => {
      window.location.href = '/guia-tips'
    }, 1000)
  }

  const handleDirectAccess = () => {
    window.location.href = '/guia-tips'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex flex-col section-padding">
      {/* Logo en la parte superior */}
      <div className="container-custom pt-6 pb-4">
        <div className="flex justify-center lg:justify-start">
          <img 
            src={mgLogo} 
            alt="MG Clothing Logo" 
            className="h-24 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      {/* Contenido principal centrado */}
      <div className="container-custom flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="gradient-text">Guía GRATIS:</span>
                <br />
                <span className="text-gray-900">
                  5 tips para elegir ropa de danza que te haga sentir 
                  <span className="gradient-text"> cómoda y poderosa</span>
                </span>
                <span className="text-4xl ml-2">💃✨</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Accede ahora y descubrí cómo potenciar tu estilo en clases, ensayos y shows.
              </p>
            </div>

            {/* Mostrar formulario o acceso directo según el estado */}
            {hasCompletedForm ? (
              // Acceso directo si ya completó el formulario
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md">
                <div className="text-center space-y-4">
                  <div className="text-green-600 text-5xl">✅</div>
                  <h3 className="text-xl font-bold text-gray-900">¡Ya tienes acceso!</h3>
                  <p className="text-gray-600">
                    Hola {formData.email.split('@')[0]}, ya completaste el formulario anteriormente.
                  </p>
                  <button
                    onClick={handleDirectAccess}
                    className="w-full btn-primary text-lg font-bold"
                  >
                    👉 Ver mi guía ahora
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem('mgtwerkGuideAccess')
                      setHasCompletedForm(false)
                      setFormData({ email: '', whatsapp: '' })
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    ¿No eres tú? Completar formulario nuevamente
                  </button>
                </div>
              </div>
            ) : (
              // Formulario original
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      📩 Tu email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                      📱 WhatsApp (opcional)
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="+54 9 11 1234-5678"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg font-bold"
                  >
                    👉 Quiero mi guía gratis
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Al enviar, serás redirigida a WhatsApp y luego a tu guía gratuita
                </p>
              </div>
            )}
          </div>

          {/* Imagen derecha - Mockup de la guía */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Mockup 3D de la guía */}
              <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="w-80 h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg shadow-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-white text-center space-y-4">
                      <h3 className="text-2xl font-bold">GUÍA EXCLUSIVA</h3>
                      <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-3xl">
                        💃
                      </div>
                      <h4 className="text-lg font-semibold">5 Tips para Elegir</h4>
                      <p className="text-sm opacity-90">Ropa de Danza Perfecta</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-white text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                      <span>Telas que acompañan tu movimiento</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                      <span>Cortes que potencian tu estilo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                      <span>Tips para sentirte poderosa</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Efectos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-200 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection