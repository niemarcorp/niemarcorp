// src/components/Testimonials.jsx
import { motion } from "framer-motion"
import { MessageSquareQuote } from "lucide-react"

const testimonials = [
  {
    name: "Juan Pérez",
    feedback: "Excelente trabajo. Me ayudó a migrar mi sistema a Linux sin problemas y con mucha paciencia.",
    role: "Emprendedor digital",
    image: null  // Futuro: "juan.jpg"
  },
  {
    name: "María Gómez",
    feedback: "Gracias a su simulación CFD pudimos mejorar el diseño de nuestro sistema hidráulico.",
    role: "Ingeniera en Procesos",
    image: null  // Futuro: "maria.jpg"
  },
  {
    name: "Carlos Rivera",
    feedback: "El sitio web que me diseñó superó mis expectativas. Profesional, rápido y muy humano.",
    role: "Freelancer",
    image: null  // Futuro: "carlos.jpg"
  }
]

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  })
}

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center relative"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <MessageSquareQuote className="mx-auto mb-4 text-blue-500 w-8 h-8" />
            <p className="text-gray-600 italic mb-6">“{t.feedback}”</p>
            {/* Si hay imagen disponible en el futuro, se puede mostrar así:
            {t.image && (
              <img src={t.image} alt={`Foto de ${t.name}`} className="mx-auto w-16 h-16 rounded-full mb-4" />
            )} */}
            <p className="font-semibold text-gray-800">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

