import React from "react";
import { MapPin, Mail, Phone, Clock, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#fafaf9]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE — Contact Info (Compact) */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <h2 className="heading-font text-4xl font-bold text-[#1e293b]">
                Contact <span className="text-blue-500 underline decoration-blue-100 underline-offset-4">Us</span>
              </h2>
              <p className="mt-3 text-stone-500 text-sm max-w-sm">
                Have questions? Our team is here to guide you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Main Campus - Sleek */}
              <div className="sm:col-span-2 bg-white p-5 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <MapPin className="text-blue-600 group-hover:text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e293b] text-base">Main Campus</h4>
                    <p className="text-xs text-stone-500 leading-tight">Karari, Kaushambi (U. P.) - 212 206</p>
                  </div>
                </div>
              </div>

              {/* Phone Card - Compact */}
              <div className="bg-white p-5 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                  <Phone className="text-blue-600 group-hover:text-white w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#1e293b] text-sm mb-1">Call Us</h4>
                <p className="text-[11px] text-stone-500 leading-none">7080205245, 46</p>
              </div>

              {/* Email Card - Compact */}
              <div className="bg-white p-5 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all group overflow-hidden">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                  <Mail className="text-blue-600 group-hover:text-white w-4 h-4" />
                </div>
                <h4 className="font-bold text-[#1e293b] text-sm mb-1">Email</h4>
                <p className="text-[10px] text-stone-500 truncate">admissions@rizvi.edu.in</p>
              </div>

              {/* City Office - Slim Dark Card */}
              <div className="sm:col-span-2 bg-[#1e293b] p-5 rounded-3xl shadow-lg shadow-blue-900/10 text-white relative overflow-hidden">
                <div className="flex items-center gap-4 relative z-10">
                   <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                     <Clock className="text-blue-400 w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="font-bold text-sm">City Office (Prayagraj)</h4>
                     <p className="text-[10px] text-stone-300">Civil Lines, Elgin Road, Prayagraj</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Inquiry Form (Sleek & Level) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-stone-50">
            <div className="mb-8">
              <h2 className="heading-font text-4xl font-bold text-[#1e293b]">
                Get In <span className="text-blue-500">Touch</span>
              </h2>
              <p className="text-stone-400 text-xs mt-1">We'll reach out within 24 hours.</p>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">First Name</label>
                  <input
                    type="text"
                    placeholder="Rahul"
                    className="w-full bg-stone-50 border-none rounded-xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Kumar"
                    className="w-full bg-stone-50 border-none rounded-xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="rahul@example.com"
                  className="w-full bg-stone-50 border-none rounded-xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  rows="3"
                  placeholder="Your message..."
                  className="w-full bg-stone-50 border-none rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-[#1e293b] text-white rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-3 group text-sm shadow-md"
              >
                Send Inquiry 
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