import React from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    // Background set to pure white
    <section id="contact" className="py-20 bg-white"> 
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center justify-center">
          
          {/* LEFT SIDE — Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="heading-font text-5xl font-extrabold text-[#1e293b] leading-tight">
                Contact <span className="text-[#1E3A5F]">Us</span>
              </h2>
              <p className="mt-4 text-slate-500 text-base">
                Have questions? Our team is here to guide you through your journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Main Campus - White with Blue Border */}
              <div className="sm:col-span-2 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgba(30,58,95,0.06)] hover:border-[#1E3A5F]/20 transition-all group">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#1E3A5F] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/20">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e293b] text-lg">Main Campus</h4>
                    <p className="text-sm text-slate-500">Karari, Kaushambi (U.P.) - 212 206</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:-translate-y-1 transition-all group">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1E3A5F] transition-colors">
                  <Phone className="text-[#1E3A5F] group-hover:text-white w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#1e293b] text-sm mb-1">Call Us</h4>
                <p className="text-[11px] text-slate-500 font-bold">7080205245, 46</p>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:-translate-y-1 transition-all group overflow-hidden">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1E3A5F] transition-colors">
                  <Mail className="text-[#1E3A5F] group-hover:text-white w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#1e293b] text-sm mb-1">Email</h4>
                <p className="text-[10px] text-slate-500 truncate font-bold">admissions@rizvi.edu.in</p>
              </div>

              {/* City Office */}
              <div className="sm:col-span-2 bg-[#1E3A5F] p-6 rounded-[2rem] shadow-xl shadow-blue-900/20 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                <div className="flex items-center gap-5 relative z-10">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                     <Clock className="text-white w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-base">City Office</h4>
                     <p className="text-xs text-blue-50/80">Civil Lines, Elgin Road, Prayagraj</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-50">
            <div className="mb-10">
              <h2 className="heading-font text-4xl font-bold text-[#1e293b]">
                Get In <span className="text-[#1E3A5F]">Touch</span>
              </h2>
              <div className="w-12 h-1 bg-[#1E3A5F] mt-3 rounded-full"></div>
            </div>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-[#1E3A5F]/10 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-[#1E3A5F]/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-[#1E3A5F]/10 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  rows="3"
                  placeholder="Tell us how we can help..."
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-[#1E3A5F]/10 transition-all"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-5 bg-[#1E3A5F] text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-3 group text-sm shadow-lg shadow-blue-900/10"
              >
                Send Message 
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;