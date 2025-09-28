const AuthoritySection = () => {
  const stats = [
    { number: "500+", label: "Bailarinas felices" },
    { number: "3", label: "Años de experiencia" },
    { number: "100%", label: "Envíos a todo el país" },
    { number: "24/7", label: "Atención personalizada" }
  ]

  const testimonials = [
    {
      name: "Sofía M.",
      role: "Instructora de Pole Dance",
      text: "La ropa de MGT Werk es increíble. Me siento súper cómoda y segura en cada clase.",
      rating: 5
    },
    {
      name: "Valentina R.", 
      role: "Bailarina de Twerk",
      text: "Finalmente encontré ropa que me acompaña en cada movimiento. ¡La calidad es excelente!",
      rating: 5
    },
    {
      name: "Camila L.",
      role: "Estudiante de Danza",
      text: "Desde que uso MGT Werk me siento más poderosa y con más estilo. ¡Lo recomiendo 100%!",
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Sección principal de autoridad */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Contenido izquierdo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Creada por <span className="gradient-text">expertas</span> para <span className="gradient-text">bailarinas</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Esta guía fue creada por <strong>MGT Werk Clothing</strong>, especialista en ropa urbana para bailarinas, 
                con envíos a todo el país y cientos de clientas felices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestra misión es que te sientas cómoda y poderosa en cada paso. Entendemos perfectamente 
                lo que necesitás porque trabajamos día a día con bailarinas como vos 💃
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Placeholder para foto de la creadora o collage */}
              <div className="w-96 h-96 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center space-y-4">
                  <div className="text-8xl">👩‍💼</div>
                  <p className="text-primary-800 font-bold text-xl">MGT Werk Team</p>
                  <p className="text-primary-700 text-sm px-4">
                    (Aquí iría una foto tuya como creadora o collage de clientas reales con tu ropa)
                  </p>
                </div>
              </div>
              
              {/* Badge de verificación */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Lo que dicen nuestras <span className="gradient-text">bailarinas</span>
            </h3>
            <p className="text-lg text-gray-600">
              Más de 500 bailarinas ya confían en nosotras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg card-hover">
                <div className="space-y-4">
                  {/* Estrellas */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent-400 text-xl">⭐</span>
                    ))}
                  </div>
                  
                  {/* Testimonio */}
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Autor */}
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('hero-form').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg"
          >
            Quiero unirme a las bailarinas felices 💃
          </button>
        </div>
      </div>
    </section>
  )
}

export default AuthoritySection