import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../Components/Layout/Navbar';
import About from './About';
import Institution from '../Pages/Institution';
import Contact from '../Pages/Contact';
import Footer from '../Components/Layout/Footer'



const Home = () => {
 



const images = [
  "/heroeng.jpg",
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero1.jpg",
  "/heroschool.jpg",
];

const [currentImage, setCurrentImage] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);
const [open, setOpen] = useState(false);

const [formData, setFormData] = useState({
  email: "",
  name: "",
  father: "",
  mobile: "",
  lastClass: "",
  address: "",
  course: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("📩 Enquiry Data:", formData);

  alert("🎉 Enquiry Submitted Successfully!");

  setFormData({
    email: "",
    name: "",
    father: "",
    mobile: "",
    lastClass: "",
    address: "",
    course: ""
  });

  setOpen(false);
};
  return (
    <>

      {/* PREMIUM HERO SECTION */}
    <section className="min-h-screen flex items-start bg-[#fafaf9] px-6 md:px-16 pt-10 pb-5">

  <div className="max-w-screen-2xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">

    {/* LEFT BIG IMAGE */}
    <div className="relative w-full">

  {/* MAIN IMAGE */}
  <img
    src={images[currentImage]}
    alt="Campus"
    className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl md:rounded-3xl shadow-xl transition-all duration-700"
  />

  {/* THUMBNAILS */}
  <div className="
    mt-4 md:absolute md:-bottom-16 md:right-6 
    flex gap-3 overflow-x-auto md:overflow-visible
    px-2 md:px-0
  ">
    {images.map((img, i) => (
      <img
        key={i}
        src={img}
        onClick={() => setCurrentImage(i)}
        className={`
          w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg md:rounded-xl 
          shadow-md border-4 cursor-pointer transition-all duration-300
          ${currentImage === i ? "border-orange-500 scale-105" : "border-white opacity-70"}
        `}
      />
    ))}
  </div>

</div>

    {/* RIGHT CONTENT */}
    <div>
  <p className="text-[#1f2a44] font-semibold tracking-widest uppercase text-sm md:text-base">
  Empowering Education • Building Future Leaders
</p>

<h1 className="text-4xl md:text-5xl font-bold text-[#1f2a44] mt-4 leading-tight">
  Dr. Rizvi College of Education
  <span className="text-[#c9a06c]">
    B.Ed. & D.El.Ed.
  </span>
</h1>

<p className="mt-6 text-[#4b5563] leading-relaxed max-w-xl text-base md:text-lg">
  Excellence in academics, innovation in learning, and commitment to
  shaping responsible professionals. Affiliated with reputed universities
  and approved by national regulatory bodies, we nurture talent for a
  global future.
</p>
{/* CTA BLOCK - RIGHT CONTENT INSIDE HERO */}
<div className="w-full flex flex-col items-start gap-3 py-4 border-b">

  {/* ROW 1: Call + Enquiry (LEFT ALIGNED) */}
  <div className="flex flex-wrap items-center gap-4">

    {/* Call Button */}
    <a
      href="tel:18002005802"
      className="px-6 py-3 rounded-full bg-[#2c3e66] text-white font-medium hover:bg-[#2c3e66] transition shadow-md"
    >
      📞 Toll Free: 1800-200-5802
    </a>

    {/* Enquiry Button */}
    <button
      onClick={() => setOpen(true)}
      className="px-6 py-3 rounded-full border border-[#1f2a44] text-[#1f2a44] font-medium hover:bg-[#1f2a44] hover:text-white transition"
    >
      Enquiry Now
    </button>
    {open && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">

    <div className="bg-white w-[95%] md:w-[600px] rounded-2xl shadow-2xl p-6 relative">

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-4 text-xl text-gray-500 hover:text-black"
      >
        ✕
      </button>

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-[#1f2a44]">
        Student Enquiry Form
      </h2>

      <p className="text-sm text-gray-600 mb-4">
        Dr. Rizvi Group of Institutions, Kaushambi (U.P.)
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="father"
          value={formData.father}
          onChange={handleChange}
          placeholder="Father Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number *"
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="lastClass"
          value={formData.lastClass}
          onChange={handleChange}
          placeholder="Last Class Passed"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address *"
          className="w-full border p-3 rounded-lg"
          required
        ></textarea>

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        >
          <option value="">Select Course</option>
          <option>Engineering</option>
          <option>Law</option>
          <option>Education</option>
          <option>Degree College</option>
          <option>School</option>
        </select>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-[#1f2a44] text-white py-3 rounded-lg hover:bg-[#2c3e66] transition"
        >
          Submit Enquiry
        </button>

      </form>

    </div>
  </div>
)}

  </div>

  {/* ROW 2: Registration (LEFT ALIGNED) */}
  <button className="px-6 py-3 rounded-full bg-[#c9a06c] text-white font-medium font-bold hover:bg-[#b68f5a] transition shadow-md">
    Registration Open for Session 2025 - 26
  </button>

</div>
      {/* STATS */}
      <div className="flex flex-wrap gap-10 mt-10">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full text-xl">
            😊
          </div>
          <div>
            <h3 className="text-xl font-bold">30K</h3>
            <p className="text-gray-500 text-sm">Happy Students</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full text-xl">
            🌐
          </div>
          <div>
            <h3 className="text-xl font-bold">20K</h3>
            <p className="text-gray-500 text-sm">Homes Sold</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-500 rounded-full text-xl">
            👔
          </div>
          <div>
            <h3 className="text-xl font-bold">35+</h3>
            <p className="text-gray-500 text-sm">Connection</p>
          </div>
        </div>

      </div>
    </div>

  </div>

</section>
      <About/>
      <Institution/>
      
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;