import avatar from "../assets/avatar.png";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <img
          src={avatar}
          alt="Alejandro Gabriel Martin"
          className="rounded-2xl shadow-lg w-full max-w-sm mx-auto mb-8 md:mb-0"
        />
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Sobre mí</h2>
          <p className="text-gray-700 mb-6">
            Soy Alejandro Gabriel Martin, autodidacta en simulación CFD, modelado 3D y tecnologías de código abierto como FreeCAD, OpenFOAM y ParaView. Me dedico a compartir este conocimiento para ayudar a otros y construir soluciones reales.
          </p>
          <p className="text-gray-700 mb-6">
            Mi camino combina tecnología, espiritualidad y servicio. Inspirado por las enseñanzas de Jesús y Buda, busco integrar ciencia y compasión para contribuir a un mundo más justo.
          </p>
          <p className="text-gray-700 mb-6">
            Actualmente desarrollo un sistema de energía renovable que será útil incluso en contextos extremos, como la futura colonización de Marte.
          </p>
          <p className="text-gray-700 font-semibold">
            Si deseas saber más sobre mis proyectos o colaborar, no dudes en contactarme.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

