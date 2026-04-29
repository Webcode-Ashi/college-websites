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
    <footer className="bg-[#1E3A5F] text-white/70 pt-24 pb-10 relative overflow-hidden">
      {/* Soft Nude Decorative Gradient Top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f3e7d3] to-transparent opacity-40"></div>

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Section 1: Brand - Minimalist White & Nude */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-[#f3e7d3] rounded-3xl flex items-center justify-center text-2xl font-bold text-[#1E3A5F] shadow-xl shadow-black/20 transform -rotate-3 hover:rotate-0 transition-all duration-500">
                R
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tight text-white leading-none">
                  Rizvi Education
                </span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#f3e7d3] mt-1 font-semibold">
                  Excellence Since 1985
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-10 text-white/60 max-w-sm">
              Nurturing leadership and brilliance across Mumbai and Uttar Pradesh. 
              Our legacy is built on values, academic integrity, and future-ready education.
            </p>

            {/* Social Icons - Nude on Hover */}
            <div className="flex gap-5">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <div key={i} className="w-11 h-11 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#1E3A5F] hover:-translate-y-2 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  <Icon className="text-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Links - Clean White */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-[#f3e7d3] font-bold text-xs uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#f3e7d3]"></span>
              Navigate
            </h4>
            <ul className="space-y-5 text-sm">
              {["About Us", "Institutions", "Admissions", "Contact"].map((link) => (
                <li key={link} className="hover:text-white transition-all cursor-pointer flex items-center gap-0 hover:gap-3 group">
                  <span className="w-0 h-[1px] bg-[#f3e7d3] group-hover:w-4 transition-all"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Reach Us - Soft Glass Style */}
          <div className="md:col-span-4 lg:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h4 className="text-[#f3e7d3] font-bold text-xs uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#f3e7d3]"></span>
                Reach Us
              </h4>
              <div className="space-y-6 text-sm">
                <div className="flex gap-4 items-start group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f3e7d3] transition-colors">
                    <MapPin className="w-5 h-5 text-[#f3e7d3] group-hover:text-[#1E3A5F]" />
                  </div>
                  <span className="mt-2 text-white/70">Karari, Kaushambi, Uttar Pradesh - 212206</span>
                </div>
                <div className="flex gap-4 items-center group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f3e7d3] transition-colors">
                    <Phone className="w-5 h-5 text-[#f3e7d3] group-hover:text-[#1E3A5F]" />
                  </div>
                  <span className="text-white/70">+91 7080205245</span>
                </div>
                <div className="flex gap-4 items-center group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f3e7d3] transition-colors">
                    <Mail className="w-5 h-5 text-[#f3e7d3] group-hover:text-[#1E3A5F]" />
                  </div>
                  <span className="text-white/70">admissions@rizvi.edu.in</span>
                </div>
              </div>
            </div>

            {/* Map Integration with Nude Border */}
            <div className="h-full min-h-[180px] w-full rounded-[2.5rem] overflow-hidden border border-[#f3e7d3]/20 relative group">
              <iframe
                title="footer-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.338786961448!2d81.3855!3d25.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI2JzI0LjAiTiA4McKwMjMnMDcuOCJF!5e0!3m2!1sen!2sin!4v1610000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.1) brightness(0.8)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 bg-[#1E3A5F]/20 pointer-events-none"></div>
              <div className="absolute top-4 right-4 bg-[#f3e7d3] p-2.5 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-[#1E3A5F]" />
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Nude Theme */}
        <div className="mt-5 py-5 border-y border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h5 className="text-white text-2xl font-bold mb-2">Join Our Newsletter</h5>
            <p className="text-sm text-white/50">Stay informed about admissions and campus events.</p>
          </div>
          
          <div className="flex w-full lg:w-[450px] bg-white/5 p-2 rounded-[2rem] border border-white/10 backdrop-blur-md focus-within:border-[#f3e7d3]/50 transition-all">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent flex-1 px-6 text-sm text-white outline-none placeholder:text-white/30"
            />
            <button className="bg-[#f3e7d3] text-[#1E3A5F] px-8 py-4 rounded-[1.8rem] text-xs font-black flex items-center gap-3 hover:bg-white transition-all group tracking-widest">
              SUBSCRIBE <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar - Ultra Clean */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          <p>© 2026 Rizvi Education Society. All Rights Reserved.</p>
          <div className="flex gap-10">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <span key={item} className="hover:text-[#f3e7d3] cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;