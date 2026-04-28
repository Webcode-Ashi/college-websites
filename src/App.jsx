import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';

// Import All Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Institutions from './Pages/Institution';
import Courses from './Pages/Courses';
import Admissions from './Pages/Admission';
import CampusLife from './Pages/CampusLife';
import Placements from './Pages/Placements';
import NewsEvents from './Pages/NewsEvents';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f4ee] flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Fallback Route */}
            <Route path="*" element={
              <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl heading-font mb-4">404</h1>
                  <p className="text-[#8c6f47]">Page Not Found</p>
                  <a href="/" className="mt-6 inline-block text-gold hover:underline">
                    Go Back Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;