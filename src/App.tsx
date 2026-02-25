import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";
import Disclaimer from "./pages/legal/Disclaimer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


