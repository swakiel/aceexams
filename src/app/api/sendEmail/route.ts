import 'dotenv/config';
import nodemailer from 'nodemailer';
import fs from 'fs';


require('dotenv').config() 

export async function POST(req: Request) {
  console.log('Environment Variables Loaded:', process.env);
  console.log('REACT_APP_GMAIL_USER:', process.env.NEXT_GMAIL_USER); // Log GMAIL_USER
  console.log('REACT_APP_GMAIL_APP_PASSWORD:', process.env.NEXT_GMAIL_APP_PASSWORD); // Log GMAIL_APP_PASSWORD


  const { firstName, lastName, email, phone, childAbility } = await req.json();

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !childAbility) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  // Configure Gmail transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Using Gmail service
    auth: {
      user: process.env.NEXT_GMAIL_USER,
      pass: process.env.NEXT_GMAIL_APP_PASSWORD 
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: 'ace.exams.smtp@gmail.com',  // Your Gmail address
      to: 'ace.exams@outlook.com',   // Where you want to receive the form submissions
      subject: 'New Tutoring Signup',
      html: `
        <h1>New Tutoring Signup</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Child Ability Level:</strong> ${childAbility}</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ 
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
