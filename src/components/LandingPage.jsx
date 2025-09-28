import { useEffect } from 'react'
import HeroSection from './HeroSection'
import BenefitsSection from './BenefitsSection'
import ContentSection from './ContentSection'
import AuthoritySection from './AuthoritySection'
import FinalCTASection from './FinalCTASection'

const LandingPage = () => {
  useEffect(() => {
    // Scroll suave al cargar la página
    window.scrollTo(0, 0)
    
    // Agregar clase para animaciones
    document.body.classList.add('landing-loaded')
    
    // Intersection Observer para animaciones al hacer scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)

    // Observar todas las secciones
    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div id="hero-form">
        <HeroSection />
      </div>
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Content Section */}
      <ContentSection />
      
      {/* Authority Section */}
      <AuthoritySection />
      
      {/* Final CTA Section */}
      <FinalCTASection />
      
      {/* Footer simple */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">MGT Werk Clothing</h3>
              <p className="text-gray-400">Ropa urbana para bailarinas que quieren sentirse poderosas</p>
            </div>
            
            <div className="flex justify-center space-x-8">
              <a 
                href="https://mgtwerkclothing.libresales.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
              >
                🌐 Tienda Online
              </a>
              <a 
                href="https://wa.me/5491159289167" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
              >
                📱 WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/mgtwerkclothing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
              >
                📸 Instagram
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-sm text-gray-500">
                © 2024 MGT Werk Clothing. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage