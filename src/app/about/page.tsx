'use client';

import React, {useState, useEffect, useRef} from 'react';

const AboutPage = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  
  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Header */}
      <header className="text-white py-4" style={{ backgroundColor: '#021141' }}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center mr-auto">
            <img src="/logo.png" alt="AceExams Logo" className="max-h-16 max-w-full" />
          </div>

          {/* Navigation */}
          <nav className="relative">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              <li><a href="/home" className="hover:underline font-bold text-[#b1970c]">Home</a></li>
              <li><a href="/services" className="hover:underline font-bold text-[#b1970c]">Services</a></li>
              <li><a href="/about" className="hover:underline font-bold text-[#b1970c]">About Us</a></li>
              <li><a href="/contact" className="hover:underline font-bold text-[#b1970c]">Contact Us</a></li>
            </ul>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className="text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? (
                  // Close (X) icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={toggleMenu}
              ></div>
            )}

            {/* Mobile menu */}
            <div
              ref={menuRef}
              className={`fixed top-0 right-0 h-full bg-[#021141] text-white space-y-4 p-6 transform ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } transition-transform duration-300 md:hidden w-64 z-50 overflow-y-auto`}
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-lg text-[#b1970c]">Menu</h3>
                <button 
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="space-y-6">
                <li><a href="/home" className="block hover:underline font-bold text-[#b1970c] py-2">Home</a></li>
                <li><a href="/services" className="block hover:underline font-bold text-[#b1970c] py-2">Services</a></li>
                <li><a href="/about" className="block hover:underline font-bold text-[#b1970c] py-2">About Us</a></li>
                <li><a href="/contact" className="block hover:underline font-bold text-[#b1970c] py-2">Contact Us</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
          {/* About Us Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/worksheet and calculator.jpg"
                alt="Team Tutoring"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#021141] mb-4">About Us</h1>
              <p className="text-lg text-gray-700 leading-7">
                At Ace Exams, we are committed to helping students in Watford and Bushey achieve their full potential in mathematics.
                Our personalised approach ensures that each student receives the guidance they need, whether through 1-on-1 sessions
                or collaborative group classes. We cater to students from Year 4 through Year 11, focusing on building confidence,
                skills, and a genuine love for mathematics.
              </p>
            </div>
          </div>

          {/* Personal Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#021141] mb-4">Meet Sam</h2>
            <p className="text-gray-700 leading-7">
              Hi, I’m Sam, the founder of Ace Exams. I have been tutoring mathematics for over 8 years, working with students
              across a wide range of abilities and age groups. I graduated with a Maths degree from the University of Bath, and
              during my academic journey, I achieved the highest A-Level results in my school. My passion lies in helping students
              overcome their challenges in mathematics, and I take pride in seeing them succeed and grow in confidence.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#021141] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src="/logo.png" alt="AceExams Logo" className="max-h-16 max-w-full" />
          </div>
          {/* Contact Info */}
          <div className="space-y-2 text-right">
            <p className="text-lg font-bold text-[#846c14]">Contact Us</p>
            <p className="text-sm mb-1 text-[#b1970c]">Email: <a href="mailto:ace.exams@outlook.com" className="hover:underline text-[#b1970c]">ace.exams@outlook.com</a></p>
            <p className="text-sm text-[#b1970c]">Phone: <a href="tel:+441234567890" className="hover:underline text-[#b1970c]">074 3601 5237</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
