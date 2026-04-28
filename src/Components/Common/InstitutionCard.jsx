import React from 'react';
import { ArrowRight } from 'lucide-react';

const InstitutionCard = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  programs = [],
  onReadMore 
}) => {
  return (
  <div className="group bg-white rounded-3xl border border-[#e8d9d0] hover:shadow-xl transition-all duration-500 p-6 h-full flex flex-col">

  {/* Top Section */}
  <div className="flex items-start gap-5 mb-5">

    {/* Small Image/Icon */}
    <div className="w-[100px] h-[100px] min-w-[100px] rounded-2xl overflow-hidden  flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Right Side Content */}
    <div className="flex-1">

      {/* Subtitle */}
      <div className="mb-3">
        <span className="px-3 py-1 bg-[#f8f4ee] text-[#8c6f47] text-[11px] font-medium rounded-2xl">
          {subtitle}
        </span>
      </div>

      {/* Title */}
      <h3 className="heading-font text-xl font-semibold text-[#3f2a1e] leading-snug group-hover:text-[#d4af7a] transition-colors">
        {title}
      </h3>
    </div>
  </div>

  {/* Description */}
  <p className="text-[#6b5542] leading-relaxed text-sm mb-5 flex-1 line-clamp-3">
    {description}
  </p>

  {/* Programs */}
  {programs.length > 0 && (
    <div className="mb-5">
      <p className="uppercase text-[#8c6f47] text-[11px] tracking-widest mb-2">
        Programs Offered
      </p>

      <div className="flex flex-wrap gap-2">
        {programs.map((program, index) => (
          <span
            key={index}
            className="text-[11px] bg-[#f8f4ee] text-[#6b5542] px-3 py-1 rounded-xl"
          >
            {program}
          </span>
        ))}
      </div>
    </div>
  )}

  {/* Button */}
  <button
    onClick={onReadMore}
    className="mt-auto flex items-center gap-2 text-[#d4af7a] font-medium hover:gap-3 transition-all text-sm"
  >
    Read More
    <ArrowRight className="w-4 h-4" />
  </button>

</div>
  );
};

export default InstitutionCard;