import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import WebDev from "./pages/WebDev"
import CFD from "./pages/CFD"
import LinuxSupport from "./pages/LinuxSupport"
import Tutorials from "./pages/Tutorials"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/web" element={<WebDev />} />
            <Route path="/servicios/cfd" element={<CFD />} />
            <Route path="/servicios/linux" element={<LinuxSupport />} />
            <Route path="/servicios/tutoriales" element={<Tutorials />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRoutes
