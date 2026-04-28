import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Institutions', path: '/institutions' },
    { name: 'News & Events', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-green/15 backdrop-blur-xl border-b border-[#e8d9d0]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="../../public/logo.png" alt="" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-lg font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link transition-colors ${isActive ? 'text-[#d4af7a] font-semibold' : 'text-[#3f2a1e] hover:text-[#d4af7a]'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="p-3 rounded-2xl hover:bg-[#f5f0e8] transition-colors">
            <Search size={20} />
          </button>
          <NavLink 
            to="/admissions"
            className="hidden md:block px-6 py-3 bg-[#3f2a1e] text-white text-sm font-medium rounded-3xl hover:bg-black transition-all"
          >
            Download
          </NavLink>
          <NavLink 
            to="/admissions"
            className="hidden md:block px-6 py-3 bg-[#3f2a1e] text-white text-sm font-medium rounded-3xl hover:bg-black transition-all"
          >
            Apply Now 2025-26
          </NavLink>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8d9d0]">
          <div className="px-8 py-8 flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-[#d4af7a]"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;