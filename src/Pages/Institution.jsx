import React, { useState } from 'react';

const Institutions = () => {
  const [modalContent, setModalContent] = useState(null);

  const institutionsData = [
    {
      id: 1,
      title: "Rizvi College of Engineering",
      subtitle: "Engineering & Technology",
      description: "Rizvi Group offers four year (full time) AICTE approved engineering (B. Tech) programmes. Institution also offers two year (full time) Master of Business Administration (MBA) programmes. Along with these two degree programs there is also a polytechnic diploma of 3 years available for students.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600",
      programs: ["B.Tech", "MBA", "Polytechnic"]
    },
    {
      id: 2,
      title: "Art & Science",
      subtitle: "Arts, Science & Commerce",
      description: "Rizvi Group of Institution offers Three Year (Full Time) graduation degree programms in Art & Science Streams. Institution affiliated to Prof. Rajendra Singh (Rajju Bhaiya) University Prayagraj.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
      programs: ["B.A", "B.Sc", "B.Com", "M.A", "M.Com"]
    },
    {
      id: 3,
      title: "Education (B.Ed. & D.El.Ed)",
      subtitle: "Teacher Training",
      description: "Rizvi Group of Institution offers Two year / Four Semester B. Ed. & Two year / Four Semester (Full Time) D.El.Ed. programme approved by NCTE & affiliated to State Council for Educational Research & Training, Uttar Pradesh.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
      programs: ["B.Ed", "D.El.Ed"]
    },
    {
      id: 4,
      title: "Law",
      subtitle: "Legal Education",
      description: "Rizvi Group of Institution offers Three Year (Full Time) Bar Council of India (BCI) approved Bachelor degree programms in Law (LL.B.). Institution is affiliated to Prof. Rajendra Singh (Rajju Bhaiya) University Prayagraj",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
      programs: ["LL.B", "BA LL.B", "LL.M"]
    },
    {
      id: 5,
      title: "Springfield",
      subtitle: "Management",
      description: "Rizvi Group of Institution also have Intermediate (10 + 2) level English medium school, affiliated to Central Board of Secondary Education (CBSE), New Delhi.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600",
      programs: ["B.Ed", "M.Ed"]
    },
    {
      id: 6,
      title: "Learner' Academy",
      subtitle: "Springfield Group",
      description: "Rizvi Group of Institution also have Intermediate (10 + 2) level English medium school, affiliated to Central Board of Secondary Education (CBSE), New Delhi.",
      // New high-quality Academy/School image
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600",
      programs: ["Multiple Disciplines"]
    }
  ];

  return (
    <div className="bg-[#fafaf9]">
      {/* Header Section */}
      <section className='pt-10 pb-10 bg-[#fafaf9]'>
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 text-center">
          <h1 className="heading-font text-5xl md:text-7xl font-bold tracking-tighter text-[#1e293b]">
            Our <span className="text-[#94a3b8]">Institutions</span>
          </h1>
          <p className="mt-6 text-[#475569] text-lg max-w-3xl mx-auto">
            Discover our network of premier educational institutions committed to academic excellence and student success.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 bg-[#fafaf9]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {institutionsData.map((inst) => (
              <div key={inst.id} className="group bg-white rounded-3xl overflow-hidden border border-[#e2e8f0] shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                
                {/* Image Section - Reduced Height for Compact Look */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={inst.image} 
                    alt={inst.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                  />
                  {/* View Details Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#1e293b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => setModalContent(inst)}
                      className="px-6 py-2 bg-white text-[#1e293b] font-bold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Content Section - Compact Padding */}
                <div className="p-6">
                  <span className="text-[10px] font-bold text-[#94a3b8] tracking-[0.2em] uppercase">
                    {inst.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#1e293b] mt-1 mb-3 line-clamp-1">
                    {inst.title}
                  </h3>
                  
                  {/* Program Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {inst.programs.map((p, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#f1f5f9] text-[#475569] text-[10px] font-bold rounded-md border border-[#e2e8f0]">
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <button 
                    onClick={() => setModalContent(inst)}
                    className="text-[#1e293b] font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {modalContent && (
        <div className="fixed inset-0 bg-[#0f172a]/60 backdrop-blur-sm z-50 flex items-center justify-center p-6" onClick={() => setModalContent(null)}>
          <div className="bg-white rounded-[2.5rem] max-w-2xl w-full p-10 relative shadow-2xl animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setModalContent(null)} 
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-[#f1f5f9] rounded-full text-[#1e293b] hover:bg-[#e2e8f0] transition-colors"
            >
              ✕
            </button>
            
            <span className="text-xs font-bold text-[#94a3b8] tracking-widest uppercase">{modalContent.subtitle}</span>
            <h2 className="text-4xl font-bold text-[#1e293b] mt-2 mb-6">{modalContent.title}</h2>
            
            <div className="h-1 w-20 bg-[#94a3b8] rounded-full mb-8"></div>
            
            <p className="text-[#475569] text-lg leading-relaxed italic">
              "{modalContent.description}"
            </p>

            <div className="mt-10 pt-8 border-t border-[#f1f5f9]">
              <button 
                onClick={() => setModalContent(null)}
                className="w-full py-4 bg-[#1e293b] text-white font-bold rounded-2xl hover:bg-[#334155] transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Institutions;