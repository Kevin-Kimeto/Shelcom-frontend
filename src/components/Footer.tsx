// components/Footer.tsx

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Shelcom Designs Logo" className="h-10 w-auto" />
              <span className="text-xl font-semibold text-white">
                Shelcom Designs
              </span>
          </div>

          <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/docs" className="hover:text-white transition">Documentation</Link></li>
              <li><Link to="/support" className="hover:text-white transition">Support</Link></li>
              <li><Link to="/report" className="hover:text-white transition">Report a Bug</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ShelcomDesigns. All rights reserved.
        </div>

      </div>
    </footer>
  );
}