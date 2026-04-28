import React from 'react';

import InstitutionCard from '../components/common/InstitutionCard';

const Institutions = () => {

  const institutionsData = [
    {
      id: 1,
      title: " Engineering",
      subtitle: "Engineering & Technology",
      description: "Rizvi Group offers four year (full time) AICTE approved engineering (B. Tech) programmes. Institution also offers two year (full time) Master of Business Administration (MBA) programmes. Along with these two degree programs there is also a polytechnic diploma of 3 years available for students.",
      image: "../../Public/cog.png",
      programs: ["B.Tech", "MBA", "Polytechnic"]
    },
    {
      id: 2,
      title: "Art & Science",
      subtitle: "Arts, Science & Commerce",
      description: "Rizvi Group of Institution offers Three Year (Full Time) graduation degree programms in Art & Science Streams. Institution affiliated to Prof. Rajendra Singh (Rajju Bhaiya) University Prayagraj.",
      image: "../../Public/science.png",
      programs: ["B.A", "B.Sc", "B.Com", "M.A", "M.Com"]
    },
    {
      id: 3,
      title: "Education(B.Ed. & D.El.Ed)",
      subtitle: "Legal Education",
      description: "Rizvi Group of Institution offers Two year / Four Semester B. Ed. & Two year / Four Semester (Full Time) D.El.Ed. programme approved by NCTE & affiliated to State Council for Educational Research & Training , Uttar Pradesh.",
      image: "../../Public/b_ed.png",
      programs: ["LL.B", "BA LL.B", "LL.M"]
    },
    {
      id: 4,
      title: "Law",
      subtitle: "Management ",
      description: "Rizvi Group of Institution offers Three Year (Full Time) Bar Council of India (BCI) approved Bachelor degree programms in Law (LL.B.). Institution is affiliated to Prof. Rajendra Singh (Rajju Bhaiya) University Prayagraj",
      image: "../../Public/law.png",
      programs: ["MBA", "PGDM", "BMS"]
    },
    {
      id: 5,
      title: "Springfield",
      subtitle: "Teacher Training",
      description: "Rizvi Group of Institution also have Intermediate (10 + 2) level English medium school, affiliated to Central Board of Secondary Education (CBSE), New Delhi.",
      image: "../../Public/springfields.png",
      programs: ["B.Ed", "M.Ed"]
    },
    {
      id: 6,
      title: "Learner' Academy",
      subtitle: "Springfield Group",
      description: "Rizvi Group of Institution also have Intermediate (10 + 2) level English medium school, affiliated to Central Board of Secondary Education (CBSE), New Delhi.",
      image: "../../Public/springfields (1).png",
      programs: ["Multiple Disciplines"]
    }
    
  ];

  const handleReadMore = (title) => {
    alert(`🔗 Opening detailed page for: ${title}\n\n(In future: This will navigate to individual institution detail page)`);
  };

  return (
    <>
      

      {/* Header */}
      <section >
        <div className="max-w-screen-2xl mx-auto px-8 py-5 md:px-16">
          <div className="text-center max-w-3xl mx-auto">
          
            <h1 className="heading-font text-6xl md:text-7xl font-medium tracking-tighter text-[#3f2a1e]">
              Our Institutions
            </h1>
            <p className="mt-6 text-[#6b5542] text-lg">
              Discover our network of premier educational institutions committed to academic excellence and student success.
            </p>
          </div>
        </div>
      </section>

      {/* Institutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {institutionsData.map((inst) => (
              <InstitutionCard
                key={inst.id}
                title={inst.title}
                subtitle={inst.subtitle}
                description={inst.description}
                image={inst.image}
                programs={inst.programs}
                onReadMore={() => handleReadMore(inst.title)}
              />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Institutions;