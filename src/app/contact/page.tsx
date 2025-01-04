import React from 'react';

const ContactPage = () => {
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
