import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <>

      {/* Full Height Hero About Section */}
      <section className="min-h-screen bg-[#f8f4ee] flex flex-col items-center relative">
        {/* About Trust Section — Chairman section se pehle add karo */}

<div className="py-10 bg-white">
  <div className="max-w-screen-2xl mx-auto px-8 md:px-16">

    {/* Heading */}
    <div className="mb-16">
      <span className="inline-block px-6 py-2.5 bg-[#f3e7de] text-[#8c6f47] text-sm tracking-widest rounded-3xl font-medium mb-6">
        ABOUT TRUST
      </span>

      <h2 className="heading-font text-4xl md:text-6xl text-[#3f2a1e] leading-tight mb-8">
        Dr. Akhtar Rizvi Educational Trust
      </h2>

      <div className="max-w-5xl space-y-6 text-[#6b5542] text-lg leading-relaxed">
        <p>
          Dr. Akhtar Rizvi Educational Trust is a Public Charitable Trust
          established under the Societies Act 1950 and registered under the
          provisions of Uttar Pradesh Act, 1950.
        </p>

        <p>
          The main objective of the Trust has always been promoting education
          at all levels. It began with the College of Arts, Science and
          Commerce and Rizvi High School in 1985 and has now expanded into
          multiple institutions including Hotel Management and Professional
          Education.
        </p>

        <p>
          Located in Karari, District Kaushambi, the institution offers a
          peaceful academic environment away from city hustle, with excellent
          infrastructure and student-friendly facilities.
        </p>
      </div>
    </div>

    {/* Facilities Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-[#f8f4ee] rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-[#3f2a1e] mb-4">
          30 Acres Campus
        </h3>
        <p className="text-[#6b5542] leading-relaxed">
          Spacious lush green campus with modern academic blocks,
          playgrounds, and peaceful learning environment.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#f8f4ee] rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-[#3f2a1e] mb-4">
          Boys Hostel
        </h3>
        <p className="text-[#6b5542] leading-relaxed">
          Hostel facility inside campus with accommodation capacity
          for around 500 students and modern living support.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#f8f4ee] rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-[#3f2a1e] mb-4">
          Girls Hostel
        </h3>
        <p className="text-[#6b5542] leading-relaxed">
          Safe and comfortable girls hostel within campus designed
          for security, convenience, and academic focus.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#f8f4ee] rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-[#3f2a1e] mb-4">
          Wi-Fi & Transport
        </h3>
        <p className="text-[#6b5542] leading-relaxed">
          Full Wi-Fi enabled campus with transport facility for
          pick-up and drop from nearest major city Allahabad.
        </p>
      </div>

    </div>
  </div>
</div>
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 pt-5">
          <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
            
            {/* Left Side - Content */}
            <div className="lg:col-span-7 space-y-10">
              
              <div>
                <span className="inline-block px-6 py-2.5 bg-[#e8d9d0] text-[#8c6f47] text-sm tracking-widest rounded-3xl font-medium">
                  About Chairman
                </span>
              </div>

              <h1 className="heading-font text-2xl md:text-4xl lg:text-4xl leading-none font-medium tracking-tighter text-[#3f2a1e]">
                A Legacy of
                Excellence in
                Education
              </h1>

              <div className="max-w-2xl">
                <p className="text-[#6b5542] text-md leading-relaxed">
                 Credit for the success of Dr. Akhtar Rizvi Educational Trust undoubtedly goes to Dr. A. H. Rizvi, President and Founder of Dr. Akhtar Rizvi Educational Trust for his selfless attempts to create a knowledge driven economy. His close association with a large number of social and cultural organization, has earned him the reputation of being a philanthropist with high ideals. His yearning to make a substantial contribution to education has enriched the quality of education.
                </p>
              </div>
              <div className="max-w-2xl">
                <p className="text-[#6b5542] text-md leading-relaxed">
                 Generation after generation will reap the benefits from the educational institutions of Dr. Akhtar Rizvi Educational Trust.
                </p>
              </div>


              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Award className="w-8 h-8 text-[#d4af7a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3f2a1e]">39+ Years</h4>
                    <p className="text-sm text-[#8c6f47]">of Educational Excellence</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <Users className="w-8 h-8 text-[#d4af7a]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3f2a1e]">50,000+</h4>
                    <p className="text-sm text-[#8c6f47]">Successful Alumni</p>
                  </div>
                </div>
              </div>

              {/* Vision Statement */}
              
            </div>

            {/* Right Side - Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e8d9d0]/50">
                <img 
                  src="../../public/chairman.jpg" 
                  alt="Rizvi Education Society Campus" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-6 bg-white rounded-3xl p-8 shadow-xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d4af7a] rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-[#3f2a1e]">Founded By</div>
                    <div className="text-sm text-[#8c6f47]">Dr. A.H. Rizvi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10  bg-white">
  <div className="max-w-screen-xl mx-auto px-8 md:px-16">

    {/* Section Heading */}
    <div className="text-center mb-12">
      <span className="text-[#d4af7a] text-sm tracking-widest font-medium">
        OUR PURPOSE
      </span>

      <h2 className="heading-font text-4xl md:text-5xl mt-3 text-[#3f2a1e]">
        Vision & Mission
      </h2>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

      {/* Vision Card */}
      <div className="bg-[#f8f4ee] rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border border-[#efe5da]">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-[#d4af7a] rounded-2xl flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>

          <h3 className="heading-font text-2xl font-semibold text-[#3f2a1e]">
            Our Vision
          </h3>
        </div>

        <p className="text-[#6b5542] text-[16px] leading-relaxed">
          Our Vision is to achieve excellence by creating globally competent
          leaders through world-class education.
        </p>

        <div className="mt-6 pt-5 border-t border-[#e8d9d0]">
          <span className="text-sm font-medium text-[#8c6f47]">
            Excellence Through Education
          </span>
        </div>
      </div>

      {/* Mission Card */}
      <div className="bg-[#f8f4ee] rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border border-[#efe5da]">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-[#d4af7a] rounded-2xl flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>

          <h3 className="heading-font text-2xl font-semibold text-[#3f2a1e]">
            Our Mission
          </h3>
        </div>

        <p className="text-[#6b5542] text-[16px] leading-relaxed">
          Our Mission is to achieve excellence through experiential learning,
          which is creative, futuristic and lifelong. This helps students
          acquire the skills and tools needed for personal and organizational growth.
        </p>

        <div className="mt-6 pt-5 border-t border-[#e8d9d0]">
          <span className="text-sm font-medium text-[#8c6f47]">
            Creative • Futuristic • Lifelong
          </span>
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