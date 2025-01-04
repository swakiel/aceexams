import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-sky-50">
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
                  <span>Personalized learning plans</span>
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
