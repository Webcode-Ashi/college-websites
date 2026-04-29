import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../Components/layout/Navbar';
import About from './About';
import Institution from '../Pages/Institution';
import NewsEvents from '../Pages/NewsEvents';
import Contact from '../Pages/Contact';
import Footer from '../Components/Layout/Footer'
import bg1 from "../../public/hero.jpg";
import bg2 from "../../public/heroacadmy.jpg";
import bg3 from "../../public/heroengeneering.jpg";
import bg4 from "../../public/herolaw.jpg";
import bg5 from "../../public/heroschool.jpg";
const heroData = [
  {
    title: "Dr. A. H. Rizvi Degree",
    highlight: "College",
    paragraph:
      "Approved by National Council of Technical Education (NCTE), New Delhi. and affiliated to Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj",
    image: bg1,
  },
  {
    title: "Dr. Rizvi College of",
    highlight: "Engineering",
    paragraph:
      "Approved by National Council of Technical Education (NCTE), New Delhi and affiliated with top academic institutions for technical excellence.",
    image: bg2,
  },
  {
    title: "Dr. Rizvi College of",
    highlight: "Law",
    paragraph:
      "Affiliated to Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj, U.P. And Approved by Bar Council of India (BCI), New Delhi",
    image: bg3,
  },
  {
    title: "Dr. Rizvi College of Education",
    highlight: "(B.Ed. & D.El.Ed.)",
    paragraph:
      "Approved by National Council of Technical Education (NCTE), New Delhi and affiliated to Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj.",
    image: bg4,
  },
  {
    title: "Dr. Rizvi",
    highlight: "Springfield School",
    paragraph:
      "Affiliated to Central Board of Secondary Education (CBSE), New Delhi.",
    image: bg5,
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === heroData.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(slider);
  }, []);
  return (
    <>

      {/* PREMIUM HERO SECTION */}
      <section
      className="h-screen flex items-center relative overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: `url(${heroData[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 z-10"></div>

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 relative z-20">
        <div className="max-w-2xl">

          {/* Main Heading */}
          <h1 className="heading-font text-6xl md:text-7xl lg:text-6xl leading-none font-medium text-black tracking-tighter mb-6 transition-all duration-500">
            {heroData[current].title}{" "}
            <span className="text-[#d4af7a]">
              {heroData[current].highlight}
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-black/90 text-lg md:text-xl max-w-md mb-12 leading-relaxed transition-all duration-500">
            {heroData[current].paragraph}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/admissions"
              className="group px-8 py-4 bg-[#d4af7a] hover:bg-[#c9a98a] text-[#3f2a1e] font-medium rounded-3xl flex items-center gap-3 transition-all duration-300 shadow-lg shadow-[#d4af7a]/30"
            >
              Explore Programs
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/institutions"
              className="px-8 py-4 border border-white/70 hover:bg-white/10 text-white font-medium rounded-3xl transition-all duration-300 backdrop-blur-sm"
            >
              Discover Campuses
            </a>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 text-black">
            <div>
              <div className="text-4xl md:text-5xl font-semibold heading-font">
                25+
              </div>
              <div className="text-black/70 text-sm tracking-widest mt-1">
                INSTITUTIONS
              </div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-semibold heading-font">
                50k+
              </div>
              <div className="text-black/70 text-sm tracking-widest mt-1">
                ALUMNI
              </div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-semibold heading-font">
                500+
              </div>
              <div className="text-black/70 text-sm tracking-widest mt-1">
                FACULTY
              </div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-semibold heading-font">
                98%
              </div>
              <div className="text-black/70 text-sm tracking-widest mt-1">
                PLACEMENT SUPPORT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <About/>
      <Institution/>
      <NewsEvents/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;