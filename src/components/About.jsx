// src/components/About.jsx
import avatar from "../assets/avatar.png"

const About = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <img
          src={avatar}
          alt="Alejandro Gabriel Martin"
          className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-gray-700 mb-4">
            Soy Alejandro Gabriel Martin, autodidacta en simulación CFD, modelado 3D y tecnologías de código abierto como FreeCAD, OpenFOAM y ParaView. 
            Me dedico a compartir este conocimiento para ayudar a otros y construir soluciones reales.
          </p>
          <p className="text-gray-700 mb-4">
            Mi camino combina tecnología, espiritualidad y servicio. Inspirado por las enseñanzas de Jesús y Buda, busco integrar ciencia y compasión para contribuir a un mundo más justo.
          </p>
          <p className="text-gray-700">
            Actualmente desarrollo un sistema de energía renovable que será útil incluso en contextos extremos, como la futura colonización de Marte.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
