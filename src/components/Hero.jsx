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
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white py-24 px-6 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          variants={itemVariants}
        >
          Soluciones Tecnológicas con Impacto Real
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-300"
          variants={itemVariants}
        >
          Desarrollo web, simulaciones CFD, soporte Linux y más. <br className="hidden md:block" />
          Construido con React, Vite y TailwindCSS.
        </motion.p>
        <motion.a
          href="/contacto"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300"
        >
          Contactame
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

