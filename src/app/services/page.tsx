'use client';

import React, {useState, useEffect, useRef} from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { ChevronRight } from 'lucide-react';

const ServicesPage = () => {
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
    

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#021141] mb-8 text-center">
          Our Services
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-white">
            <CardContent className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-[#021141]">1-on-1 Tutoring</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                  <span>Personalised learning plans</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                  <span>Focus on individual needs</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                  <span>Flexible scheduling</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-6 bg-white">
            <CardContent className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-[#021141]">Group Classes</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                  <span>Small groups for focused learning</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                  <span>Interactive sessions</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                  <span>Exam preparation workshops</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-6 bg-white">
            <CardContent className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-[#021141]">Exam Prep</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                  <span>Mock tests and assessments</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                  <span>Targeted revision</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                  <span>Focus on exam techniques</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#021141] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          {/* Logo on the Left */}
          <div className="flex items-center">
            <img src="/logo.png" alt="AceExams Logo" className="max-h-20 max-w-full" />
          </div>

          {/* Contact Us on the Right */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-2 text-[#846c14]">Contact Us</h4>
            <p className="text-sm mb-1 text-[#b1970c]">Email: <a href="mailto:ace.exams@outlook.com" className="hover:underline text-[#b1970c]">ace.exams@outlook.com</a></p>
            <p className="text-sm text-[#b1970c]">Phone: <a href="tel:+441234567890" className="hover:underline text-[#b1970c]">074 3601 5237</a></p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default ServicesPage;
