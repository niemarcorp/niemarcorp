// src/components/Hero.jsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white pt-40 pb-28 px-6 text-center"
      role="region"
      aria-label="Presentación NieMar Corp"
    >
      <motion.div
        className="max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight"
          variants={itemVariants}
        >
          NieMar Corp: Soluciones Tecnológicas con Impacto Real
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-12 text-gray-300"
          variants={itemVariants}
        >
          Desarrollo web, simulaciones CFD, soporte Linux y más. <br className="hidden md:block" />
          Construido con React, Vite y TailwindCSS.
        </motion.p>

        <motion.a
          href="/contacto"
          title="Ir a la sección de contacto"
          aria-label="Ir a la sección de contacto"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-lg py-4 px-10 rounded-2xl shadow-lg transition duration-300"
        >
          Contactame
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

