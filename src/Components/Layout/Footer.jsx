import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaArrowRight
} from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-[#94a3b8] pt-24 pb-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af7a] to-transparent opacity-30"></div>

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Section 1: Brand & About */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="flex items-center gap-4 text-white mb-8 group cursor-pointer">
              <div className="w-12 h-12 bg-[#d4af7a] rounded-2xl flex items-center justify-center text-2xl font-bold text-[#0f172a] shadow-lg shadow-[#d4af7a]/20 group-hover:rotate-6 transition-transform">
                R
              </div>
              <div className="flex flex-col">
                <span className="heading-font text-2xl font-bold tracking-tight text-white">
                  Rizvi Education
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#d4af7a] font-bold">
                  Society Since 1985
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-8 max-w-sm">
              Nurturing excellence in education across Mumbai and Uttar Pradesh. 
              Join a legacy of leadership, values, and academic brilliance.
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#d4af7a] hover:text-[#0f172a] hover:-translate-y-1 transition-all cursor-pointer">
                  <Icon className="text-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 border-l-2 border-[#d4af7a] pl-4">
              Navigate
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {["About Us", "Institutions", "Admissions", "Contact"].map((link) => (
                <li key={link} className="hover:text-[#d4af7a] hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-[#d4af7a] group-hover:w-3 transition-all"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact & Mini Map */}
          <div className="md:col-span-6 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 border-l-2 border-[#d4af7a] pl-4">
                Reach Us
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-[#d4af7a] flex-shrink-0" />
                  <span>Karari, Kaushambi, Uttar Pradesh - 212206</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-[#d4af7a]" />
                  <span>+91 7080205245</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-[#d4af7a]" />
                  <span>admissions@rizvi.edu.in</span>
                </div>
              </div>
            </div>

            {/* NEW: Map Div Integration */}
            <div className="h-44 w-full rounded-[2rem] overflow-hidden border border-white/5 relative group">
              <iframe
                title="footer-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.2155827361!2d81.4285!3d25.441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzI3LjYiTiA4McKwMjUnNDIuNiJF!5e0!3m2!1sen!2sin!4v1650000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-2 right-2 bg-[#d4af7a] p-2 rounded-lg">
                <MapPin className="w-4 h-4 text-[#0f172a]" />
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Middle */}
        <div className="mt-3 py-10 border-y border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h5 className="text-white text-xl font-bold mb-1">Stay Updated</h5>
            <p className="text-xs">Subscribe for the latest news from Rizvi Campus.</p>
          </div>
          
          <div className="flex w-full lg:w-auto max-w-sm bg-white/5 p-1.5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent flex-1 px-6 text-sm text-white outline-none placeholder:text-gray-500"
            />
            <button className="bg-[#d4af7a] text-[#0f172a] px-6 py-3 rounded-[1.8rem] text-sm font-bold flex items-center gap-2 hover:bg-white transition-all group">
              JOIN <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium uppercase tracking-widest opacity-60">
          <p>© 2026 Rizvi Education Society. Developed with Precision.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;