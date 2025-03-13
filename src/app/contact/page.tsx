'use client';

import React, {useState, useEffect, useRef} from 'react';

const ContactPage = () => {
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
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need more information? We'd love to hear from you.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#021141] mb-4">
            Get in Touch
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Email:</strong> aceexams@example.com
            </li>
            <li>
              <strong>Phone:</strong> +44 123 456 7890
            </li>
          </ul>
          <p className="text-gray-600 mt-8">
            Alternatively, you can reach out to us via our social media channels. We look forward to helping you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
