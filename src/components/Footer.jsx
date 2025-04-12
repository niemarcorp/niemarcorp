// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      className="bg-gray-900 text-white text-center px-6 py-6 mt-16 shadow-inner"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
          <Link to="/" className="hover:text-cyan-400 transition">Inicio</Link>
          <Link to="/sobre-mi" className="hover:text-cyan-400 transition">Sobre mí</Link>
          <Link to="/servicios" className="hover:text-cyan-400 transition">Servicios</Link>
          <Link to="/portafolio" className="hover:text-cyan-400 transition">Portafolio</Link>
          <Link to="/blog" className="hover:text-cyan-400 transition">Blog</Link>
          <Link to="/contacto" className="hover:text-cyan-400 transition">Contacto</Link>
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} NieMar Corp. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

