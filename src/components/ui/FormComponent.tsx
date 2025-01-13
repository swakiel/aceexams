'use client';

import React from 'react';

const FormComponent = () => {
  return (
    <form
      className="bg-white border border-gray-300 p-8 rounded-md space-y-6"
      onSubmit={async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submission triggered");
        const formData = new FormData(e.target as HTMLFormElement);
        console.log("Form data:", formData);
        const data = Object.fromEntries(formData.entries());

        try {
          // Change the fetch URL to match your Next.js 13 API route structure
          const response = await fetch('/api/sendEmail/route', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            console.log("Form submitted successfully");
            alert('Form submitted successfully!');
          } else {
            console.error("Form submission failed:");
            alert('Failed to submit the form.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('An error occurred while submitting the form.');
        }
      }}
    >
      <div>
        <label htmlFor="firstName" className="block text-lg font-semibold text-[#021141] mb-2">
          First Name
        </label>
        <input id="firstName" name="firstName" 
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-600"
          placeholder="Enter your first name" required />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-lg font-semibold text-[#021141] mb-2">Last Name</label>
        <input id="lastName" name="lastName"
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-600"
          placeholder="Enter your last name" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-semibold text-[#021141] mb-2">Email</label>
        <input type="email" id="email" name="email" 
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-600"
          placeholder="Enter your email address" required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-lg font-semibold text-[#021141] mb-2">Phone</label>
        <input type="tel" id="phone" name="phone"
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-600"
          placeholder="Enter your phone number" required />
      </div>
      <div>
        <label htmlFor="childAbility" className="block text-lg font-semibold text-[#021141] mb-2">Child's Ability Level</label>
        <select id="childAbility" name="childAbility" 
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-600"
          required>
          <option value="">Select...</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-md text-lg">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
