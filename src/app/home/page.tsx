import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent }from '@/components/ui/Card';
import { Calculator, User, Users, Award, ChevronRight, GraduationCap, BrainCircuit, Target } from 'lucide-react';



const TutoringHomepage = () => {
  return (

    <div className="min-h-screen bg-sky-60">
      {/* Header */}
      <header className="text-white py-4" style={{ backgroundColor: '#021141' }}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center mr-auto"> {/* Added mr-auto to push the logo to the left */}
            <img src="/logo.png" alt="AceExams Logo" className="max-h-16 max-w-full" />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="/home" className="hover:underline font-bold text-[#b1970c]">Home</a>
              </li>
              <li>
                <a href="/services" className="hover:underline font-bold text-[#b1970c]">Services</a>
              </li>
              <li>
                <a href="/about" className="hover:underline font-bold text-[#b1970c]">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline font-bold text-[#b1970c]">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-sky-100 py-16 bg-cover bg-center" style={{ backgroundImage: "url('/kids sitting in classroom.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-60"></div> {/* This creates a black overlay with 40% opacity */}
        
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
              <Button className="text-xl bg-sky-600 hover:bg-sky-700 font-sans font-bold">
                Book your FREE trial lesson today!
              </Button>
            </div>
          </div>
        </div>
      </div>

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
                Whether it's Year 4 or Year 11, our tailored approach ensures that each student’s learning style is met, giving them the best chance to succeed.
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
          <h2 className="text-3xl font-bold text-[#021141] text-center mb-12">Maths Support for every Level</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white">
              <CardContent className="space-y-4 pt-4">
                <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl text-[#021141] font-semibold">11+</h3>
                <p className="text-gray-600">
                  Comprehensive preparation for grammar school entrance exams, covering all key mathematical concepts
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white">
              <CardContent className="space-y-4 pt-4">
                <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <BrainCircuit className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl text-[#021141] font-semibold">SATs</h3>
                <p className="text-gray-600">
                  Targeted tutoring to ensure strong mathematical foundations and excellent KS2 results
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white">
              <CardContent className="space-y-4 pt-4">
                <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-sky-600" />
                </div>
                <h3 className="text-xl text-[#021141] font-semibold">GCSE</h3>
                <p className="text-gray-600">
                  Expert guidance for both Foundation and Higher tier GCSE Mathematics, helping students build a solid understanding of key concepts and excel in their exams
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