import React from 'react';
import { ExternalLink } from 'lucide-react';

const Institutions = () => {
  const institutionsData = [
    {
      id: 1,
      title: "Rizvi College of Engineering",
      subtitle: "Engineering & Technology",
      description: "Rizvi Group offers four year (full time) AICTE approved engineering (B. Tech) programmes...",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600",
      programs: ["B.Tech (CS)","B.Tech (CE)","B.Tech (EC)","B.Tech (ME)","MBA","Polytechnic"],
      website: "https://www.drce.org/" // Specific link for Engineering
    },
    {
      id: 2,
      title: "Art & Science",
      subtitle: "Arts, Science & Commerce",
      description: "Rizvi Group of Institution offers Graduation degree programms in Art & Science Streams...",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
      programs: ["B.A", "B.Sc", "B.Com"],
      website: "https://rizvilaw.in/" 
    },
    {
      id: 3,
      title: "Education (B.Ed. & D.El.Ed)",
      subtitle: "Teacher Training",
      description: "Rizvi Group of Institution offers B. Ed. & D.El.Ed. programme approved by NCTE...",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
      programs: ["B.Ed", "D.El.Ed"],
      website: "https://www.rizvidegree.co.in/"
    },
    {
      id: 4,
      title: "Law",
      subtitle: "Legal Education",
      description: "Bachelor degree programms in Law (LL.B.) affiliated to Prof. Rajendra Singh University...",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
      programs: ["LL.B(3 years)", "BA LL.B(5 years)"],
      website: "https://www.rizvidegree.co.in/"
    },
    {
      id: 5,
      title: "Springfield",
      subtitle: "CBSE School",
      description: "Intermediate (10 + 2) level English medium school, affiliated to CBSE, New Delhi.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
      programs: ["Classes I-XII","CBSE"],
      website: "https://www.rlajnp.co.in/"
    },
    {
      id: 6,
      title: "Learner' Academy",
      subtitle: "Springfield Group",
      description: "Intermediate (10 + 2) level English medium school, affiliated to CBSE, New Delhi.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600",
      programs: ["Classes I-XII","CBSE"],
      website: "https://www.drsf.co.in/"
    }
  ];

  return (
    <div className="bg-[#fafaf9] py-16">
      {/* Header Section */}
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 text-center mb-16">
        <h1 className="heading-font text-5xl md:text-7xl font-bold tracking-tighter text-[#1e293b]">
          Our <span className="text-[#1E3A5F]">Institutions</span>
        </h1>
        <p className="mt-6 text-[#475569] text-lg max-w-3xl mx-auto font-medium">
          Choose your path to excellence across our specialized campuses.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {institutionsData.map((inst) => (
            <div key={inst.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-[#e2e8f0] shadow-sm transition-all hover:shadow-2xl hover:border-[#1E3A5F]/10">
              
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={inst.image} 
                  alt={inst.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                   <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-widest border border-white/30">
                    {inst.subtitle}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1e293b] mb-4 group-hover:text-[#1E3A5F] transition-colors">
                  {inst.title}
                </h3>
                
                {/* Program Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {inst.programs.map((p, i) => (
                    <span key={i} className="px-3 py-1 bg-[#f1f5f9] text-[#1E3A5F] text-[10px] font-extrabold rounded-full border border-[#e2e8f0]">
                      {p}
                    </span>
                  ))}
                </div>

                <p className="text-[#64748b] text-sm leading-relaxed line-clamp-3 mb-8">
                  {inst.description}
                </p>

                {/* Visit Website Button - Directly Link, No Popup */}
                <a 
                  href={inst.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-4 bg-[#1E3A5F] text-white font-bold rounded-2xl gap-3 hover:bg-black transition-all shadow-lg shadow-blue-900/10 group/btn"
                >
                  Visit Website 
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Institutions;