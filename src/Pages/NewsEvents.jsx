import React, { useState } from "react";

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
        setFormData({
          name: "",
          email: "",
        });
      }, 2000);
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE — Newsletter */}
          <div className="bg-[#f8f4ee] rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="heading-font text-3xl font-medium text-[#3f2a1e] mb-3">
                  Subscribe to Our Newsletter
                </h3>

                <p className="text-[#6b5542] max-w-md mx-auto">
                  Get latest updates on admissions, events, and opportunities
                  directly in your inbox.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-white rounded-2xl py-10 text-center max-w-md mx-auto">
                  <div className="text-5xl mb-4">🎉</div>

                  <h4 className="font-medium text-[#3f2a1e] text-xl mb-2">
                    Thank You!
                  </h4>

                  <p className="text-[#6b5542]">
                    You've been successfully subscribed.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 max-w-xl mx-auto"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-[#e8d9d0] focus:border-[#d4af7a] rounded-2xl px-6 py-4 outline-none text-[#3f2a1e]"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-white border border-[#e8d9d0] focus:border-[#d4af7a] rounded-2xl px-6 py-4 outline-none text-[#3f2a1e]"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#3f2a1e] hover:bg-black text-white font-medium px-10 py-4 rounded-2xl transition-all duration-300"
                  >
                    Subscribe Now →
                  </button>
                </form>
              )}

              <p className="text-center text-xs text-[#8c6f47] mt-6">
                We respect your inbox. You can unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — Campus Map */}
          <div>
            <div className="mb-6">
              <h3 className="heading-font text-3xl font-medium text-[#3f2a1e] mb-2">
                Visit Our Campus
              </h3>

              <p className="text-[#6b5542]">
                Explore Rizvi Educational Campus located in Karari,
                Kaushambi, Uttar Pradesh.
              </p>
            </div>

            <div className="h-[500px] rounded-3xl overflow-hidden relative shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3688796.221196323!2d81.423434!3d25.460318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b2c7e3f77c8bf%3A0xb369d17ed3913939!2sDr.%20Akhtar%20Rizvi%20Educational%20Trust!5e0!3m2!1sen!2sus!4v1777406931326!5m2!1sen!2sus" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Rizvi Campus Map"
              ></iframe>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl max-w-xs shadow-lg">
                <div className="font-medium text-[#3f2a1e]">
                  Rizvi Educational Campus
                </div>

                <div className="text-sm text-[#6b5542] mt-1">
                  Karari, Kaushambi, Uttar Pradesh
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsEvents;