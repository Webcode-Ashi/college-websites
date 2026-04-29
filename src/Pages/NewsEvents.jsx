import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react"; // Icons ke liye lucide-react use kiya hai

const NewsEvents = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "" });
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-[#fafaf9]">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE — Newsletter (Premium Blue Theme) */}
          <div className="bg-[#eff6ff] rounded-[2.5rem] p-8 md:p-14 border border-[#dbeafe] shadow-sm relative overflow-hidden">
            {/* Background Decorative Circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="text-4xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
                  Stay in the Loop
                </h3>
                <p className="text-[#4b5563] text-lg max-w-md">
                  Subscribe to our newsletter for the latest academic updates and campus news.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-white rounded-3xl p-10 text-center shadow-xl border border-blue-100 animate-in fade-in zoom-in duration-500">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-[#1e3a8a] text-2xl mb-2">
                    You're All Set!
                  </h4>
                  <p className="text-gray-500">
                    Thank you for subscribing to Rizvi updates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-blue-900/50 uppercase ml-2 tracking-widest">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-6 py-4 outline-none text-[#1e3a8a] transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-blue-900/50 uppercase ml-2 tracking-widest">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white border border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-6 py-4 outline-none text-[#1e3a8a] transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-3 group"
                  >
                    Subscribe Now 
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}

              <p className="text-center text-xs text-blue-400 mt-8 font-medium">
                🔒 Your data is secure. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — Campus Map */}
          <div className="h-full flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Location</span>
              <h3 className="text-4xl font-bold text-[#1e3a8a] mt-2 mb-4">
                Visit Our Campus
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience the atmosphere of Rizvi Educational Campus firsthand. 
                Our doors are always open for future leaders.
              </p>
            </div>

            <div className="h-[450px] rounded-[2.5rem] overflow-hidden relative shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.836067710777!2d81.42851887532296!3d25.44372997755333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398539050d53348d%3A0x6739f82635928d67!2sRizvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Rizvi Campus Map"
                className="grayscale-[0.2] contrast-[1.1]"
              ></iframe>

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-2xl">
                    <SchoolIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1e3a8a] text-lg">
                      Rizvi Educational Campus
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Karari, Kaushambi, Uttar Pradesh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Simple Icon for the map badge
const SchoolIcon = ({className}) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default NewsEvents;