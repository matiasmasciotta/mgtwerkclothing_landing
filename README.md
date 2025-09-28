# MGT Werk Clothing - Landing Page

Landing page profesional para generar leads de la tienda de indumentaria de pole dance y twerk MGT Werk Clothing.

## 🚀 Características

- **Diseño minimalista** inspirado en Apple
- **Responsive design** optimizado para todos los dispositivos
- **Animaciones suaves** y efectos de scroll
- **Integración con WhatsApp** para conversión de leads
- **Formulario de captura** de emails
- **Página de guía** con 5 tips exclusivos

## 🛠️ Tecnologías

- **Vite** - Build tool y dev server
- **React** - Framework de JavaScript
- **Tailwind CSS** - Framework de CSS
- **React Router** - Navegación entre páginas

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Estructura

- `/` - Landing page principal con todas las secciones
- `/guia-tips` - Página con la guía de 5 tips

### Secciones de la Landing:

1. **Hero** - Título principal, formulario y CTA
2. **Beneficios** - Por qué necesitan la guía
3. **Contenido** - Qué incluye la guía
4. **Autoridad** - Testimonios y confianza
5. **CTA Final** - Última oportunidad de conversión

## 🎯 Funcionalidades

- **Formulario de captura**: Email + WhatsApp opcional
- **Redirección automática**: Después del formulario va a WhatsApp y luego a la guía
- **Múltiples CTAs**: Botones estratégicamente ubicados
- **Animaciones**: Efectos de scroll y hover
- **Responsive**: Optimizado para móvil y desktop

## 🚀 Despliegue en Vercel

1. Conectar repositorio a Vercel
2. Configurar build command: `npm run build`
3. Configurar output directory: `dist`
4. Deploy automático

## 📱 Integración WhatsApp

Los botones CTA redirigen a WhatsApp con mensaje predefinido:
```
¡Hola! Quiero acceder a la guía GRATIS de 5 tips para elegir ropa de danza 💃✨
```

## 🎨 Colores de Marca

- **Primario**: `#8B5CF6` (Violeta)
- **Secundario**: `#EC4899` (Rosa)
- **Acento**: `#F59E0B` (Amarillo)

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
