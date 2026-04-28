import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#58241b] text-[#d4c9b8] pt-20 pb-12">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">

        {/* Top Footer */}
        <div className="grid md:grid-cols-12 gap-y-16">

          {/* Left Section */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-white mb-8">
              <div className="w-9 h-9 bg-[#d4af7a] rounded-2xl flex items-center justify-center text-2xl font-semibold">
                R
              </div>

              <span className="heading-font text-3xl tracking-tighter">
                Rizvi Education Society
              </span>
            </div>

            <p className="max-w-xs text-sm leading-relaxed">
              Nurturing excellence in education since 1985. A commitment to
              knowledge, values, and leadership.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 mt-12">
              <FaInstagram className="text-2xl cursor-pointer hover:text-[#d4af7a] transition-colors" />
              <FaLinkedinIn className="text-2xl cursor-pointer hover:text-[#d4af7a] transition-colors" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-[#d4af7a] transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="uppercase text-xs tracking-widest mb-6">
              Quick Links
            </div>

            <div className="space-y-3 text-sm">
              <div className="cursor-pointer hover:text-white transition-colors">
                About Us
              </div>

              <div className="cursor-pointer hover:text-white transition-colors">
                Institutions
              </div>

              <div className="cursor-pointer hover:text-white transition-colors">
                Admissions 2025-26
              </div>
            </div>
          </div>

          {/* Campuses */}
          <div className="md:col-span-2">
            <div className="uppercase text-xs tracking-widest mb-6">
              Campuses
            </div>

            <div className="space-y-3 text-sm">
              <div>Bandra West, Mumbai</div>
              <div>Karari, Kaushambi</div>
              <div>Jaunpur</div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <div className="uppercase text-xs tracking-widest mb-6">
              Newsletter
            </div>

            <div className="text-sm mb-4">
              Stay updated with latest events and opportunities
            </div>

            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 flex-1 px-5 py-4 rounded-l-3xl text-sm outline-none placeholder:text-[#d4c9b8]"
              />

              <button className="bg-[#d4af7a] text-[#3f2a1e] px-8 rounded-r-3xl font-medium hover:bg-[#c9a98a] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-20 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">

          <div>
            © 2026 Rizvi Education Society. All Rights Reserved.
          </div>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">
              Privacy
            </span>

            <span className="cursor-pointer hover:text-white">
              Terms
            </span>

            <span className="cursor-pointer hover:text-white">
              Accessibility
            </span>
          </div>

          <div>
            Made with purpose for future leaders
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;