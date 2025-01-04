import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="text-white py-4" style={{ backgroundColor: '#021141' }}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
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
