import { useState } from "react";
import { Menu, X, Search, Download, FileText, Phone, Building  } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Institutions", path: "/institutions" },
    { name: "News & Events", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  const brochureItems = [
    "Engineering & Management",
    "Degree College",
    "B. Ed. & D.El.Ed.",
    "Law",
    "Springfield",
    "Learners",
  ];

  return (
    <>
      {/* Navbar */}
     <nav className="sticky top-0 z-50 bg-[#1E3A5F] border-b border-[#D9C7B8] shadow-md">
  <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-5 flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Logo"
        className="
          h-10 sm:h-12 md:h-14 lg:h-16
          w-auto
          object-contain
          max-w-[140px] sm:max-w-[160px] md:max-w-[230px]
        "
      />
    </div>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-base xl:text-lg font-medium">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#D4AF7A] font-semibold"
                : "text-white hover:text-[#D4AF7A]"
            } transition-all duration-300`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">

      {/* Search */}
      <button className="p-2 sm:p-3 rounded-xl  bg-white text-[#1E3A5F] hover:bg-[#E8DCCF] transition-all">
        <Search size={18} className="sm:w-5 sm:h-5" />
      </button>

      {/* Brochure Button */}
      <button
        onClick={() => setShowBrochure(true)}
        className="hidden md:flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-[#D4AF7A] text-[#1E3A5F] text-sm font-semibold rounded-full hover:bg-[#C9B79C] transition-all shadow-md"
      >
        <Download size={16} />
        Brochure
      </button>

      {/* Apply Button */}
      <NavLink
        to="/admissions"
        className="hidden lg:block px-4 xl:px-6 py-2.5 xl:py-3  bg-white text-[#1E3A5F] text-sm font-semibold rounded-full hover:bg-[#E8DCCF] transition-all shadow-md"
      >
        Apply Now 2025-2026
      </NavLink>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white p-1"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </div>
  </div>
</nav>

      
      {showBrochure && (
  <div className="fixed inset-0 z-[999] flex items-start justify-center bg-[#1E3A5F]/10 backdrop-blur-md px-4 pt-20">
    
    {/* Popup Card */}
    <div className="relative w-[750px] h-[520px] overflow-y-auto bg-white border border-[#E8DCCF] rounded-2xl shadow-2xl p-6">

      {/* Close Button */}
      <button
        onClick={() => setShowBrochure(false)}
        className="absolute top-3 right-3 bg-[#F8F4EF] hover:bg-[#E8DCCF] text-[#1E3A5F] p-2 rounded-full"
      >
        <X size={18} />
      </button>

      {/* Title */}
      <div className="flex items-center gap-2 mb-3">
        <FileText className="text-[#1E3A5F]" size={22} />
        <h2 className="text-lg font-bold text-[#1E3A5F]">
          Information Brochure
        </h2>
      </div>

      {/* Intro */}
      <div className="bg-white border border-[#E8DCCF] rounded-xl p-4 mb-4">
        <p className="text-sm text-[#1E3A5F] leading-6">
          📘 Here you can download information brochure of all Institutions.
        </p>
      </div>

      {/* Brochure List */}
      <div className="space-y-3 mb-5">

        {[
          "Engineering & Management",
          "Degree College",
          "B. Ed. & D.El.Ed.",
          "Law",
          "Springfield",
          "Learners",
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white border border-[#E8DCCF] rounded-xl p-4 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">

              {/* Dark Blue Document Icon */}
              <FileText className="text-[#1E3A5F]" size={18} />

              <p className="text-[#1E3A5F] text-sm font-medium">
                {item} Brochure
              </p>
            </div>

            <button className="flex items-center gap-2 px-3 py-2 bg-[#1E3A5F] text-white rounded-full text-xs hover:bg-[#16304D] transition-all">
              ⬇ Download
            </button>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-white border border-[#E8DCCF] rounded-xl p-4 mb-4">

        <div className="flex items-center gap-2 mb-2">
          <Phone className="text-[#1E3A5F]" size={16} />
          <p className="text-sm font-semibold text-[#1E3A5F]">
            Contact Details
          </p>
        </div>

        <p className="text-xs text-gray-700">Toll Free No. - 1800-200-5802</p>
        <p className="text-xs text-gray-700">Email - contactus@drce.org</p>
        <p className="text-xs text-gray-700">Website - www.drce.org</p>
      </div>

      {/* Address */}
      <div className="bg-[#F8F4EF] border border-[#E8DCCF] rounded-xl p-4">

        <div className="flex items-center gap-2 mb-2">
          <Building className="text-[#1E3A5F]" size={16} />
          <p className="text-sm font-semibold text-[#1E3A5F]">
            Write to us
          </p>
        </div>

        <p className="text-xs text-gray-700">Rizvi Educational Campus</p>
        <p className="text-xs text-gray-700">Karari, Kaushambi (U. P.) - 212 206</p>
        <p className="text-xs text-gray-700">Phone No. - 7080205252</p>
      </div>

    </div>
  </div>
)}
    </>
  );
};

export default Navbar;