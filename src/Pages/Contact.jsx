import React from "react";
import { MapPin, Mail,Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#f8f4ee]">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="bg-white rounded-3xl p-16 grid md:grid-cols-2 gap-16">
          
          {/* Left Content */}
          <div>
            <h2 className="heading-font text-5xl mb-5">Contact Us</h2>

            <p className="max-w-xs text-[#6b5542] leading-relaxed">
              Have questions about admissions, programs, or campus visits?
              Our team is here to help.
            </p>

            <div className="mt-5 space-y-3">
              
              {/* Address */}
              <div className="flex gap-5">
                <MapPin className="text-[#d4af7a] w-7 h-7 mt-1" />

                <div>
                  <div className="font-medium text-[#3f2a1e]">
                    Rizvi Educational Campus
                  </div>

                  <div className="text-sm text-[#6b5542]">
                    Karari, Kaushambi (U. P.) - 212 206
                  </div>
                </div>
              </div>
             {/*Phone */}
              <div className="flex gap-5">
                <Phone className="text-[#d4af7a] w-7 h-7" />

                <div className="text-sm text-[#6b5542]">
                   7080205245, 7080205246
                </div>
              </div>
              {/* Email */}
              <div className="flex gap-5">
                <Mail className="text-[#d4af7a] w-7 h-7" />

                <div className="text-sm text-[#6b5542]">
                  admissions@rizvi.edu.in
                </div>
              </div>
            </div>
            <h2 className="heading-font text-2xl  my-2">City Office</h2>
            <div className="mt-5 space-y-3">
              
              {/* Address */}
              <div className="flex gap-5">
                <MapPin className="text-[#d4af7a] w-7 h-7 mt-1" />

                <div>
                  <div className="font-medium text-[#3f2a1e]">
                    Rizvi Group of Institutions

                  </div>

                  <div className="text-sm text-[#6b5542]">
                    40E/1, LBS Marg, Elgin Road, (Opp. A. H. Wheelers) Civil Lines, Prayagraj
                  </div>
                </div>
              </div>
             {/*Phone */}
              <div className="flex gap-5">
                <Phone className="text-[#d4af7a] w-7 h-7" />

                <div className="text-sm text-[#6b5542]">
                   +91 7080205252
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-6">
            <h2 className="heading-font text-5xl mb-5">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#f8f4ee] border-0 rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-[#d4af7a]"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#f8f4ee] border-0 rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-[#d4af7a]"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#f8f4ee] border-0 rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-[#d4af7a]"
            />

            <textarea
              rows="4"
              placeholder="How can we help you?"
              className="w-full bg-[#f8f4ee] border-0 rounded-3xl px-6 py-4 outline-none focus:ring-1 focus:ring-[#d4af7a]"
            ></textarea>

            <button
              type="button"
              className="w-full py-4 bg-[#3f2a1e] text-white rounded-3xl font-medium hover:bg-black transition-colors duration-300"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;