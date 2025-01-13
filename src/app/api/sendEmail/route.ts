import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, childAbility } = await req.json();

  if (!firstName || !lastName || !email || !phone || !childAbility) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
  }

  // Configure your email transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'EMAIL', // Your email
      pass: 'PASSWORD',  // Your email password
    },
  });

  try {
    await transporter.sendMail({
      from: '"Ace Exams" <ace.exams@outlook.com>', // Sender's name and email
      to: 'ace.exams@outlook.com', // Receiver's email
      subject: 'New Tutoring Signup', // Subject line
      html: `
        <h1>New Tutoring Signup</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Child Ability Level:</strong> ${childAbility}</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
