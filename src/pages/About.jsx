// src/pages/About.jsx
const About = () => {
  return (
    <section className="px-8 py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
      <p className="text-lg text-gray-700 mb-4">
        Soy Alejandro Gabriel Martin, un autodidacta apasionado por la tecnología, la energía renovable y el conocimiento libre.
        Mi enfoque une ciencia, espiritualidad, arte y tecnología con el objetivo de ayudar a otros desde la compasión.
      </p>
      <p className="text-lg text-gray-600">
        Utilizo herramientas de código abierto como FreeCAD, OpenFOAM, ParaView y Ubuntu para crear soluciones reales. Actualmente estoy desarrollando un proyecto de energía renovable y preparándome para estudiar Ingeniería en Energía en la UNSAM.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-2xl p-4">💻 Simulación CFD</div>
        <div className="bg-white shadow rounded-2xl p-4">⚙️ Automatización Linux</div>
        <div className="bg-white shadow rounded-2xl p-4">📚 Educación libre</div>
      </div>
    </section>
  );
};

export default About;
