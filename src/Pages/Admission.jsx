import React, { useState } from 'react';
import { User, Mail, Phone, BookOpen, School, FileText, UploadCloud, Send, AlertTriangle } from 'lucide-react';
import Footer from '../Components/Layout/Footer';
const Admission = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', course: '', institution: '', aadhar: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🔄 Application Logic: In dynamic setup, this would send data to backend.");
    console.log(formData);
  };

  // Utility component for Form Card to maintain Google Form style
  const FormCard = ({ children, title, icon: Icon, required }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all focus-within:border-l-4 focus-within:border-l-[#d4af7a] focus-within:shadow-lg">
      {title && (
        <div className="px-8 pt-6 pb-2 flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-[#3f2a1e] opacity-70" />}
          <h3 className="text-xl font-semibold text-[#3f2a1e]">
            {title} {required && <span className="text-red-500">*</span>}
          </h3>
        </div>
      )}
      <div className="px-8 py-6">
        {children}
      </div>
    </div>
  );

  return (
    <>
    <div className="bg-[#f0f4f8] min-h-screen pb-24 font-sans">
      
      {/* 1. Google Form Style Top Header Block */}
      <div className="h-3 w-full bg-[#3f2a1e] rounded-t-lg max-w-4xl mx-auto mt-10"></div>
      
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Title Card */}
        <div className="bg-white rounded-b-lg shadow-md border border-gray-200 border-t-0 p-10 mb-8">
          <h1 className="heading-font text-4xl md:text-5xl font-bold text-[#3f2a1e] tracking-tight">
            Online Admission Application
          </h1>
          <p className="mt-4 text-[#6b5542] text-base leading-relaxed max-w-2xl">
            Please fill out this form accurately to apply for admission. Fields marked with an asterisk (<span className="text-red-500">*</span>) are required. A copy of your responses will be emailed to the address you provide.
          </p>
          <div className="h-px w-full bg-gray-200 mt-8 mb-6"></div>
          <div className="text-sm text-red-600 font-medium">* Required</div>
        </div>

        {/* 2. Requirements Alert Box (SVG based - No Image needed) */}
        <div className="bg-[#fffbeb] rounded-lg p-6 border border-[#fef3c7] flex items-start gap-4 mb-10 shadow-inner">
          <AlertTriangle className="w-12 h-12 text-[#d4af7a] mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-[#92400e]">Important: Pre-requisites</h3>
            <p className="text-sm text-[#b45309] mb-3">Ensure you have scanned copies of the following documents before proceeding:</p>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-[#b45309] font-medium list-disc list-inside">
              <li>10th & 12th Marksheets</li>
              <li>Identity Proof (Aadhar/Passport)</li>
              <li>Recent Photo & Signature</li>
              <li>Transfer Certificate</li>
            </ul>
          </div>
        </div>

        {/* 3. Main Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Email (Standard Google Form First Question) */}
          <FormCard required>
            <div className="space-y-3">
              <label className="text-base font-semibold text-[#3f2a1e]">Email Address <span className="text-red-500">*</span></label>
              <input 
                type="email" name="email" required onChange={handleChange}
                placeholder="Your email"
                className="w-full md:w-2/3 py-3 border-b-2 border-gray-300 focus:border-[#d4af7a] outline-none transition-colors text-base placeholder:text-gray-400 bg-transparent"
              />
            </div>
          </FormCard>

          {/* Section 2: Personal Information */}
          <div className="space-y-8">
            <FormCard title="Full Name" icon={User} required>
              <input 
                type="text" name="fullName" required onChange={handleChange}
                placeholder="Your answer"
                className="w-full md:w-2/3 py-3 border-b-2 border-gray-300 focus:border-[#d4af7a] outline-none transition-colors text-base Placeholder:text-gray-400 bg-transparent"
              />
            </FormCard>

            <FormCard title="Phone Number (WhatsApp)" icon={Phone} required>
              <input 
                type="tel" name="phone" required onChange={handleChange}
                placeholder="Your answer"
                className="w-full md:w-2/3 py-3 border-b-2 border-gray-300 focus:border-[#d4af7a] outline-none transition-colors text-base Placeholder:text-gray-400 bg-transparent"
              />
            </FormCard>

            <FormCard title="Aadhar Number" icon={FileText}>
              <input 
                type="text" name="aadhar" onChange={handleChange}
                placeholder="Your answer"
                className="w-full md:w-2/3 py-3 border-b-2 border-gray-300 focus:border-[#d4af7a] outline-none transition-colors text-base Placeholder:text-gray-400 bg-transparent"
              />
            </FormCard>
          </div>

          {/* Section 3: Academic Preferences */}
          <div className="space-y-8">
            <FormCard title="Select Institution" icon={School} required>
              <div className="space-y-4">
                {[
                  "Rizvi College of Engineering",
                  "Rizvi College of Arts, Science & Commerce",
                  "Rizvi Law College",
                  "Springfield School (CBSE)"
                ].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="institution" value={option} onChange={handleChange} required
                      className="w-5 h-5 accent-[#3f2a1e] cursor-pointer"
                    />
                    <span className="text-base text-[#6b5542] group-hover:text-[#3f2a1e]">{option}</span>
                  </label>
                ))}
              </div>
            </FormCard>

            <FormCard title="Interested Course" icon={BookOpen} required>
              <input 
                type="text" name="course" required onChange={handleChange}
                placeholder="Your answer (e.g., B.Tech CS, B.Sc, LL.B)"
                className="w-full md:w-2/3 py-3 border-b-2 border-gray-300 focus:border-[#d4af7a] outline-none transition-colors text-base Placeholder:text-gray-400 bg-transparent"
              />
            </FormCard>
          </div>

          {/* Section 4: Document Uploads */}
          <FormCard title="Document Uploads" icon={UploadCloud}>
            <p className="text-sm text-[#6b5542] mb-6">Please upload clear scans. Max file size: 10MB per file.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <button type="button" className="flex items-center justify-center gap-3 py-3 px-5 border border-gray-300 rounded-md text-[#3f2a1e] font-medium hover:bg-gray-50 transition-colors shadow-sm">
                <UploadCloud className="w-5 h-5 text-[#d4af7a]" />
                Add file (Passport Photo)
              </button>
              <button type="button" className="flex items-center justify-center gap-3 py-3 px-5 border border-gray-300 rounded-md text-[#3f2a1e] font-medium hover:bg-gray-50 transition-colors shadow-sm">
                <UploadCloud className="w-5 h-5 text-[#d4af7a]" />
                Add file (12th Marksheet)
              </button>
            </div>
          </FormCard>

          {/* Submit Button & Footer */}
          <div className="flex items-center justify-between pt-6 max-w-4xl mx-auto px-4">
            <button 
              type="submit"
              className="flex items-center gap-2.5 px-8 py-3 bg-[#3f2a1e] text-white font-semibold rounded-md hover:bg-[#2a1c14] shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5"
            >
              Submit <Send className="w-4 h-4" />
            </button>
            <div className="text-xs text-gray-500">Page 1 of 1</div>
          </div>
        </form>

        {/* Footer Area */}
        <footer className="text-center mt-16 text-xs text-gray-500 space-y-2">
          <p>This form was created inside Rizvi Group of Institutions.</p>
          
        </footer>
        
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default Admission;