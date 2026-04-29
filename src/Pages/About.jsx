import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import Imageees from "../../public/chairman.jpg"
const About = () => {
  return (
    <>

      {/* Full Height Hero About Section */}
      <section className="min-h-screen bg-[#fafaf9] flex flex-col items-center relative">
       <div className="pb-10 bg-[#fafaf9]"> 
  <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
    <div className="grid lg:grid-cols-12 gap-16 items-start">
      
      {/* Left Column: About Trust */}
      <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
        <div>
          {/* Nude Blue Badge: Soft muted blue bg with deeper slate text */}
          <span className="inline-block px-6 py-2.5 bg-[#f1f5f9] text-[#475569] text-sm tracking-widest rounded-3xl font-semibold mb-6 uppercase">
            About Trust
          </span>
          <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl text-[#1e293b] leading-tight mb-6">
            Dr. Akhtar Rizvi <br />
            {/* Soft Blue Shade for the secondary heading line */}
            <span className="text-[#1E3A5F]">Educational Trust</span>
          </h2>
          {/* Subtle accent bar */}
          <div className="h-1.5 w-20 bg-[#1e293b] rounded-full"></div>
        </div>

        {/* Text Container: Border color changed to soft nude blue */}
        <div className="space-y-6 text-[#475569] text-lg leading-relaxed border-l-4 border-[#f1f5f9] pl-8">
          <p>
            Dr. Akhtar Rizvi Educational Trust is a Public Charitable Trust established 
            under the Societies Act 1950 and registered under the provisions of Uttar Pradesh Act, 1950.
          </p>
          <p>
            The main objective of the Trust has always been promoting education at all levels, 
            from high schools to specialized professional education.
          </p>
        </div>
      </div>

      {/* Right Column: Facilities Container with very light Nude Blue tint */}
      <div className="lg:col-span-7  rounded-[3rem] p-8 md:p-14 border border-[#f1f5f9]">
        <div className="text-center mb-12">
          {/* Heading color: Muted Slate Blue */}
          <h3 className="heading-font text-5xl md:text-6xl text-[#1E3A5F] opacity-90 tracking-tighter">FACILITIES</h3>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6">
  
          {/* Card 1: Campus */}
          <div className="bg-[#1E3A5F] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#e2e8f0]">
            <div className="flex justify-between items-start mb-4">
              {/* Number: Soft blue color, turns darker on hover */}
              <span className="text-5xl font-bold text-white  transition-colors">01</span>
              {/* Icon Box: Pure White on Nude Blue background */}
              <div className="w-12 h-12 bg-[#f8fafc] rounded-xl flex items-center justify-center text-2xl border border-[#f1f5f9]">🏛️</div>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#334155]">30 Acres Campus</h4>
            <p className="text-sm font-bold text-[#64748b] leading-relaxed">
              Spacious lush green campus with modern academic blocks, playgrounds, and a peaceful environment.
            </p>
          </div>

          {/* Card 2: Boys Hostel */}
          <div className="bg-[#1E3A5F] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#e2e8f0]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-5xl font-bold text-white  transition-colors">02</span>
              <div className="w-12 h-12 bg-[#f8fafc] rounded-xl flex items-center justify-center text-2xl border border-[#f1f5f9]">👦</div>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#334155]">Boys Hostel</h4>
            <p className="text-sm font-bold text-[#64748b] leading-relaxed">
              Hostel facility inside campus with accommodation capacity for around 500 students and modern support.
            </p>
          </div>

          {/* Card 3: Girls Hostel */}
          <div className="bg-[#1E3A5F] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#e2e8f0]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-5xl font-bold text-white  transition-colors">03</span>
              <div className="w-12 h-12 bg-[#f8fafc] rounded-xl flex items-center justify-center text-2xl border border-[#f1f5f9]">👧</div>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#334155]">Girls Hostel</h4>
            <p className="text-sm font-bold text-[#64748b] leading-relaxed">
              Safe and comfortable girls hostel within campus designed for security, convenience, and academic focus.
            </p>
          </div>

          {/* Card 4: Transport */}
          <div className="bg-[#1E3A5F] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#e2e8f0]">
            <div className="flex justify-between items-start mb-4">
              <span className="text-5xl font-bold text-white  transition-colors">04</span>
              <div className="w-12 h-12 bg-[#f8fafc] rounded-xl flex items-center justify-center text-2xl border border-[#f1f5f9]">🚌</div>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#334155]">Wi-Fi & Transport</h4>
            <p className="text-sm font-bold text-[#64748b] leading-relaxed">
              Full Wi-Fi enabled campus with transport facility for pick-up and drop from nearest major cities.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
        {/* About Trust Section — Chairman section se pehle add karo */}


        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 pt-5">
         <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
  
  {/* Left Side - Content */}
  <div className="lg:col-span-7 space-y-10">
    
    <div>
      {/* Nude Blue Badge */}
      <span className="inline-block px-6 py-2.5 bg-[#f1f5f9] text-[#475569] text-sm tracking-widest rounded-3xl font-semibold uppercase">
        About Chairman
      </span>
    </div>

    {/* Heading: Dark Slate with Nude Blue accent */}
    <h1 className="heading-font text-2xl md:text-4xl lg:text-5xl leading-tight font-bold tracking-tighter text-[#1e293b]">
      A Legacy of <br />
      <span className="text-[#1E3A5F]">Excellence in Education</span>
    </h1>

    <div className="max-w-2xl space-y-6">
      {/* Description: Border changed to soft blue-grey */}
      <p className="text-[#475569] text-lg leading-relaxed border-l-4 border-[#e2e8f0] pl-6">
        Credit for the success of Dr. Akhtar Rizvi Educational Trust undoubtedly goes to Dr. A. H. Rizvi, President and Founder of Dr. Akhtar Rizvi Educational Trust for his selfless attempts to create a knowledge driven economy.
      </p>
      <p className="text-[#475569] text-lg leading-relaxed">
        His close association with a large number of social and cultural organization, has earned him the reputation of being a philanthropist with high ideals. His yearning to make a substantial contribution to education has enriched the quality of education.
      </p>
      <p className="text-[#475569] text-lg leading-relaxed font-medium">
        Generation after generation will reap the benefits from the educational institutions of Dr. Akhtar Rizvi Educational Trust.
      </p>
    </div>

    {/* Key Highlights: Icons and Colors updated to Nude Blue theme */}
    <div className="grid grid-cols-2 gap-8 pt-8">
      <div className="flex gap-4 items-center">
        <div className="w-14 h-14 bg-[#f8fafc] rounded-2xl flex items-center justify-center border border-[#f1f5f9]">
          <Award className="w-7 h-7 text-[#64748b]" />
        </div>
        <div>
          <h4 className="font-bold text-[#1e293b] text-xl">39+ Years</h4>
          <p className="text-sm text-[#94a3b8]">Educational Excellence</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="w-14 h-14 bg-[#f8fafc] rounded-2xl flex items-center justify-center border border-[#f1f5f9]">
          <Users className="w-7 h-7 text-[#64748b]" />
        </div>
        <div>
          <h4 className="font-bold text-[#1e293b] text-xl">50,000+</h4>
          <p className="text-sm text-[#94a3b8]">Successful Alumni</p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Side - Visual */}
  <div className="lg:col-span-5 relative">
    {/* Image Container: Border color changed to soft nude blue */}
    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#f1f5f9]">
      <img 
        src={Imageees} 
        alt="Dr. A.H. Rizvi" 
        className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700"
      />
      {/* Overlay Gradient: Deep Blue/Black to Transparent */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 via-transparent to-transparent"></div>
    </div>

    {/* Floating Card: Pure White with Nude Blue shadow/accents */}
    <div className="absolute -bottom-8 -left-6 bg-white rounded-[2rem] p-8 shadow-2xl border border-[#f1f5f9] max-w-xs transition-transform hover:-translate-y-2">
      <div className="flex items-center gap-4">
        {/* Icon: Slate Blue background */}
        <div className="w-12 h-12 bg-[#64748b] rounded-xl flex items-center justify-center">
          <Heart className="w-6 h-6 text-white" fill="white" />
        </div>
        <div>
          <div className="font-bold text-[#1e293b]">Founded By</div>
          <div className="text-sm font-medium text-[#64748b]">Dr. A.H. Rizvi</div>
        </div>
      </div>
    </div>
  </div>
</div>
         <div className="py-10 my-5 rounded-3xl ">
  <div className="max-w-screen-xl mx-auto px-8 md:px-16">

    {/* Section Heading */}
    <div className="text-center mb-16 ">
      <span className="inline-block px-5 py-2 bg-[#f1f5f9] text-[#64748b] text-xs tracking-[0.25em] rounded-full font-bold mb-4 uppercase">
        Our Purpose
      </span>
      <h2 className="heading-font text-4xl md:text-5xl text-[#1e293b] font-bold">
        Vision & <span className="text-[#1E3A5F]">Mission</span>
      </h2>
    </div>

    {/* Slim & Attractive Cards Layout */}
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

      {/* Vision Card - Pure White with Soft Slate Border */}
      <div className="group relative bg-white rounded-[2.5rem] p-9 transition-all duration-500 border-2 border-[#f1f5f9] hover:border-[#cbd5e1] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(148,163,184,0.2)] overflow-hidden">
        {/* Highlighted Nude Blue Corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f1f5f9] rounded-bl-full -z-0 transition-all group-hover:bg-[#e2e8f0]"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-14 h-14 bg-[#1e293b] rounded-2xl flex items-center justify-center shadow-xl">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="heading-font text-2xl font-bold text-[#1e293b]">
              Our Vision
            </h3>
          </div>

          <p className="text-[#475569] text-[17px] font-medium leading-relaxed mb-8">
            To achieve excellence by creating globally competent leaders through world-class education.
          </p>

          <div className="flex items-center gap-3 pt-5 border-t border-[#f1f5f9]">
            <div className="w-2 h-2 rounded-full bg-[#334155]"></div>
            <span className="text-xs font-extrabold text-[#64748b] tracking-widest uppercase">
              Global Excellence
            </span>
          </div>
        </div>
      </div>

      {/* Mission Card - Nude Blue Card with White Highlight */}
      <div className="group relative bg-[#f1f5f9] rounded-[2.5rem] p-9 transition-all duration-500 border-2 border-transparent hover:border-[#cbd5e1] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:bg-white hover:shadow-[0_20px_50px_rgba(148,163,184,0.2)] overflow-hidden">
        {/* White Highlight Corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-full -z-0"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-14 h-14 bg-[#64748b] rounded-2xl flex items-center justify-center shadow-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="heading-font text-2xl font-bold text-[#1e293b]">
              Our Mission
            </h3>
          </div>

          <p className="text-[#475569] text-[17px] font-medium leading-relaxed mb-8">
            Achieving excellence through experiential learning that is creative, futuristic, and lifelong for personal and organizational growth.
          </p>

          <div className="flex items-center gap-3 pt-5 border-t border-[#cbd5e1]">
            <div className="w-2 h-2 rounded-full bg-[#334155]"></div>
            <span className="text-xs font-extrabold text-[#64748b] tracking-widest uppercase">
              Lifelong Learning
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
        </div>

       
      </section>

     

    </>
  );
};

export default About;