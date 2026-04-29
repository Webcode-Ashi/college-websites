import React from 'react';
import Footer from '../Components/Layout/Footer';

const Admission = () => {
  // Aapka provided Google Form link
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSd7dF_JQTOO8dLATLP15WIZH5pI4ubGFxw0cech7rqFBzFQNw/viewform?embedded=true";

  return (
    <>
      <div className="bg-[#f0f4f8] min-h-screen flex flex-col items-center pt-10 pb-20">
        
        {/* Container for the Form */}
        <div className="w-full max-w-4xl px-4 flex-1">
          
          {/* Header decoration like Google Forms */}
          <div className="h-3 w-full bg-[#1E3A5F] rounded-t-xl shadow-sm"></div>
          
          <div className="bg-white rounded-b-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* iframe to display the Google Form */}
            <iframe
              src={googleFormLink}
              width="100%"
              height="1200" // Height adjust kar sakte hain form ki length ke hisaab se
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>

          {/* Simple Note below the form */}
          <p className="text-center text-xs text-gray-400 mt-6 italic">
            Having trouble viewing the form? <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7dF_JQTOO8dLATLP15WIZH5pI4ubGFxw0cech7rqFBzFQNw/viewform" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Open in new tab</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admission;