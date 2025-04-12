import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide text-green-700 cursor-pointer" onClick={() => scrollTo("hero")}>
          NiemarCorp
        </h1>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <button onClick={() => scrollTo("about")}>Sobre mí</button>
          <button onClick={() => scrollTo("services")}>Servicios</button>
          <button onClick={() => scrollTo("contact")}>Contacto</button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col gap-4">
          <button onClick={() => scrollTo("about")}>Sobre mí</button>
          <button onClick={() => scrollTo("services")}>Servicios</button>
          <button onClick={() => scrollTo("contact")}>Contacto</button>
        </div>
      )}
    </header>
  );
};

export default Header;
