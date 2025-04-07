// src/components/Navbar.jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <ul className="flex flex-wrap gap-4 justify-center text-sm sm:text-base">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobre-mi">Sobre mí</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/servicios/web">Web</Link></li>
        <li><Link to="/servicios/cfd">CFD</Link></li>
        <li><Link to="/servicios/linux">Linux</Link></li>
        <li><Link to="/servicios/tutoriales">Tutoriales</Link></li>
        <li><Link to="/portafolio">Portafolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
