'use client';

import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent }from '@/components/ui/Card';
import FormComponent from '@/components/ui/FormComponent';
import { Calculator, User, Users, Award, ChevronRight, GraduationCap, BrainCircuit, Target } from 'lucide-react';

const TutoringHomepage = () => {
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
    <div className="min-h-screen bg-sky-60">
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

      {/* Hero Section */}
      <div className="relative bg-sky-100 py-16 bg-cover bg-center" style={{ backgroundImage: "url('/kids sitting in classroom.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-60"></div> {/* This creates a white overlay with 60% opacity */}
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-[#021141] mb-2">
              Ace Exams
            </h1>
            <h2 className="text-3xl font-bold text-[#021141] mb-4">
              Maths Tutoring for 11+, SATs & GCSEs
            </h2>
            <p className="text-2xl font-bold text-[#021141] mb-8">
              Building knowledge, confidence and excellence in mathematics through group sessions and <span className="whitespace-nowrap">1-on-1 tutoring</span> 
            </p>
            <div className="space-x-4">
              <Button 
                className="text-xl bg-sky-600 hover:bg-sky-700 font-sans font-bold" 
                onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book your FREE trial lesson today!
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {/* Who We Are Section */}
      <div className="bg-sky-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#021141] mb-8">This is Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center items-center">
              <div className="h-20 w-20 bg-sky-600 rounded-full flex items-center justify-center mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <p className="text-xl text-gray-700 mb-6">
                We are a team of Watford/Bushey-based maths tutors, dedicated and striving to making learning simpler, enjoyable and effective for every student.
              </p>
              <p className="text-xl text-gray-700">
                Whether it's Year 1 or Year 11, our tailored approach ensures that each student's learning style is met, giving them the best chance to succeed.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="h-20 w-20 bg-[#021141] rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <p className="text-xl text-gray-700 mb-6">
                At Ace Exams, we focus on building confidence, solving problems, and enhancing exam techniques, ensuring our students reach their full potential.
              </p>
              <p className="text-xl text-gray-700">
                Our experienced tutors provide engaging lessons that adapt to the needs of each child, creating an environment where students love to learn.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Exam Stages Section */}
      <div className="bg-sky-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#021141] text-center mb-12">
            Maths Support for Every Level
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Basic Numeracy Card */}
            <Card className="p-6 bg-white">
              <CardContent className="space-y-4 pt-4 px-2">
                <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl text-[#021141] font-semibold">Basic Numeracy</h3>
                <p className="text-gray-600">
                  Fun and engaging sessions designed for kids aged 5–10 to build confidence and fluency in essential numeracy skills, setting a strong foundation for their future learning.
                </p>
              </CardContent>
            </Card>
            {/* 11+ Card */}
            <Card className="p-6 bg-white">
              <CardContent className="space-y-4 pt-4 px-2">
                <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl text-[#021141] font-semibold">11+</h3>
                <p className="text-gray-600">
                  Comprehensive preparation for grammar school entrance exams, covering all key mathematical concepts.
                </p>
              </CardContent>
            </Card>
            {/* SATs Card */}
            <Card className="p-6 bg-white">
              <CardContent className="space-y-4 pt-4 px-2">
                <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <BrainCircuit className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl text-[#021141] font-semibold">SATs</h3>
                <p className="text-gray-600">
                  Targeted tutoring to ensure strong mathematical foundations and excellent KS2 results.
                </p>
              </CardContent>
            </Card>
            {/* GCSE Card */}
            <Card className="p-6 bg-white">
              <CardContent className="space-y-4 pt-4 px-2">
                <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl text-[#021141] font-semibold">GCSE</h3>
                <p className="text-gray-600">
                  Expert guidance for both Foundation and Higher tier GCSE Mathematics, helping students build a solid understanding of key concepts and excel in their exams.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <div className="bg-sky-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#021141] text-center mb-12">Our Teaching Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white">
              <CardContent className="space-y-4 pt-4">
                <Users className="h-8 w-8 text-sky-600" />
                <h3 className="text-xl text-[#021141] font-semibold">Group Maths Classes</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                    <span>Small groups for maximum effectiveness</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                    <span>Interactive learning opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                    <span>Exam technique workshops</span>
                  </li>
                </ul>
                <Button className="w-full bg-sky-600 hover:bg-sky-700 mt-4 font-bold">
                Join Group Class
                </Button>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white">
              <CardContent className="space-y-4 pt-4">
                <User className="h-8 w-8 text-sky-600" />
                <h3 className="text-xl text-[#021141] font-semibold">1-on-1 Maths Tutoring</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                    <span>Tailored to individual learning needs</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                    <span>Focus on problem areas</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-sky-600 mr-2" />
                    <span>Regular progress assessment</span>
                  </li>
                </ul>
                <Button className="w-full bg-sky-600 hover:bg-sky-700 mt-4 font-bold">
                  Book Private Session
                </Button>
              </CardContent>
            </Card>            
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-sky-10 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Excel?</h2>
          <Link href="/services">
            <Button className="text-xl bg-sky-600 hover:bg-sky-700 font-bold">
              Start Your Maths Journey
            </Button>
          </Link>
        </div>
      </div>


      {/* Sign-Up Form Section */}
      <div id="signup-form" className="bg-sky-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#021141] text-center mb-8">
            Sign Up for a Free Trial Lesson
          </h2>
          <FormComponent />
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

export default TutoringHomepage;